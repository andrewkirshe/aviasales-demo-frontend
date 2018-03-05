export const transfers = [
  {
    label: "Все"
  },
  {
    label: "Без пересадок",
    price: 7712
  },
  {
    label: "1 пересадка",
    price: 11150,
    checked: true
  },
  {
    label: "2 пересадки",
    price: 16821
  },
  {
    label: "3 пересадки",
    price: 23986
  }
];

export const flyDates = [
  {
    flight: {
      from: "Moscow",
      to: "Barcelona"
    },
    ranges: [
      {
        notes: "Вылет из Москвы:",
        fromLabel: "c",
        fromDate: 1519430700,
        toLabel: "до",
        toDate: 1519515900
      },
      {
        notes: "Прибытие в Барселону:",
        fromLabel: "c",
        fromDate: 1519441500,
        toLabel: "до",
        toDate: 1519653000
      }
    ]
  },
  {
    flight: {
      from: "Barcelona",
      to: "Moscow"
    },
    ranges: [
      {
        notes: "Вылет из Барселоны:",
        fromLabel: "c",
        fromDate: 1520056800,
        toLabel: "до",
        toDate: 1520120700
      },
      {
        notes: "Прибытие в Москву:",
        fromLabel: "c",
        fromDate: 1520089200,
        toLabel: "до",
        toDate: 1520243700
      }
    ]
  }
];

export const flyDurations = [
  {
    flight: {
      from: "Moscow",
      to: "Barcelona"
    },
    ranges: [
      {
        fromLabel: "from",
        fromTime: 15600,
        toLabel: "to",
        toTime: 175800
      }
    ]
  },
  {
    flight: {
      from: "Barcelona",
      to: "Moscow"
    },
    ranges: [
      {
        fromLabel: "from",
        fromTime: 15000,
        toLabel: "to",
        toTime: 148800
      }
    ]
  }
];

export const airlines = {
  alliances: [
    {
      label: "Все",
      checked: true
    },
    {
      label: "Star Alliance",
      checked: true
    },
    {
      label: "OneWorld",
      checked: true
    },
    {
      label: "SkyTeam",
      checked: true
    }
  ],
  companies: [
    {
      label: "Все",
      checked: true
    },
    {
      label: "Aegean Airlines",
      checked: true
    },
    {
      label: "Air Algerie",
      checked: true
    },
    {
      label: "Air Europa",
      checked: true
    },
    {
      label: "Air France",
      checked: true
    },
    {
      label: "Air Moldova",
      checked: true
    },
    {
      label: "Alitalia",
      checked: true
    },
    {
      label: "Alitalia CityLiner",
      checked: true
    },
    {
      label: "Belle Air",
      checked: true
    },
    {
      label: "British Airways",
      checked: true
    },
    {
      label: "Brussels Airlines",
      checked: true
    },
    {
      label: "Bulgaria Air",
      checked: true
    }
  ]
};
