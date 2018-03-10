export const transfers = [
  {
    id: 1,
    label: 'Все',
  },
  {
    id: 2,
    label: 'Без пересадок',
    price: 7712,
  },
  {
    id: 3,
    label: '1 пересадка',
    price: 11150,
  },
  {
    id: 4,
    label: '2 пересадки',
    price: 16821,
  },
  {
    id: 5,
    label: '3 пересадки',
    price: 23986,
  },
];

export const flyDates = [
  {
    id: 1,
    ranges: [
      {
        id: 1,
        notes: 'Вылет из ',
        fromLabel: 'c',
        fromDate: 1519430700,
        toLabel: 'до',
        toDate: 1519515900,
      },
      {
        id: 2,
        notes: 'Прибытие в ',
        fromLabel: 'c',
        fromDate: 1519441500,
        toLabel: 'до',
        toDate: 1519653000,
      },
    ],
  },
  {
    id: 2,
    ranges: [
      {
        id: 1,
        notes: 'Вылет из ',
        fromLabel: 'c',
        fromDate: 1520056800,
        toLabel: 'до',
        toDate: 1520120700,
      },
      {
        id: 2,
        notes: 'Прибытие в ',
        fromLabel: 'c',
        fromDate: 1520089200,
        toLabel: 'до',
        toDate: 1520243700,
      },
    ],
  },
];

export const flyDurations = [
  {
    id: 1,
    ranges: [
      {
        id: 1,
        fromLabel: 'from-duration',
        fromTime: 15600,
        toLabel: 'to',
        toTime: 175800,
      },
    ],
  },
  {
    id: 2,
    ranges: [
      {
        id: 1,
        fromLabel: 'from-duration',
        fromTime: 15000,
        toLabel: 'to',
        toTime: 148800,
      },
    ],
  },
];

export const airlines = {
  alliances: [
    {
      id: 1,
      label: 'Все',
    },
    {
      id: 12,
      label: 'Star Alliance',
      price: 34223,
    },
    {
      id: 13,
      label: 'OneWorld',
      price: 23423,
    },
    {
      id: 14,
      label: 'SkyTeam',
      price: 24234,
    },
  ],
  companies: [
    {
      id: 1,
      label: 'Все',
    },
    {
      id: 22,
      label: 'Aegean Airlines',
      price: 12321,
    },
    {
      id: 23,
      label: 'Air Algerie',
      price: 23443,
    },
    {
      id: 24,
      label: 'Air Europa',
      price: 32423,
    },
    {
      id: 25,
      label: 'Air France',
      price: 35343,
    },
    {
      id: 26,
      label: 'Air Moldova',
      price: 42332,
    },
    {
      id: 27,
      label: 'Alitalia',
      price: 12321,
    },
    {
      id: 28,
      label: 'Alitalia CityLiner',
      price: 32432,
    },
    {
      id: 29,
      label: 'Belle Air',
      price: 32423,
    },
    {
      id: 210,
      label: 'British Airways',
      price: 12312,
    },
    {
      id: 211,
      label: 'Brussels Airlines',
      price: 23342,
    },
    {
      id: 212,
      label: 'bulgaria Air',
      price: 32442,
    },
  ],
};
