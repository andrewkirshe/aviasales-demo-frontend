import React from "react";
import styled from "styled-components";
import { media } from "../../../Media";
import Buy from "./Buy";
import Info from "./Info";

const Wrapper = styled.div``;

const Card = styled.div`
  background: #fff;
  border-radius: 0;
  margin-bottom: 8px;
  display: flex;
  position: relative;

  &:before {
    content: "";
    top: 0;
    bottom: 0;
    width: 8px;
    right: 100%;
    position: absolute;
    background: #fff;

    ${media.sm`
      display: none;
    `};
  }

  &:after {
    content: "";
    top: 0;
    bottom: 0;
    width: 8px;
    left: 100%;
    position: absolute;
    background: #fff;

    ${media.sm`
      display: none;
    `};
  }

  ${media.md`
    margin-bottom: 20px;
    border-radius: 4px;
  `};
`;

const Tag = styled.p`
  background: ${props => (props.background ? props.background : "none")};
  display: flex;
  align-items: center;
  padding: 8px 0;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 700;
  margin: 0;
  position: relative;

  ${media.sm`
    padding: 8px 6px;
  `};

  &:before {
    content: "";
    top: 0;
    bottom: 0;
    width: 8px;
    right: 100%;
    position: absolute;
    background: ${props => (props.background ? props.background : "none")};

    ${media.sm`
      display: none;
    `};
  }

  &:after {
    content: "";
    top: 0;
    bottom: 0;
    width: 8px;
    left: 100%;
    position: absolute;
    background: ${props => (props.background ? props.background : "none")};

    ${media.sm`
      display: none;
    `};
  }

  ${media.md`
    display: none;
  `};
`;

const Emoji = styled.img`
  width: 14px;
  height: 14px;
  display: block;
  margin-left: 5px;
`;

const Details = styled.button`
  background: #edf5f7;
  display: none;
  align-items: center;
  border: none;
  padding: 5px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;

  ${media.md`
    display: flex;
  `};

  &:after {
    content: "";
    display: block;
    line-height: 0;
    height: 0;
    border: 5px transparent solid;
    border-top-color: #a0b0b9;
  }
`;

export default props => {
  return (
    <Wrapper>
      {props.tag && (
        <Tag background={props.tag.color}>
          {props.tag.text}
          <Emoji
            src={props.tag.emoji}
            srcSet={`${props.tag.emoji} 2x`}
            alt={props.tag.text}
          />
        </Tag>
      )}

      <Card>
        <Buy dealers={props.dealers} />
        <Info
          outbound={props.outbound}
          return={props.return}
          type={props.type}
          airlines={props.airlines}
        />
        <Details />
      </Card>
    </Wrapper>
  );
};
