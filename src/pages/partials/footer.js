import styles from '../../styles/partials/footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://www.lefrantguillaume.com?ref=team_dj"
        target="_blank"
        rel="noopener noreferrer"
      >
        Created by Guillaume Lefrant &amp; Cintia Ferreira
      </a>
    </footer>
  )
}
