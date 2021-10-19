import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "./NewsBar.css";
import "./NavBar";


export default class NewsBar extends Component {
  constructor() {
    super();
    this.state = {
      hello: true,
      data: [],
      page: 1,
      totalResults: 15,
      loader: true,
      count: 1,
    };
  }
  async componentDidMount() {
    const link = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&pagesize=${this.props.pagesize}&country=${this.props.country}&page=${this.state.page}&apiKey=${process.env.REACT_APP_API_KEY}`;
    const data = await fetch(link);
    this.setState({ loader: true });
    const final_data = await data.json();
    console.log(final_data);
    this.setState({
      data: final_data.articles,
      totalResults: final_data.totalResults,
      loader: false,
    });
  }

  prevClicker = async () => {
    const link = `https://newsapi.org/v2/top-headlines?category=${
      this.props.category
    }&pagesize=${this.props.pagesize}&country=${this.props.country}&page=${
      this.state.page - 1
    }&apiKey=${process.env.REACT_APP_API_KEY}`;
    this.setState({ loader: true });
    const data = await fetch(link);
    const final_data = await data.json();
    console.log(final_data);
    this.setState({
      data: final_data.articles,
      page: this.state.page - 1,
      loader: false,
      count: this.state.count - 1,
    });
  };

  nextClicker = async () => {
    const link = `https://newsapi.org/v2/top-headlines?category=${
      this.props.category
    }&pagesize=${this.props.pagesize}&country=${this.props.country}&page=${
      this.state.page + 1
    }&apiKey=${process.env.REACT_APP_API_KEY}`;
    this.setState({ loader: true, count: this.state.count + 1 });
    const data = await fetch(link);
    const final_data = await data.json();
    console.log(final_data);
    this.setState({
      data: final_data.articles,
      page: this.state.page + 1,
      loader: false,
    });
  };
  render() {
    // console.log(process.env.API_KEY)
    // console.log(this.state.totalResults);
    // console.log(this.state.count);
    // console.log(Math.ceil(this.state.totalResults / this.props.pagesize));
    return (
      <>
        {this.state.hello && (
          <div>
            {this.state.loader ? (
              <div className="container d-flex justify-content-center">
                <div className="lds-roller">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            ) : (
              <div className="container">
                <div className="d-flex justify-content-center">
                  <h3>{this.props.category}-news</h3>
                </div>
                {/* <NewsItem/> */}
                <div className="row">
                  {this.state.data.map((data) => {
                    return (
                      <div className="col-md-4">
                        <NewsItem data={data} />
                      </div>
                    );
                  })}
                </div>
                <div className="d-flex justify-content-between">
                  <button
                    type="button"
                    disabled={this.state.page <= 1}
                    className="btn btn-primary"
                    onClick={this.prevClicker}
                  >
                    &larr; Previous
                  </button>
                  <button
                    type="button"
                    disabled={
                      this.state.totalResults &&
                      Math.ceil(
                        this.state.totalResults / this.props.pagesize
                      ) === this.state.count
                    }
                    className="btn btn-primary"
                    onClick={this.nextClicker}
                  >
                    Next &rarr;
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </>
    );
  }
}
