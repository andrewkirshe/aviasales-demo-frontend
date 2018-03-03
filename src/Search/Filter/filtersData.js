const filtersData = [
  {
    label: "ПЕРЕСАДКИ",
    isOpened: true,
    reset: true,
    controls: [
      {
        type: "checkbox",
        label: "Все"
      },
      {
        type: "checkbox",
        label: "Без пересадок",
        price: 7712
      },
      {
        type: "checkbox",
        label: "1 пересадка",
        price: 11150,
        checked: true
      },
      {
        type: "checkbox",
        label: "2 пересадки",
        price: 16821
      },
      {
        type: "checkbox",
        label: "3 пересадки",
        price: 23986
      }
    ]
  },
  {
    label: "ВРЕМЯ ВЫЛЕТА И ПРИБЫТИЯ",
    isOpened: true,
    controls: [
      {
        type: "range-date-time",
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
        type: "range-date-time",
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
            notes: "Прибытие в Москву",
            fromLabel: "c",
            fromDate: 1520089200,
            toLabel: "до",
            toDate: 1520243700
          }
        ]
      }
    ]
  },
  {
    label: "Багаж",
    isOpened: false,
    controls: []
  },
  {
    label: "Длительность пересадки",
    isOpened: false,
    controls: []
  },
  {
    label: "Время в пути",
    isOpened: true,
    controls: [
      {
        type: "range-time",
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
        type: "range-time",
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
    ]
  },
  {
    label: "Авиакомпании",
    count: 43,
    isOpened: true,
    controls: [
      {
        type: "checkbox",
        label: "Несколько авиакомпаний",
        description:
          "Показывать билеты с перелетами, выполняемыми несколькими авиакомпаниями, включая выбранную"
      },
      {
        type: "group",
        label: "Альянсы"
      },
      {
        type: "checkbox",
        label: "Все",
        checked: true
      },
      {
        type: "checkbox",
        label: "Star Alliance",
        checked: true
      },
      {
        type: "checkbox",
        label: "OneWorld",
        checked: true
      },
      {
        type: "checkbox",
        label: "SkyTeam",
        checked: true
      },
      {
        type: "group",
        label: "Авиакомпании"
      },
      {
        type: "checkbox",
        label: "Все",
        checked: true
      },
      {
        type: "checkbox",
        label: "Aegean Airlines",
        checked: true
      },
      {
        type: "checkbox",
        label: "Air Algerie",
        checked: true
      },
      {
        type: "checkbox",
        label: "Air Europa",
        checked: true
      },
      {
        type: "checkbox",
        label: "Air France",
        checked: true
      },
      {
        type: "checkbox",
        label: "Air Moldova",
        checked: true
      },
      {
        type: "checkbox",
        label: "Alitalia",
        checked: true
      },
      {
        type: "checkbox",
        label: "Alitalia CityLiner",
        checked: true
      },
      {
        type: "checkbox",
        label: "Belle Air",
        checked: true
      },
      {
        type: "checkbox",
        label: "British Airways",
        checked: true
      },
      {
        type: "checkbox",
        label: "Brussels Airlines",
        checked: true
      },
      {
        type: "checkbox",
        label: "Bulgaria Air",
        checked: true
      }
    ]
  },
  {
    label: "Аэропорты",
    isOpened: false,
    controls: []
  },
  {
    label: "Аэропорт пересадки",
    count: 71,
    isOpened: false,
    controls: []
  },
  {
    label: "Агенства",
    count: 26,
    isOpened: false,
    controls: []
  }
];

export default filtersData;
