import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// other Component Import
// import SectionItem from "./sectionItem";
// style Import
import Section from "./Section/section";
import SlideShow from "./SlideShow";
import Banners from "./Banners";

import Home1 from "../../../assets/hompage/home1.webp";
import Home2 from "../../../assets/hompage/home2.webp";
import Home3 from "../../../assets/hompage/home3.webp";
import Home4 from "../../../assets/hompage/home4.webp";
import "./homepage.scss";

class HomePage extends React.Component {
  state = {
    sections: [
      {
        img: Home1,
        link: "/men",
        name: "Men"
      },
      {
        img: Home2,
        link: "/women",
        name: "Women"
      },
      {
        img: Home3,
        link: "/boys",
        name: "Boy"
      },
      {
        img: Home4,
        link: "/girls",
        name: "Girl"
      }
    ]
  };

  render() {
    return (
      <div className="homepage">
        <div className="container">
          <header className="heading">
            <h2>Closet Goodies</h2>
            <h4>Exclusive Wears for Men, Women, Boys, Girls</h4>
          </header>
          {/* <SlideShow /> */}
          <div className="slideshow"></div>

          <Banners />
          <div className="homepage-sections">
            {this.state.sections.map(section => (
              <div className="homepage-section">
                <img src={section.img} alt="sectionpic" />

                <div className="homepage-section-outer-box">
                  <div className="homepage-section-inner-box">
                    <div className="texta">
                      SHOP FOR {section.name.toUpperCase()}
                    </div>
                    <p className="textb">
                      Fill your closet with our top {section.name.toLowerCase()}
                      's collection, choose from variety of products.
                    </p>
                    <Link to={section.link} className="homepage-section-button">
                      SHOP
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sections: state.data.sections
});

export default connect(mapStateToProps)(HomePage);