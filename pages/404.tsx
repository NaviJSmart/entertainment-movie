import Head from 'next/head'
import Link from 'next/link'

export default function Custom404() {
  return (
    <div className='my-20 flex flex-col items-center justify-center'>
      <Head>
        <title>404 - Not Found | Entertainment App</title>
      </Head>
      <h1 className='my-20 text-xl md:text-4xl'>404 - Page Not Found</h1>
      <Link href='/' passHref>
        <button className='rounded-md bg-app-greyish-blue p-2 px-4 hover:bg-slate-700 transition-all'>
          Go home
        </button>
      </Link>
    </div>
  )
}