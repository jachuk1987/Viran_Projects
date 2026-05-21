import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* TOP NAV */}
      <div className="footer-top-nav">
        <Container className="d-flex justify-content-center gap-5 py-4">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </Container>
      </div>

      {/* MAIN */}
      <div className="footer-main py-5">
        <Container>

          {/* ADDRESS */}
          <Row className="gy-4">
            <Col md={4}>
              <h5>BANGALORE</h5>
              <p>
                Sri Vinayaka Towers, No.292, 2nd Floor 7th Cross, Domlur,<br />
                Bengaluru – 560071
              </p>
              <p>Phone: 7338446560</p>
              <p>Email: narasimha87narasimha@gmail.com</p>
            </Col>

            <Col md={4}>
              <h5>HYDERABAD</h5>
              <p>
                SLV Towers, 2nd Floor AG Colony, Upperpally,
                Telangana – 500048
              </p>
              <p>Phone: 7338446560</p>
              <p>Email: narasimha87narasimha@gmail.com</p>
            </Col>

            <Col md={4}>
              <h5>CALL NOW</h5>
              <p>Phone: 7338446560</p>
              <p>Contact us to get all your queries answered</p>
              <button className="btn btn-warning fw-bold">
                Check Now
              </button>
            </Col>
          </Row>

          <hr />

          {/* SERVICES */}
          <Row className="gy-3 footer-links my-4">
            <Col md={3}>
              <a href="#">Home Cleaning Services in Bangalore</a>
              <a href="#">Bathroom Cleaning in Bangalore</a>
              <a href="#">Carpet Cleaning Services in Bangalore</a>
              <a href="#">Floor Cleaning Services in Bangalore</a>
            </Col>

            <Col md={3}>
              <a href="#">Commercial Cleaning in Bangalore</a>
              <a href="#">Office Cleaning Services in Bangalore</a>
              <a href="#">Office Cleaners in Bangalore</a>
              <a href="#">Sofa Cleaning Services in Bangalore</a>
            </Col>

            <Col md={3}>
              <a href="#">Residential Cleaning in Bangalore</a>
              <a href="#">Industrial Cleaning Services in Bangalore</a>
              <a href="#">House Cleaning Services in Bangalore</a>
              <a href="#">Deep Cleaning Services in Bangalore</a>
            </Col>

            <Col md={3}>
              <a href="#">Home Cleaning Services in Domlur</a>
              <a href="#">Sofa Cleaning Services in Domlur</a>
              <a href="#">Deep Cleaning Services in Domlur</a>
              <a href="#">Bathroom Cleaning Services in Domlur</a>
            </Col>
          </Row>

          <hr />

          {/* AREAS */}
          <Row className="gy-4 footer-areas">

            <Col md={3}>
              <h6>CANTONMENT AREAS</h6>
              <p>Richmond Town | Austin Town | Murphy Town | Fraser Town | Cox Town</p>
            </Col>

            <Col md={3}>
              <h6>MARKET AREAS</h6>
              <p>Chickpet | Balepet | Cottonpet | Sultanpet | KR Market | Avenue Road | Domlur | Indira Nagar</p>
            </Col>

            <Col md={3}>
              <h6>EASTERN AREAS</h6>
              <p>Bellandur | CV Raman Nagar | Hoodi | KR Puram | Mahadevapura | Marathahalli | Whitefield</p>
            </Col>

            <Col md={3}>
              <h6>NORTH-EASTERN AREAS</h6>
              <p>Banaswadi | HBR Layout | Horamavu | Kalyan Nagar | Ramamurthy Nagar</p>
            </Col>

            <Col md={3}>
              <h6>NORTHERN AREAS</h6>
              <p>Hebbal | Jalahalli | Mathikere | Peenya | Yelahanka</p>
            </Col>

            <Col md={3}>
              <h6>SOUTH-EASTERN AREAS</h6>
              <p>Bommanahalli | BTM Layout | Electronic City | Koramangala | HSR Layout</p>
            </Col>

            <Col md={3}>
              <h6>SOUTHERN AREAS</h6>
              <p>Banashankari | Basavanagudi | Jayanagar | JP Nagar | Uttarahalli</p>
            </Col>

            <Col md={3}>
              <h6>WESTERN AREAS</h6>
              <p>Basaveshwaranagar | Kengeri | Rajajinagar | Vijayanagar</p>
            </Col>

            <Col md={3}>
              <h6>PERIPHERAL TOWNS</h6>
              <p>Anekal | Attibele | Chandapura | Devanahalli | Hosur Road | Magadi Road</p>
            </Col>

          </Row>

        </Container>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom text-center py-3">
        © {new Date().getFullYear()} House Cleaning Solutions | Designed By Viran Info Solutions
      </div>

    </footer>
  );
};

export default Footer;
