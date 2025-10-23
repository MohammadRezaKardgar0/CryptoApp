import styles from "./Layout.module.css";

function Layout({ children }) {
  return <>
  <header className={styles.header}>
    <h1>Crypto App</h1>
    <p><a href="#">Portfolio</a> | React.js Full Course</p>
  </header>
  {children}
  <footer className={styles.footer}>
    <p>Developed By MRKG With ❤</p>
  </footer>
  </>;
}

export default Layout;
