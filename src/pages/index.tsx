import Head from 'next/head'
import Link from 'next/link'

export default function Home () {
  return (
    <>
      <Head>
        <title>SquiggleDAO image server</title>
        <meta name='description' content='SquiggleDAO image server' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex min-h-screen w-full justify-center items-center flex-col flex-1'>
        <div className='text-3xl'>
          Please visit{' '}
          <Link href={'https://squiggledao.com'} className='text-blue-600'>
            SquiggleDAO.com
          </Link>
        </div>
      </main>
    </>
  )
}
