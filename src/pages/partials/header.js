import styles from '../../styles/partials/header.module.scss'

export default function Header() {
  return (
    <header className={styles.tdjHeader}>
      <a className={styles.tdjLogo}>
        <img src="https://cdn.worldvectorlogo.com/logos/plugdj.svg" />
      </a>
    </header>
  )
}
