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
    checked: true,
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
    flight: {
      from: 'Moscow',
      to: 'Barcelona',
    },
    ranges: [
      {
        id: 1,
        notes: 'Вылет из Москвы:',
        fromLabel: 'c',
        fromDate: 1519430700,
        toLabel: 'до',
        toDate: 1519515900,
      },
      {
        id: 2,
        notes: 'Прибытие в Барселону:',
        fromLabel: 'c',
        fromDate: 1519441500,
        toLabel: 'до',
        toDate: 1519653000,
      },
    ],
  },
  {
    id: 2,
    flight: {
      from: 'Barcelona',
      to: 'Moscow',
    },
    ranges: [
      {
        id: 1,
        notes: 'Вылет из Барселоны:',
        fromLabel: 'c',
        fromDate: 1520056800,
        toLabel: 'до',
        toDate: 1520120700,
      },
      {
        id: 2,
        notes: 'Прибытие в Москву:',
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
    flight: {
      from: 'Moscow',
      to: 'Barcelona',
    },
    ranges: [
      {
        id: 1,
        fromLabel: 'from',
        fromTime: 15600,
        toLabel: 'to',
        toTime: 175800,
      },
    ],
  },
  {
    id: 2,
    flight: {
      from: 'Barcelona',
      to: 'Moscow',
    },
    ranges: [
      {
        id: 1,
        fromLabel: 'from',
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
      checked: true,
    },
    {
      id: 2,
      label: 'Star Alliance',
      checked: true,
    },
    {
      id: 3,
      label: 'OneWorld',
      checked: true,
    },
    {
      id: 4,
      label: 'SkyTeam',
      checked: true,
    },
  ],
  companies: [
    {
      id: 1,
      label: 'Все',
      checked: true,
    },
    {
      id: 2,
      label: 'Aegean Airlines',
      checked: true,
    },
    {
      id: 3,
      label: 'Air Algerie',
      checked: true,
    },
    {
      id: 4,
      label: 'Air Europa',
      checked: true,
    },
    {
      id: 5,
      label: 'Air France',
      checked: true,
    },
    {
      id: 6,
      label: 'Air Moldova',
      checked: true,
    },
    {
      id: 7,
      label: 'Alitalia',
      checked: true,
    },
    {
      id: 8,
      label: 'Alitalia CityLiner',
      checked: true,
    },
    {
      id: 9,
      label: 'Belle Air',
      checked: true,
    },
    {
      id: 10,
      label: 'British Airways',
      checked: true,
    },
    {
      id: 11,
      label: 'Brussels Airlines',
      checked: true,
    },
    {
      id: 12,
      label: 'Bulgaria Air',
      checked: true,
    },
  ],
};
