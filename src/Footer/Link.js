import React, { Component } from "react";
// import styled from "styled-components";

class Link extends Component {
  render() {
    const item = this.props.data;
    return (() => {
      if (item.class) {
        return (
          <li className={item.class}>
            <a href={item.url}>{item.text}</a>
          </li>
        );
      } else {
        return (
          <li>
            <a href={item.url}>{item.text}</a>
          </li>
        );
      }
    })();
  }
}

export default Link;
