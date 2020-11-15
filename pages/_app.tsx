import Head from 'next/head'
import { AppProps } from 'next/app'
import { PageTransition } from 'next-page-transitions'
import { useRouter } from 'next/router'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Harry Muir</title>
      </Head>
      <PageTransition timeout={300} classNames="page-transition">
        <Component {...pageProps} key={router.route} />
      </PageTransition>
    </>
  )
}

export default App
