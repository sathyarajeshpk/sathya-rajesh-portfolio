export default function Footer() {
  return (
    <footer className="wrap border-t rule py-8 text-[0.95rem]">
      <p>
        <a href="mailto:sathyarajeshpk@gmail.com">sathyarajeshpk@gmail.com</a> &middot;{" "}
        <a href="tel:+919597996996">+91 95979 96996</a> &middot; Chennai, Tamil Nadu, India
      </p>
      <p>
        <a href="https://www.linkedin.com/in/sathyarajeshpk/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>{" "}
        &middot;{" "}
        <a href="https://github.com/sathyarajeshpk" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>{" "}
        &middot;{" "}
        <a
          href="https://www.fiverr.com/sathyarajesh638/build-azure-data-engineering-solutions-using-adf-databricks-and-pyspark"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fiverr
        </a>{" "}
        &middot;{" "}
        <a href="https://wa.me/919597996996" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </p>
      <p className="muted mb-0">&copy; {new Date().getFullYear()} Sathya Rajesh PK</p>
    </footer>
  );
}
