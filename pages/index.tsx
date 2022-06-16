import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center max-w-3xl">
        <h1 className="text-4xl">Hey, it works!</h1>
        <p className="pt-5">
          This is my nextjs template for rapidly creating apps. <br/>
          It contains: <code>tailwindcss, @fontsource/roboto-condensed, next-themes</code> <br/>
          What's configured? dark themed by default, no system pref theme, no flashing, offline font configured, next themes ready, 
          using pnpm, custom documents configured, components folder setup, 404 custom error.
        </p>
      </main>
    </div>
  );
}

export default Home
