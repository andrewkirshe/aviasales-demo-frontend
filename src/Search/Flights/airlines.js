import redwingsL from './redwings_l.png';
import redwingsL2x from './redwings_l@2x.png';
import redwingsS from './redwings_s.png';
import redwingsS2x from './redwings_s@2x.png';

import rossiyaL from './rossiya_l.png';
import rossiyaL2x from './rossiya_l@2x.png';
import rossiyaS from './rossiya_s.png';
import rossiyaS2x from './rossiya_s@2x.png';

import flyL from './fly_l.png';
import flyL2x from './fly_l@2x.png';
import flyS from './fly_s.png';
import flyS2x from './fly_s@2x.png';

import nordwindL from './nordwind_l.png';
import nordwindL2x from './nordwind_l@2x.png';
import nordwindS from './nordwind_s.png';
import nordwindS2x from './nordwind_s@2x.png';

import nordwindstarL from './nordwindstar_l.png';
import nordwindstarL2x from './nordwindstar_l@2x.png';
import nordwindstarS from './nordwindstar_s.png';
import nordwindstarS2x from './nordwindstar_s@2x.png';

const airlines = {
  rossiya: {
    id: 1,
    name: 'Rossiya Airlines',
    logo: {
      s: {
        x1: rossiyaS,
        x2: rossiyaS2x,
      },
      l: {
        x1: rossiyaL,
        x2: rossiyaL2x,
      },
    },
  },
  redwings: {
    id: 2,
    name: 'Red Wings Airlines',
    logo: {
      s: {
        x1: redwingsS,
        x2: redwingsS2x,
      },
      l: {
        x1: redwingsL,
        x2: redwingsL2x,
      },
    },
  },
  fly: {
    id: 3,
    name: 'Fly Airlines',
    logo: {
      s: {
        x1: flyS,
        x2: flyS2x,
      },
      l: {
        x1: flyL,
        x2: flyL2x,
      },
    },
  },
  nordwind: {
    id: 4,
    name: 'Nordwind Airlines',
    logo: {
      s: {
        x1: nordwindS,
        x2: nordwindS2x,
      },
      l: {
        x1: nordwindL,
        x2: nordwindL2x,
      },
    },
  },
  nordwindstar: {
    id: 5,
    name: 'Nordwind Airlines',
    logo: {
      s: {
        x1: nordwindstarS,
        x2: nordwindstarS2x,
      },
      l: {
        x1: nordwindstarL,
        x2: nordwindstarL2x,
      },
    },
  },
};
export default airlines;
