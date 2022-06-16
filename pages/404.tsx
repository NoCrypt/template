import type { NextComponentType, NextPageContext } from "next";
import Head from 'next/head'

interface Props {}

const NotFound: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center max-w-3xl">
        <h1 className="text-4xl">404 Not Found!</h1>
        <p className="pt-5">
          The page you are looking for does not exist.
        </p>
      </main>
    </div>
  );
}

export default NotFound