import Head from 'next/head'
import styles from '../styles/Home.module.css'
import getLabels from '../helper/getlabels'
import { withLabels } from '../hooks/withLabels'
import LangSwitcher from '../components/langSwitcher'

export default function Home( { labels, lang } ) {

  const { t } = withLabels( labels );

  return (
    <div className={styles.container}>
      <Head>
        <title>{ t( 'title' ) } </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          { t( 'welcome' ) }
        </h1>

        <p className={styles.description}>
          { t( 'getStarted' ) }{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <LangSwitcher selected = { lang } />
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>{ t( 'documentation' ) } &rarr;</h3>
            <p>{ t( 'documentationDescription' ) }</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>{ t( 'learn' ) } &rarr;</h3>
            <p>{ t( 'learnDescription' ) }</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>{ t( 'examples' ) } &rarr;</h3>
            <p>{ t( 'examplesDescription' ) }</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>{ t( 'deploy' ) } &rarr;</h3>
            <p>
              { t( 'deployDescription' ) }
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

// export async function getStaticProps() {

//   const labels = getLabels( 'home.json' );

//   return {
//     props: {
//       labels
//     }
//   };
// };

export async function getServerSideProps({ req }) {

  const lang = /lang=hi/.test( req?.headers?.cookie ) ? 'hi' : 'en';

  const labels = getLabels( 'home.json', lang );

  return {
    props: {
      labels,
      lang
    }, // will be passed to the page component as props
  }
}