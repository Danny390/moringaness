const Footer = () => {
    const footerText = (
        <p>Plot 194 Waterval, Pyramid, 0120, Pretoria, Gauteng, South Africa |
        Copyright © 2020 Moringaness</p>
    )

  return (
    <footer className="footer bg-light">
       <p type="horizontal" width="100" height="100"> ♢ </p>
      {footerText}
      <p type="horizontal" width="100" height="100"> ♢ </p>
    </footer>
  )
}

export default Footer