import React, { Component } from "react";
import ReactModal from "react-modal";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var portfolio = this.props.data.projects.map(function(project, i) {
        var imageUrl = "images/portfolio/" + project.image;
        return (
          <div key={i} className="columns portfolio-item">
            <a href={project.url}>
              <div className="item-wrap">
                <img
                  alt=""
                  src={imageUrl}
                  className="thumbLink"
                  data-size="1050x700"
                />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{project.title}</h5>
                    
                  </div>
                </div>
              </div>
            </a>
          </div>
        );
      });
    }
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out My Portfilio.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {portfolio}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
