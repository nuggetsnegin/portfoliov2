import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Negin - Front-End Dev</title>
        <link href="/fonts/style.css" rel="stylesheet"/>
      </Head>

      <main className={styles.main}>
      
      <div className={styles.imageContainer}>
        <h1 className={styles.title}>
          Negin Sauermann
        </h1>
        <p className={styles.description}>
          <code className={styles.code}>front-end developer</code>
        </p>
      </div>

        <img className={styles.landingImage} src="/assets/genie-trans.png" alt="Illustration of Negin and her cat"/>

      </main>
    </div>
  )
}
