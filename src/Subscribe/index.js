import React from "react";
import styled from "styled-components";
import { media } from "../Media";
import border from "./border.svg";
import tw from "./tw.svg";
import fb from "./fb.svg";
import vk from "./vk.svg";
import rss from "./rss.svg";

const SubscribeWrap = styled.section`
  background: url(${border}) top center repeat-x;
  background-size: 36px 9px;
  display: none;
  margin: 0 auto;
  padding: 50px 0 40px 0;
  position: relative;
  ${media.md`
    display: block;
  `};
`;

const Subscribe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  ${media.xl`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
  `};
`;

const Title = styled.h2`
  line-height: 1.25;
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  margin: 0;
  max-width: 355px;

  ${media.xl`
    text-align: left;
  `};
`;

const Text = styled.p`
  max-width: 355px;
  line-height: 1.25;
  font-size: 1rem;
  margin: 5px 0 0 0;
  display: block;
  font-weight: normal;
  text-align: center;
  ${media.xl`
    text-align: left;
  `};
`;

const Description = styled.div``;

const Content = styled.div`
  ${media.xl`
    display: flex;
    align-items: center;
  `};
`;
const Socials = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin: 25px 0;
  ${media.xl`
    margin: 0 16px 0 0;
  `};
`;

const Li = styled.li``;

const Link = styled.a`
  font-size: 0;
  color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  background: #9b9b9b;
  margin: 0 3px;
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
`;

const Form = styled.form`
  display: flex;
  border: 1px solid #a0a0a0;
  border-radius: 2px;
`;

const Button = styled.button`
  background-color: #ff8e41;
  color: #fff;
  border: 0;
  display: block;
  text-align: center;
  padding: 0 20px;
  margin: 0;
  border-radius: 2px;
  line-height: 2.125rem;
`;

const Email = styled.input`
  color: #444;
  width: 100%;
  border: none;
  padding: 0 9px;
  border-radius: 2px;
  min-width: 191px;
  line-height: 2.125rem;

  &::placeholder {
    color: #a0b0b9;
  }
`;

export default () => {
  return (
    <SubscribeWrap>
      <div className="container">
        <div className="row center-md">
          <div className="col-sm-12 col-md-10 start-md">
            <Subscribe>
              <Description>
                <Title>Хотите знать всё о скидках на авиабилеты?</Title>
                <Text>
                  Вы можете подписаться на нашу рассылку через соцсети или по
                  электронной почте.
                </Text>
              </Description>
              <Content>
                <Socials>
                  <Li>
                    <Link href="http://aviasales.ru">
                      <Img src={tw} alt="Twitter" />
                    </Link>
                  </Li>
                  <Li>
                    <Link href="http://aviasales.ru">
                      <Img src={fb} alt="Facebook" />
                    </Link>
                  </Li>
                  <Li>
                    <Link href="http://aviasales.ru">
                      <Img src={vk} alt="Vkontakte" />
                    </Link>
                  </Li>
                  <Li>
                    <Link href="http://aviasales.ru">
                      <Img src={rss} alt="Rss" />
                    </Link>
                  </Li>
                </Socials>
                <Form action="">
                  <Email type="email" name="email" placeholder="Ваш email" />
                  <Button>Подписаться</Button>
                </Form>
              </Content>
            </Subscribe>
          </div>
        </div>
      </div>
    </SubscribeWrap>
  );
};
