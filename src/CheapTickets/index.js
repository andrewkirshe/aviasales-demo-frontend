import React from "react";
import styled from "styled-components";
import { media } from "../Media";

import koreanair from "./koreanair.png";
import koreanair_x2 from "./koreanair@2x.png";
import lye from "./lye.png";
import lye_x2 from "./lye@2x.png";
import onetwotrip from "./onetwotrip.png";
import onetwotrip_x2 from "./onetwotrip@2x.png";
import s7airlines from "./s7airlines.png";
import s7airlines_x2 from "./s7airlines@2x.png";
import aeroflot from "./aeroflot.png";
import aeroflot_x2 from "./aeroflot@2x.png";
import arrowleft from "./arrowleft.svg";
import arrowright from "./arrowright.svg";

const CheapTickets = styled.section`
  display: none;
  padding: 50px 0 40px 0;
  ${media.md`
    display: block;
  `};
`;

const Title = styled.h2`
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

const Slide = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

const Link = styled.a`
  padding: 16px;
`;

const Img = styled.img`
  width: 149px;
  display: block;
`;

const Arrows = styled.div``;

const Prev = styled.button`
  position: absolute;
  left: 0;
  top: calc(50% - 38px);
  background: none;
  border: none;
  padding: 15px 7px;
`;

const Next = styled.button`
  position: absolute;
  right: 0;
  top: calc(50% - 38px);
  background: none;
  border: none;
  padding: 15px 7px;
`;

const Icon = styled.img`
  display: block;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
`;

const Dot = styled.div`
  padding: 5px;
  margin: 0 4px;
  border-radius: 50%;
  background: ${props => (props.active ? "#818181" : "#fff")};
  border: 1px solid #818181;
`;

export default () => {
  return (
    <CheapTickets>
      <div className="container">
        <div className="row center-md">
          <div className="col-sm-12 col-md-10 start-md">
            <Title>
              Дешевые авиабилеты от крупнейших авиакомпаний и агентств
            </Title>
            <Slider>
              <Slides>
                <Slide>
                  <Link href="http://aviasales.ru">
                    <Img
                      src={aeroflot}
                      srcSet={`${aeroflot_x2} 2x`}
                      alt="Аэрофлот"
                    />
                  </Link>
                  <Link href="http://aviasales.ru">
                    <Img
                      src={s7airlines}
                      srcSet={`${s7airlines_x2} 2x`}
                      alt="s7 Airlines"
                    />
                  </Link>
                  <Link href="http://aviasales.ru">
                    <Img
                      src={onetwotrip}
                      srcSet={`${onetwotrip_x2} 2x`}
                      alt="OneTwoTrip"
                    />
                  </Link>
                  <Link href="http://aviasales.ru">
                    <Img
                      src={koreanair}
                      srcSet={`${koreanair_x2} 2x`}
                      alt="Korean Air"
                    />
                  </Link>
                  <Link href="http://aviasales.ru">
                    <Img src={lye} srcSet={`${lye_x2} 2x`} alt="LYE" />
                  </Link>
                </Slide>
              </Slides>
              <Arrows>
                <Prev>
                  <Icon src={arrowleft} alt="Предыдущий слайд" />
                </Prev>
                <Next>
                  <Icon src={arrowright} alt="Следующий слайд" />
                </Next>
              </Arrows>
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
};
