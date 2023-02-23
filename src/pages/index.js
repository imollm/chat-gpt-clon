import { Layout } from '@/components/Layout'
import { Chat } from '@/components/Chat'
import { Login } from '@/components/Login'
import { useUser } from '@/hooks/useUser'

export default function Home() {
  const isUserLoggedIn = useUser()

  if (isUserLoggedIn) {
    return (
      <Layout>
        <Chat />
      </Layout>
    )
  }

  return (
    <Login />
  )
}
