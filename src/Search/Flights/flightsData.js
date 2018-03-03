import airlines from "./airlines";
import best from "./best.png";
import cheapest from "./cheapest.png";
import fastest from "./fastest.png";

const flightsData = [
  {
    outbound: {
      origin: {
        city: "Moscow",
        airport: "VKO",
        dateTime: 1519430700
      },
      destination: {
        city: "Barcelona",
        airport: "BCN",
        dateTime: 1519441500
      },
      duration: 18000
    },
    return: {
      origin: {
        city: "Barcelona",
        airport: "BCN",
        dateTime: 1520073300
      },
      destination: {
        city: "Moscow",
        airport: "SVO",
        dateTime: 1520097000
      },
      duration: 16500
    },
    type: "CHARTER",
    airlines: [airlines.rossiya],
    dealers: [
      {
        name: "Clickavia",
        price: 7712,
        luggage: [
          {
            handbag: 5,
            baggage: {
              weight: 15
            }
          }
        ]
      }
    ],
    tag: {
      color: "#83D40B",
      text: "Cheapest",
      emoji: cheapest
    }
  },
  {
    outbound: {
      origin: {
        city: "Moscow",
        airport: "VKO",
        dateTime: 1519430700
      },
      destination: {
        city: "Barcelona",
        airport: "BCN",
        dateTime: 1519441500
      },
      duration: 18000
    },
    return: {
      origin: {
        city: "Barcelona",
        airport: "BCN",
        dateTime: 1520073300
      },
      destination: {
        city: "Moscow",
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
            handbag: 10
          }
        ]
      },
      {
        name: "Билетик Аэро",
        price: 8202,
        luggage: [
          {
            handbag: 10
          }
        ]
      }
    ],
    tag: {
      color: "#AF7542",
      text: "Fastest",
      emoji: fastest
    }
  },
  {
    outbound: {
      origin: {
        city: "Moscow",
        airport: "VKO",
        dateTime: 1519430700
      },
      destination: {
        city: "Barcelona",
        airport: "BCN",
        dateTime: 1519441500
      },
      duration: 18000
    },
    return: {
      origin: {
        city: "Barcelona",
        airport: "BCN",
        dateTime: 1520073300
      },
      destination: {
        city: "Moscow",
        airport: "SVO",
        dateTime: 1520097000
      },
      duration: 16500
    },
    type: "CHARTER",
    airlines: [airlines.nordwindstar],
    dealers: [
      {
        name: "Clickavia",
        price: 7712,
        luggage: [
          {
            handbag: 10
          },
          {
            handbag: 10,
            baggage: {
              weight: 20,
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
            handbag: 10
          }
        ]
      }
    ],
    tag: {
      color: "#C279D1",
      text: "Best ticket",
      emoji: best
    }
  },
  {
    outbound: {
      origin: {
        city: "Moscow",
        airport: "VKO",
        dateTime: 1519430700
      },
      destination: {
        city: "Barcelona",
        airport: "BCN",
        dateTime: 1519441500
      },
      duration: 18000
    },
    return: {
      origin: {
        city: "Barcelona",
        airport: "BCN",
        dateTime: 1520073300
      },
      destination: {
        city: "Moscow",
        airport: "SVO",
        dateTime: 1520097000
      },
      duration: 16500
    },
    type: "CHARTER",
    airlines: [airlines.redwings],
    dealers: [
      {
        name: "Clickavia",
        price: 7712,
        luggage: [
          {
            baggage: {
              weight: 20,
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
            handbag: 10
          }
        ]
      },
      {
        name: "Clickavia",
        price: 7712,
        luggage: [
          {
            baggage: {
              weight: 20,
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
            handbag: 10
          }
        ]
      },
      {
        name: "Clickavia",
        price: 7712,
        luggage: [
          {
            baggage: {
              weight: 20,
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
            handbag: 10
          }
        ]
      }
    ]
  },
  {
    outbound: {
      origin: {
        city: "Moscow",
        airport: "VKO",
        dateTime: 1519430700
      },
      destination: {
        city: "Barcelona",
        airport: "BCN",
        dateTime: 1519441500
      },
      duration: 18000
    },
    return: {
      origin: {
        city: "Barcelona",
        airport: "BCN",
        dateTime: 1520073300
      },
      destination: {
        city: "Moscow",
        airport: "SVO",
        dateTime: 1520097000
      },
      duration: 16500
    },
    type: "CHARTER",
    airlines: [airlines.rossiya, airlines.redwings],
    dealers: [
      {
        name: "Clickavia",
        price: 7712,
        luggage: [
          {
            handbag: 10
          },
          {
            handbag: 10,
            baggage: {
              weight: 20,
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
            handbag: 10
          }
        ]
      }
    ]
  },
  {
    outbound: {
      origin: {
        city: "Moscow",
        airport: "VKO",
        dateTime: 1519430700
      },
      destination: {
        city: "Barcelona",
        airport: "BCN",
        dateTime: 1519441500
      },
      duration: 18000
    },
    return: {
      origin: {
        city: "Barcelona",
        airport: "BCN",
        dateTime: 1520073300
      },
      destination: {
        city: "Moscow",
        airport: "SVO",
        dateTime: 1520097000
      },
      duration: 16500
    },
    type: "CHARTER",
    airlines: [airlines.fly],
    dealers: [
      {
        name: "Clickavia",
        price: 7712,
        luggage: [
          {
            handbag: 10
          },
          {
            handbag: 10,
            baggage: {
              weight: 20,
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
            handbag: 10
          }
        ]
      }
    ]
  },
  {
    outbound: {
      origin: {
        city: "Moscow",
        airport: "VKO",
        dateTime: 1519430700
      },
      destination: {
        city: "Barcelona",
        airport: "BCN",
        dateTime: 1519441500
      },
      duration: 18000
    },
    return: {
      origin: {
        city: "Barcelona",
        airport: "BCN",
        dateTime: 1520073300
      },
      destination: {
        city: "Moscow",
        airport: "SVO",
        dateTime: 1520097000
      },
      duration: 16500
    },
    type: "CHARTER",
    airlines: [airlines.rossiya, airlines.fly],
    dealers: [
      {
        name: "Clickavia",
        price: 7712,
        luggage: [
          {
            handbag: 10
          },
          {
            handbag: 10,
            baggage: {
              weight: 20,
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
            handbag: 10
          }
        ]
      }
    ]
  }
];

export default flightsData;
