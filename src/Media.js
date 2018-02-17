// these sizes are arbitrary and you can set them to whatever you wish
import { css } from "styled-components";

const sizes = {
  xs: 576,
  sm: 767,
  md: 991,
  lg: 1199
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/

  accumulator[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
