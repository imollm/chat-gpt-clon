import React from 'react'

export function AddChatIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      className='w-4 h-4'
    >
      <path d='M12 5L12 19'></path>
      <path d='M5 12L19 12'></path>
    </svg>
  )
}

export function OpenAiIcon() {
  return (
    <div className='w-8 h-8 p-1 rounded-sm bg-gptlogo'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='41'
        height='41'
        fill='none'
        strokeWidth='1.5'
        className='w-6 h-6'
        viewBox='0 0 41 41'
      >
        <path
          fill='currentColor'
          d='M37.532 16.87a9.963 9.963 0 00-.856-8.184 10.078 10.078 0 00-10.855-4.835A9.964 9.964 0 0018.306.5a10.079 10.079 0 00-9.614 6.977 9.967 9.967 0 00-6.664 4.834 10.08 10.08 0 001.24 11.817 9.965 9.965 0 00.856 8.185 10.079 10.079 0 0010.855 4.835 9.965 9.965 0 007.516 3.35 10.078 10.078 0 009.617-6.981 9.967 9.967 0 006.663-4.834 10.079 10.079 0 00-1.243-11.813zM22.498 37.886a7.474 7.474 0 01-4.799-1.735c.061-.033.168-.091.237-.134l7.964-4.6a1.294 1.294 0 00.655-1.134V19.054l3.366 1.944a.12.12 0 01.066.092v9.299a7.505 7.505 0 01-7.49 7.496zM6.392 31.006a7.471 7.471 0 01-.894-5.023c.06.036.162.099.237.141l7.964 4.6a1.297 1.297 0 001.308 0l9.724-5.614v3.888a.12.12 0 01-.048.103l-8.051 4.649a7.504 7.504 0 01-10.24-2.744zM4.297 13.62A7.469 7.469 0 018.2 10.333c0 .068-.004.19-.004.274v9.201a1.294 1.294 0 00.654 1.132l9.723 5.614-3.366 1.944a.12.12 0 01-.114.01L7.04 23.856a7.504 7.504 0 01-2.743-10.237zm27.658 6.437l-9.724-5.615 3.367-1.943a.121.121 0 01.113-.01l8.052 4.648a7.498 7.498 0 01-1.158 13.528v-9.476a1.293 1.293 0 00-.65-1.132zm3.35-5.043c-.059-.037-.162-.099-.236-.141l-7.965-4.6a1.298 1.298 0 00-1.308 0l-9.723 5.614v-3.888a.12.12 0 01.048-.103l8.05-4.645a7.497 7.497 0 0111.135 7.763zm-21.063 6.929l-3.367-1.944a.12.12 0 01-.065-.092v-9.299a7.497 7.497 0 0112.293-5.756 6.94 6.94 0 00-.236.134l-7.965 4.6a1.294 1.294 0 00-.654 1.132l-.006 11.225zm1.829-3.943l4.33-2.501 4.332 2.5v5l-4.331 2.5-4.331-2.5V18z'
        ></path>
      </svg>
    </div>
  )
}

export function Avatar({ src }) {
  return (
    <figure className='w-[30px] h-[30px] rounded-sm overflow-hidden'>
      <img src={src} alt='avatar' />
    </figure>
  )
}

export function SendIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      className='w-4 h-4 mr-1 stoke-2'
      viewBox='0 0 24 24'
    >
      <path className='stroke-gptgray' d='M22 2L11 13'></path>
      <path className='stroke-gptgray' d='M22 2L15 22 11 13 2 9 22 2z'></path>
    </svg>
  )
}

export function ChatIcon() {
  return (
    <svg
      stroke='currentColor'
      fill='none'
      strokeWidth='2'
      viewBox='0 0 24 24'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-4 w-4'
      height='1em'
      width='1em'
    >
      <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'></path>
    </svg>
  )
}

export function Spinner() {
  return (
    <figure className='m-0 p-0 flex justify-center'>
      <svg
        fill='#8d8d8d'
        className='w-4 h-4 animate-spin'
        viewBox='0 0 24 24'
        role='img'
      >
        <path d='M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z' />
      </svg>
    </figure>
  )
}

export function EditIcon() {
  return (
    <svg
      stroke='currentColor'
      fill='none'
      strokeWidth='2'
      viewBox='0 0 24 24'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-4 w-4'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M12 20h9'></path>
      <path d='M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z'></path>
    </svg>
  )
}

export function TrashIcon() {
  return (
    <svg
      stroke='currentColor'
      fill='none'
      strokeWidth='2'
      viewBox='0 0 24 24'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-4 w-4'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <polyline points='3 6 5 6 21 6'></polyline>
      <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'></path>
      <line x1='10' y1='11' x2='10' y2='17'></line>
      <line x1='14' y1='11' x2='14' y2='17'></line>
    </svg>
  )
}
