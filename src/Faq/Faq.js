import React from "react";
import styled from "styled-components";

const Article = styled.article`
  margin-bottom: 18px;
`;

const Title = styled.h4`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #4a4a4a;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.7rem;
  line-height: 1rem;
`;

const Icon = styled.img`
  margin: 0 10px 2px 0;
  width: 16px;
  height: 16px;
`;

const Text = styled.p`
  font-size: 0.875rem;
  line-height: 1.6;
  color: #4a4a4a;
  margin: 0;
`;

const Link = styled.a`
  color: #00ace2;
  margin-left: 7px;
  text-decoration: none;
`;

export default props => {
  return (
    <Article>
      <Title>
        <Icon src={props.data.icon} alt={props.data.icon} />
        {props.data.title}
      </Title>
      <Text>
        {props.data.text}
        <Link href={props.data.link}>Подробнее</Link>
      </Text>
    </Article>
  );
};
