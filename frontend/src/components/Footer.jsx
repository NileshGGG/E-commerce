function Footer() {

  return (
    <footer className="bg-dark text-light mt-auto py-5">
      <div className="container">
        <div className="row">
          {/* Left */}
          <div className="col-md-4 mb-4">
            <h2 className="text-warning fw-bold">
              NG Store
            </h2>
            <p>
              This is Modern ecommerce website By
              <strong> Nilesh Gupta</strong>
            </p>
          </div>

          {/* Middle */}
          <div className="col-md-4 mb-4">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-light text-decoration-none">
                  Products
                </a>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div className="col-md-4 mb-4">
            <h4>Contact</h4>
            <p>Email: ngst**e@gmail.com</p>
            <p>Phone: +91 9876***210</p>
          </div>
        </div>
        <hr />
        <p className="text-center mb-0">
          © 2026 NG Store | Made By: Nilesh Gupta
        </p>
      </div>
    </footer>
  );
}

export default Footer;