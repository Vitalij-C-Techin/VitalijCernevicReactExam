const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer id="footer">
        <div>
          <span className="footer__author">Vitalij Cernevic</span>
          <span className="footer__year">{year}</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
