import { createClient } from '@supabase/supabase-js'

class SupabaseClient {
	
	constructor() {
		this.supabaseUrl = process.env.SUPABASE_URL
		this.supabaseAnonKey = process.env.SUPABASE_ANON_KEY
		this.supabaseSecretKey = process.env.SUPABASE_SECRET_KEY
		this.options = {
			global: {
				headers: {
					'Authorization': `Bearer ${this.supabaseSecretKey}`
				}
			}
		}
		this.client = createClient(
			this.supabaseUrl,
			this.supabaseAnonKey,
			this.options
		)
	}

	static getInstance() {
		if (!this.instance) {
			this.instance = new SupabaseClient()
		}

		return this.instance
	}

	async storeChat(chat) {
		const { data, error }
			= await this.client
				.from('chats').insert({
					...chat
				})
				.select()

		if (error) throw new Error(error)

		return data
	}

	async getChat(chatId) {
		const { data, error }
			= await this.client
				.from('chats')
				.select()
				.eq('id', chatId)

		return data
	}

	async getChats(userId) {
		const { data, error }
			= await this.client
				.from('chats')
				.select()
				.eq('user_id', userId)

		return data
	}

	async getLastChat(userId) {
		const { data, error }
			= await this.client
				.from('chats')
				.select()
				.eq('user_id', userId)
				.order('created_at', { ascending: false })
				.limit(1)

		return data
	}

	async getMessages(chatId) {
		const { data, error }
			= await this.client
				.from('messages')
				.select()
				.eq('chat_id', chatId)

		return data
	}

	async storeMessage(message, chatId) {
		const { data, error }
			= await this.client
				.from('messages')
				.insert({
					...message,
					chat_id: chatId
				})
				.select()

		if (error) throw new Error(error)

		return data
	}
}

export default SupabaseClient
