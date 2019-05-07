/*
 * ============= Question 6 =============
 *
 * The WindowSize component has a memory leak in it.
 *
 * Try resizing your browser window while the JavaScript console is open (where
 * console.logs are shown). Then click the "Toggle WindowWidth" button to mount/
 * unmount the WindowWidth component and see what happens when you resize the
 * browser window.
 *
 * Fix the memory leak in the WindowSize component.
 *
 * HINT: use window.removeEventListener to remove an event listener that is no
 * longer needed
 */

import React, { Component } from "react";

export class WindowSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  }

  handleWindowResize = () => {
    console.log("Window was resized!", window.innerWidth);
    this.setState({ windowWidth: window.innerWidth });
  };

  render() {
    const imgWidth = Math.round(this.state.windowWidth / 3);

    return (
      <div>
        <img src={`http://placekitten.com/${imgWidth}/300`} alt="Kitten" />
        <p>The window width is: {this.state.windowWidth}</p>
      </div>
    );
  }
}

export default WindowSize;
