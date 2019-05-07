/*
 * ============= Question 7 =============
 *
 * Complete the ImageGallery component so that it fetches an image URL from:
 * https://auspicious-baritone.glitch.me/gorilla.
 *
 * The request will take at least 2 seconds to return so make sure you show
 * something helpful to the user.
 */

import React, { Component } from "react";

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: null,
      isLoading: true
    };
  }

  componentDidMount() {
    fetch("https://auspicious-baritone.glitch.me/gorilla")
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res;
        } else {
          throw new Error("HTTP error");
        }
      })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        this.setState({
          isLoading: false,
          imgSrc: data
        });
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          error: err
        });
      });
    console.log(this.state.err);
  }

  render() {
    if (this.state.isLoading) {
      return <span>Loading... 👽</span>;
    } else if (this.state.error) {
      return <span>Something went wrong 😭</span>;
    } else {
      return <img src={this.state.imgSrc} alt="An animal" />;
    }
  }
}

export default ImageGallery;
