import { Carousel } from "react-bootstrap";

const CarouselHome = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d block w-100"
            style={{ maxHeight: "500px", objectFit: "cover" }}
            src="https://www.abc.es/xlsemanal/wp-content/uploads/sites/5/2021/07/confesiones-de-un-hacker.jpg"
            alt="img1"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d block w-100"
            style={{ maxHeight: "500px", objectFit: "cover" }}
            src="https://miro.medium.com/v2/resize:fit:2000/1*Exy_X0LPWBEfUobbYAqdHQ.png"
            alt="img2"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d block w-100"
            style={{ maxHeight: "500px", objectFit: "cover" }}
            src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1284736/op-Ten-Front-End-Design-Rules-For-Developers_Luke-Social-33a3a7c9b759fdaa22973906070f8065.png"
            alt="img3"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselHome;
