import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hello from './components/Hello'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Manu Labarca - Portafolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hello />
      </main>
      <footer className={styles.footer}>
        <a
          href=""
          rel="noopener noreferrer"
        >
          Creado por Manuel Labarca - Ejemplo para clases en Inacap Apoquindo
        </a>
      </footer>
    </div>
  )
}
