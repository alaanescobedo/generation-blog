import styles from '../styles/navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.menu}>Blog</div>
      <div className={styles.search}>Search</div>
    </nav>
  )
}
