import airlines from './airlines';
import best from './best.png';
import cheapest from './cheapest.png';
import fastest from './fastest.png';

const flightsData = [
  {
    id: 1,
    outbound: {
      origin: {
        city: 'Moscow',
        airport: 'VKO',
        dateTime: 1519430700,
      },
      destination: {
        city: 'Barcelona',
        airport: 'BCN',
        dateTime: 1519441500,
      },
      duration: 18000,
    },
    return: {
      origin: {
        city: 'Barcelona',
        airport: 'BCN',
        dateTime: 1520073300,
      },
      destination: {
        city: 'Moscow',
        airport: 'SVO',
        dateTime: 1520097000,
      },
      duration: 16500,
    },
    type: 'CHARTER',
    airlines: [airlines.rossiya],
    dealers: [
      {
        id: 1,
        name: 'Clickavia',
        price: 7712,
        luggage: [
          {
            id: 1,
            handbag: 5,
            baggage: {
              weight: 15,
            },
          },
        ],
      },
    ],
    tag: {
      color: '#83D40B',
      text: 'Cheapest',
      emoji: cheapest,
    },
  },
  {
    id: 2,
    outbound: {
      origin: {
        city: 'Moscow',
        airport: 'VKO',
        dateTime: 1519430700,
      },
      destination: {
        city: 'Barcelona',
        airport: 'BCN',
        dateTime: 1519441500,
      },
      duration: 18000,
    },
    return: {
      origin: {
        city: 'Barcelona',
        airport: 'BCN',
        dateTime: 1520073300,
      },
      destination: {
        city: 'Moscow',
        airport: 'SVO',
        dateTime: 1520097000,
      },
      duration: 16500,
    },
    airlines: [airlines.nordwind],
    dealers: [
      {
        id: 1,
        name: 'Clickavia',
        price: 7712,
        luggage: [
          {
            id: 1,
            handbag: 10,
            baggage: {
              weight: 0,
            },
          },
        ],
      },
      {
        id: 2,
        name: 'Билетик Аэро',
        price: 8202,
        luggage: [
          {
            id: 1,
            handbag: 10,
            baggage: {
              weight: 0,
            },
          },
        ],
      },
    ],
    tag: {
      color: '#AF7542',
      text: 'Fastest',
      emoji: fastest,
    },
  },
  {
    id: 3,
    outbound: {
      origin: {
        city: 'Moscow',
        airport: 'VKO',
        dateTime: 1519430700,
      },
      destination: {
        city: 'Barcelona',
        airport: 'BCN',
        dateTime: 1519441500,
      },
      duration: 18000,
    },
    return: {
      origin: {
        city: 'Barcelona',
        airport: 'BCN',
        dateTime: 1520073300,
      },
      destination: {
        city: 'Moscow',
        airport: 'SVO',
        dateTime: 1520097000,
      },
      duration: 16500,
    },
    type: 'CHARTER',
    airlines: [airlines.nordwindstar],
    dealers: [
      {
        id: 1,
        name: 'Clickavia',
        price: 7712,
        luggage: [
          {
            id: 1,
            handbag: 10,
            baggage: {
              weight: 0,
            },
          },
          {
            id: 2,
            handbag: 10,
            baggage: {
              weight: 20,
              price: 267,
            },
          },
        ],
      },
      {
        id: 2,
        name: 'Билетик Аэро',
        price: 8202,
        luggage: [
          {
            id: 1,
            handbag: 10,
            baggage: {
              weight: 0,
            },
          },
        ],
      },
    ],
    tag: {
      color: '#C279D1',
      text: 'Best ticket',
      emoji: best,
    },
  },
  {
    id: 4,
    outbound: {
      origin: {
        city: 'Moscow',
        airport: 'VKO',
        dateTime: 1519430700,
      },
      destination: {
        city: 'Barcelona',
        airport: 'BCN',
        dateTime: 1519441500,
      },
      duration: 18000,
    },
    return: {
      origin: {
        city: 'Barcelona',
        airport: 'BCN',
        dateTime: 1520073300,
      },
      destination: {
        city: 'Moscow',
        airport: 'SVO',
        dateTime: 1520097000,
      },
      duration: 16500,
    },
    type: 'CHARTER',
    airlines: [airlines.redwings],
    dealers: [
      {
        id: 1,
        name: 'Clickavia',
        price: 7712,
        luggage: [
          {
            id: 1,
            baggage: {
              weight: 20,
              price: 267,
            },
          },
        ],
      },
      {
        id: 2,
        name: 'Билетик Аэро',
        price: 8202,
        luggage: [
          {
            id: 1,
            handbag: 10,
            baggage: {
              weight: 0,
            },
          },
        ],
      },
      {
        id: 3,
        name: 'Clickavia',
        price: 7712,
        luggage: [
          {
            id: 1,
            baggage: {
              weight: 20,
              price: 267,
            },
          },
        ],
      },
      {
        id: 4,
        name: 'Билетик Аэро',
        price: 8202,
        luggage: [
          {
            id: 1,
            handbag: 10,
            baggage: {
              weight: 0,
            },
          },
        ],
      },
      {
        id: 5,
        name: 'Clickavia',
        price: 7712,
        luggage: [
          {
            id: 1,
            baggage: {
              weight: 20,
              price: 267,
            },
          },
        ],
      },
      {
        id: 6,
        name: 'Билетик Аэро',
        price: 8202,
        luggage: [
          {
            id: 1,
            handbag: 10,
            baggage: {
              weight: 0,
            },
          },
        ],
      },
    ],
  },
  {
    id: 5,
    outbound: {
      origin: {
        city: 'Moscow',
        airport: 'VKO',
        dateTime: 1519430700,
      },
      destination: {
        city: 'Barcelona',
        airport: 'BCN',
        dateTime: 1519441500,
      },
      duration: 18000,
    },
    return: {
      origin: {
        city: 'Barcelona',
        airport: 'BCN',
        dateTime: 1520073300,
      },
      destination: {
        city: 'Moscow',
        airport: 'SVO',
        dateTime: 1520097000,
      },
      duration: 16500,
    },
    type: 'CHARTER',
    airlines: [airlines.rossiya, airlines.redwings],
    dealers: [
      {
        id: 1,
        name: 'Clickavia',
        price: 7712,
        luggage: [
          {
            id: 1,
            handbag: 10,
            baggage: {
              weight: 0,
            },
          },
          {
            id: 2,
            handbag: 10,
            baggage: {
              weight: 20,
              price: 267,
            },
          },
        ],
      },
      {
        id: 2,
        name: 'Билетик Аэро',
        price: 8202,
        luggage: [
          {
            id: 1,
            handbag: 10,
            baggage: {
              weight: 0,
            },
          },
        ],
      },
    ],
  },
  {
    id: 6,
    outbound: {
      origin: {
        city: 'Moscow',
        airport: 'VKO',
        dateTime: 1519430700,
      },
      destination: {
        city: 'Barcelona',
        airport: 'BCN',
        dateTime: 1519441500,
      },
      duration: 18000,
    },
    return: {
      origin: {
        city: 'Barcelona',
        airport: 'BCN',
        dateTime: 1520073300,
      },
      destination: {
        city: 'Moscow',
        airport: 'SVO',
        dateTime: 1520097000,
      },
      duration: 16500,
    },
    type: 'CHARTER',
    airlines: [airlines.fly],
    dealers: [
      {
        id: 1,
        name: 'Clickavia',
        price: 7712,
        luggage: [
          {
            id: 1,
            handbag: 10,
            baggage: {
              weight: 0,
            },
          },
          {
            id: 2,
            handbag: 10,
            baggage: {
              weight: 20,
              price: 267,
            },
          },
        ],
      },
      {
        id: 2,
        name: 'Билетик Аэро',
        price: 8202,
        luggage: [
          {
            id: 1,
            handbag: 10,
            baggage: {
              weight: 0,
            },
          },
        ],
      },
    ],
  },
  {
    id: 7,
    outbound: {
      origin: {
        city: 'Moscow',
        airport: 'VKO',
        dateTime: 1519430700,
      },
      destination: {
        city: 'Barcelona',
        airport: 'BCN',
        dateTime: 1519441500,
      },
      duration: 18000,
    },
    return: {
      origin: {
        city: 'Barcelona',
        airport: 'BCN',
        dateTime: 1520073300,
      },
      destination: {
        city: 'Moscow',
        airport: 'SVO',
        dateTime: 1520097000,
      },
      duration: 16500,
    },
    type: 'CHARTER',
    airlines: [airlines.rossiya, airlines.fly],
    dealers: [
      {
        id: 1,
        name: 'Clickavia',
        price: 7712,
        luggage: [
          {
            id: 1,
            handbag: 10,
            baggage: {
              weight: 0,
            },
          },
          {
            id: 2,
            handbag: 10,
            baggage: {
              weight: 20,
              price: 267,
            },
          },
        ],
      },
      {
        id: 2,
        name: 'Билетик Аэро',
        price: 8202,
        luggage: [
          {
            id: 1,
            handbag: 10,
            baggage: {
              weight: 0,
            },
          },
        ],
      },
    ],
  },
];

export default flightsData;
