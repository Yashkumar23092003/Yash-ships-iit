const Footer = () => (
  <footer className="border-t border-border py-10 px-6">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
      <span className="font-syne font-semibold text-foreground">Yash Kumar</span>
      <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs text-muted-foreground">
        <a href="https://github.com/Yashkumar23092003" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/yash-iitd" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
          LinkedIn
        </a>
        <a href="mailto:yash9704.iitd@gmail.com" className="hover:text-primary transition-colors">
          yash9704.iitd@gmail.com
        </a>
        <a href="tel:+918699427745" className="hover:text-primary transition-colors">
          +91 8699427745
        </a>
      </div>
    </div>
    <p className="font-mono text-[10px] text-muted-foreground text-center mt-6">
      Built by Yash. Probably while thinking about the next product.
    </p>
  </footer>
);

export default Footer;
