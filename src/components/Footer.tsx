export function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Raunak Kushwaha</p>
      <div className="footer-links">
        <a href="https://github.com/Raunak-kushwaha" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/raunak-kushwaha/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:raunakkush2005@gmail.com">Email</a>
      </div>
      <p className="footer-copy">Designed with intent · Built with care</p>
    </footer>
  )
}
