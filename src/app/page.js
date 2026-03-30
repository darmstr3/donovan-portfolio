import styles from './holding.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.tag}>
          <span className={styles.dot} />
          New York, NY
        </div>
        <h1 className={styles.name}>Donovan Armstrong</h1>
        <p className={styles.status}>Something is being built here.</p>
        <div className={styles.links}>
          <a href="https://github.com/darmstr3" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/donovan-armstrong-06144b20b/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href="mailto:armstrongdonovan3@gmail.com">Email ↗</a>
        </div>
      </div>
    </main>
  )
}
