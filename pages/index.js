import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Get Started: Zendesk App Framework with Next.js</title>
        <meta name="ZAF and Next Scaffold" content="Zendesk app utilizing the Next framework" />
      </Head>
    </div>
  )
}
