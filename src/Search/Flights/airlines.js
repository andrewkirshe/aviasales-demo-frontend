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
export default airlines;
