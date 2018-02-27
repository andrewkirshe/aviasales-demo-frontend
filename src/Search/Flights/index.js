import React from "react";
import styled from "styled-components";
import { media } from "../../Media";
import ToTop from "./ToTop";
import Flight from "./Flight";
import Filtrate from "./Filtrate";

import redwings_l from "./redwings_l.png";
import redwings_l_2x from "./redwings_l@2x.png";
import redwings_s from "./redwings_s.png";
import redwings_s_2x from "./redwings_s@2x.png";

import rossiya_l from "./rossiya_l.png";
import rossiya_l_2x from "./rossiya_l@2x.png";
import rossiya_s from "./rossiya_s.png";
import rossiya_s_2x from "./rossiya_s@2x.png";

import fly_l from "./fly_l.png";
import fly_l_2x from "./fly_l@2x.png";
import fly_s from "./fly_s.png";
import fly_s_2x from "./fly_s@2x.png";

import nordwind_l from "./nordwind_l.png";
import nordwind_l_2x from "./nordwind_l@2x.png";
import nordwind_s from "./nordwind_s.png";
import nordwind_s_2x from "./nordwind_s@2x.png";

import nordwindstar_l from "./nordwindstar_l.png";
import nordwindstar_l_2x from "./nordwindstar_l@2x.png";
import nordwindstar_s from "./nordwindstar_s.png";
import nordwindstar_s_2x from "./nordwindstar_s@2x.png";

import best from "./best.png";
import cheapest from "./cheapest.png";
import fastest from "./fastest.png";

const airlines = {
  rossiya: {
    name: "Rossiya Airlines",
    logo: {
      s: {
        x1: rossiya_s,
        x2: rossiya_s_2x
      },
      l: {
        x1: rossiya_l,
        x2: rossiya_l_2x
      }
    }
  },
  redwings: {
    name: "Red Wings Airlines",
    logo: {
      s: {
        x1: redwings_s,
        x2: redwings_s_2x
      },
      l: {
        x1: redwings_l,
        x2: redwings_l_2x
      }
    }
  },
  fly: {
    name: "Fly Airlines",
    logo: {
      s: {
        x1: fly_s,
        x2: fly_s_2x
      },
      l: {
        x1: fly_l,
        x2: fly_l_2x
      }
    }
  },
  nordwind: {
    name: "Nordwind Airlines",
    logo: {
      s: {
        x1: nordwind_s,
        x2: nordwind_s_2x
      },
      l: {
        x1: nordwind_l,
        x2: nordwind_l_2x
      }
    }
  },
  nordwindstar: {
    name: "Nordwind Airlines",
    logo: {
      s: {
        x1: nordwindstar_s,
        x2: nordwindstar_s_2x
      },
      l: {
        x1: nordwindstar_l,
        x2: nordwindstar_l_2x
      }
    }
  }
};

const flightsData = [
  {
    outbound: {
      origin: {
        city: "Москва",
        airport: "VKO",
        dateTime: 1519430700
      },
      destination: {
        city: "Барселона",
        airport: "BCN",
        dateTime: 1519441500
      },
      duration: 18000
    },
    return: {
      origin: {
        city: "Барселона",
        airport: "BCN",
        dateTime: 1520073300
      },
      destination: {
        city: "Москва",
        airport: "SVO",
        dateTime: 1520097000
      },
      duration: 16500
    },
    type: "ЧАРТЕР",
    airlines: [airlines.rossiya],
    dealers: [
      {
        name: "Clickavia",
        price: 7712,
        luggage: [
          {
            handbag: "5",
            baggage: {
              weight: "15"
            }
          }
        ]
      }
    ],
    tag: {
      color: "#83D40B",
      text: "Самый дешевый",
      emoji: cheapest
    }
  },
  {
    outbound: {
      origin: {
        city: "Москва",
        airport: "VKO",
        dateTime: 1519430700
      },
      destination: {
        city: "Барселона",
        airport: "BCN",
        dateTime: 1519441500
      },
      duration: 18000
    },
    return: {
      origin: {
        city: "Барселона",
        airport: "BCN",
        dateTime: 1520073300
      },
      destination: {
        city: "Москва",
        airport: "SVO",
        dateTime: 1520097000
      },
      duration: 16500
    },
    airlines: [airlines.nordwind],
    dealers: [
      {
        name: "Clickavia",
        price: 7712,
        luggage: [
          {
            handbag: "10"
          }
        ]
      },
      {
        name: "Билетик Аэро",
        price: 8202,
        luggage: [
          {
            handbag: "10"
          }
        ]
      }
    ],
    tag: {
      color: "#AF7542",
      text: "Самый быстрый",
      emoji: fastest
    }
  },
  {
    outbound: {
      origin: {
        city: "Москва",
        airport: "VKO",
        dateTime: 1519430700
      },
      destination: {
        city: "Барселона",
        airport: "BCN",
        dateTime: 1519441500
      },
      duration: 18000
    },
    return: {
      origin: {
        city: "Барселона",
        airport: "BCN",
        dateTime: 1520073300
      },
      destination: {
        city: "Москва",
        airport: "SVO",
        dateTime: 1520097000
      },
      duration: 16500
    },
    type: "ЧАРТЕР",
    airlines: [airlines.nordwindstar],
    dealers: [
      {
        name: "Clickavia",
        price: 7712,
        luggage: [
          {
            handbag: "10"
          },
          {
            handbag: "10",
            baggage: {
              weight: "20",
              price: 267
            }
          }
        ]
      },
      {
        name: "Билетик Аэро",
        price: 8202,
        luggage: [
          {
            handbag: "10"
          }
        ]
      }
    ],
    tag: {
      color: "#C279D1",
      text: "Лучший билет",
      emoji: best
    }
  },
  {
    outbound: {
      origin: {
        city: "Москва",
        airport: "VKO",
        dateTime: 1519430700
      },
      destination: {
        city: "Барселона",
        airport: "BCN",
        dateTime: 1519441500
      },
      duration: 18000
    },
    return: {
      origin: {
        city: "Барселона",
        airport: "BCN",
        dateTime: 1520073300
      },
      destination: {
        city: "Москва",
        airport: "SVO",
        dateTime: 1520097000
      },
      duration: 16500
    },
    type: "ЧАРТЕР",
    airlines: [airlines.redwings],
    dealers: [
      {
        name: "Clickavia",
        price: 7712,
        luggage: [
          {
            baggage: {
              weight: "20",
              price: 267
            }
          }
        ]
      },
      {
        name: "Билетик Аэро",
        price: 8202,
        luggage: [
          {
            handbag: "10"
          }
        ]
      },
      {
        name: "Clickavia",
        price: 7712,
        luggage: [
          {
            baggage: {
              weight: "20",
              price: 267
            }
          }
        ]
      },
      {
        name: "Билетик Аэро",
        price: 8202,
        luggage: [
          {
            handbag: "10"
          }
        ]
      },
      {
        name: "Clickavia",
        price: 7712,
        luggage: [
          {
            baggage: {
              weight: "20",
              price: 267
            }
          }
        ]
      },
      {
        name: "Билетик Аэро",
        price: 8202,
        luggage: [
          {
            handbag: "10"
          }
        ]
      }
    ]
  },
  {
    outbound: {
      origin: {
        city: "Москва",
        airport: "VKO",
        dateTime: 1519430700
      },
      destination: {
        city: "Барселона",
        airport: "BCN",
        dateTime: 1519441500
      },
      duration: 18000
    },
    return: {
      origin: {
        city: "Барселона",
        airport: "BCN",
        dateTime: 1520073300
      },
      destination: {
        city: "Москва",
        airport: "SVO",
        dateTime: 1520097000
      },
      duration: 16500
    },
    type: "ЧАРТЕР",
    airlines: [airlines.rossiya, airlines.redwings],
    dealers: [
      {
        name: "Clickavia",
        price: 7712,
        luggage: [
          {
            handbag: "10"
          },
          {
            handbag: "10",
            baggage: {
              weight: "20",
              price: 267
            }
          }
        ]
      },
      {
        name: "Билетик Аэро",
        price: 8202,
        luggage: [
          {
            handbag: "10"
          }
        ]
      }
    ]
  },
  {
    outbound: {
      origin: {
        city: "Москва",
        airport: "VKO",
        dateTime: 1519430700
      },
      destination: {
        city: "Барселона",
        airport: "BCN",
        dateTime: 1519441500
      },
      duration: 18000
    },
    return: {
      origin: {
        city: "Барселона",
        airport: "BCN",
        dateTime: 1520073300
      },
      destination: {
        city: "Москва",
        airport: "SVO",
        dateTime: 1520097000
      },
      duration: 16500
    },
    type: "ЧАРТЕР",
    airlines: [airlines.fly],
    dealers: [
      {
        name: "Clickavia",
        price: 7712,
        luggage: [
          {
            handbag: "10"
          },
          {
            handbag: "10",
            baggage: {
              weight: "20",
              price: 267
            }
          }
        ]
      },
      {
        name: "Билетик Аэро",
        price: 8202,
        luggage: [
          {
            handbag: "10"
          }
        ]
      }
    ]
  },
  {
    outbound: {
      origin: {
        city: "Москва",
        airport: "VKO",
        dateTime: 1519430700
      },
      destination: {
        city: "Барселона",
        airport: "BCN",
        dateTime: 1519441500
      },
      duration: 18000
    },
    return: {
      origin: {
        city: "Барселона",
        airport: "BCN",
        dateTime: 1520073300
      },
      destination: {
        city: "Москва",
        airport: "SVO",
        dateTime: 1520097000
      },
      duration: 16500
    },
    type: "ЧАРТЕР",
    airlines: [airlines.rossiya, airlines.fly],
    dealers: [
      {
        name: "Clickavia",
        price: 7712,
        luggage: [
          {
            handbag: "10"
          },
          {
            handbag: "10",
            baggage: {
              weight: "20",
              price: 267
            }
          }
        ]
      },
      {
        name: "Билетик Аэро",
        price: 8202,
        luggage: [
          {
            handbag: "10"
          }
        ]
      }
    ]
  }
];

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const Flights = styled.div`
  order: 1;

  ${media.md`
    order: 2;
  `};
`;

const MoreFlights = styled.button`
  display: none;

  ${media.md`
    display: block;
    order: 3;
    background: #00ACDE;
    border-radius: 4px;
    border: none;
    font-size: 0.875rem;
    color: #fff;
    font-weight: 600;
    padding: 20px;
    margin-bottom: 40px;
  `};
`;

const flights = flightsData.map((flight, index) => {
  return (
    <Flight
      key={index}
      outbound={flight.outbound}
      return={flight.return}
      type={flight.type}
      airlines={flight.airlines}
      dealers={flight.dealers}
      tag={flight.tag}
    />
  );
});

export default () => {
  return (
    <Main>
      <ToTop />
      <Flights>{flights}</Flights>
      <Filtrate />
      <MoreFlights>ПОКАЗАТЬ ЕЩЕ 10 БИЛЕТОВ!</MoreFlights>
    </Main>
  );
};