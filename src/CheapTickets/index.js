import React from "react";
import styled from "styled-components";
import { media } from "../Media";

import ke from "./KE.png";
import lye from "./LYE.png";
import ott from "./ott.png";
import s7 from "./S7.png";
import su from "./SU.png";
import arrowleft from "./arrowleft.svg";
import arrowright from "./arrowright.svg";

const CheapTickets = styled.div`
  display: none;
  padding: 50px 0 40px 0;
  ${media.sm`
    display: block;
  `};
`;
const Title = styled.div`
  font-size: 2rem;
  line-height: 1.25;
  font-weight: 500;
  text-align: center;
`;
const Slider = styled.div`
  padding: 0 20px;
  position: relative;
`;
const Slides = styled.div``;
const Slide = styled.div``;
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

const Li = styled.li`
  padding: 16px;
`;

const Img = styled.img`
  width: 149px;
  display: block;
`;

const Nav = styled.div``;
const Left = styled.button`
  position: absolute;
  width: 30px;
  height: 50px;
  left: 0;
  top: 50%;
  margin-top: -38px;
  background: url(${arrowleft}) center no-repeat;
  border: none;
`;
const Right = styled.button`
  position: absolute;
  width: 30px;
  height: 50px;
  right: 0;
  top: 50%;
  margin-top: -38px;
  background: url(${arrowright}) center no-repeat;
  border: none;
`;
const Dots = styled.div`
  display: flex;
  justify-content: center;
`;
const Dot = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 4px;
  border-radius: 50%;
  background: ${props => (props.active ? "#818181" : "#fff")};
  border: 1px solid #818181;
`;

export default function() {
  return (
    <CheapTickets>
      <div className="container-wrap">
        <div className="row center-md">
          <div className="col-sm-12 col-md-10 start-md">
            <Title>
              Дешевые авиабилеты от крупнейших авиакомпаний и агентств
            </Title>
            <Slider>
              <Slides>
                <Slide>
                  <List>
                    <Li>
                      <a href="http://aviasales.ru">
                        <Img src={su} alt="" />
                      </a>
                    </Li>
                    <Li>
                      <a href="http://aviasales.ru">
                        <Img src={s7} alt="" />
                      </a>
                    </Li>
                    <Li>
                      <a href="http://aviasales.ru">
                        <Img src={ott} alt="" />
                      </a>
                    </Li>
                    <Li>
                      <a href="http://aviasales.ru">
                        <Img src={ke} alt="" />
                      </a>
                    </Li>
                    <Li>
                      <a href="http://aviasales.ru">
                        <Img src={lye} alt="" />
                      </a>
                    </Li>
                  </List>
                </Slide>
              </Slides>
              <Nav>
                <Left />
                <Right />
              </Nav>
              <Dots>
                <Dot active />
                <Dot />
                <Dot />
              </Dots>
            </Slider>
          </div>
        </div>
      </div>
    </CheapTickets>
  );
}
