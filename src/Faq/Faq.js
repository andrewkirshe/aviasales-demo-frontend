import React, { Component } from "react";
import styled from "styled-components";

class Faq extends Component {
  render() {
    const Container = styled.div`
      margin-bottom: 18px;
    `;
    const Title = styled.div`
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      color: #4a4a4a;

      img {
        display: block;
        margin-right: 10px;
      }

      span {
        font-weight: bold;
        text-transform: uppercase;
        font-size: 0.7rem;
        line-height: 1rem;
        display: block;
        margin-top: 2px;
      }
    `;
    const Text = styled.div`
      font-size: 0.875rem;
      line-height: 1.6;
      color: #4a4a4a;
    `;
    const Link = styled.a`
      color: #00ace2;
      margin-left: 7px;
      text-decoration: none;
    `;

    const item = this.props.data;
    return (
      <Container>
        <Title>
          <img src={item.icon} alt={item.icon} />
          <span>{item.title}</span>
        </Title>
        <Text>
          {item.text}
          <Link href={item.link}>Подробнее</Link>
        </Text>
      </Container>
    );
  }
}

export default Faq;
