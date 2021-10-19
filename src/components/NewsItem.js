import React, { Component } from "react";

export default class NewsItem extends Component {
    render() {
      const {title, description, url, urlToImage} = this.props.data
      const defaultImage = `https://blogger.googleusercontent.com/img/a/AVvXsEh20SgNNsDlKyWWmB7XgB5SfFY10M6CqJAq93HwGtssTn2cWz6w9zHPjXf91WwoWr27QeaC4HsGv2NxPOXUdvk6xodUojnw8rUuAkEMY3Qb4ucoVpN3nSyF8JW_xVDWa2aSMEWH387hPsfouSJyClLNburIcDbXIeJamuTHwiSvw4hdNnqeeICcvg1wrQ=w1200-h630-p-k-no-nu`
    return (
      <div>
        <div className="card">
          <img src={urlToImage?urlToImage:defaultImage}  className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title?title:'No title available'}</h5>
            <p className="card-text">
              {description?description.slice(0, 50):"no description available"}...
            </p>
            <a href={url} target="_blank" rel="noreferrer"className="btn btn-primary">
              read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
  