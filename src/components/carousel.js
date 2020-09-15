import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class CarouselComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    };

    /* Branding Slider Dynamic */
    let BrandingSlider = [
      {
        BrandLogo: require("../images/iphone.png"),
        alt: "apple logo",
      },
      {
        BrandLogo: require("../images/google.png"),
        alt: "google logo",
      },
      {
        BrandLogo: require("../images/samsung.png"),
        alt: "Samsung logo",
      },
      {
        BrandLogo: require("../images/microsoftlogo.png"),
        alt: "Microsoft logo",
      },
      {
        BrandLogo: require("../images/hp.png"),
        alt: "Hp logo",
      },
      {
        BrandLogo: require("../images/sony.png"),
        alt: "Sony logo",
      },
    ];

    return (
      <div style={{ paddingTop: 2, paddingBottom: 20 }} className="container">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {BrandingSlider.map((item) => (
            <div className="col-md-6 d-flex align-self-center">
              <img src={item.BrandLogo} alt={item.alt} />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default CarouselComponent;
