export const mapping = {
  left_console_1: {
    image: {
      src: "left_console_1",
      crop: {
        x: 160,
        y: 50,
        height: 2,
        width: 0.6,
      },
    },
    points: [
      [0.472, 0.1875, "1", "OFF -> ON", "*"],
      [0.609, 0.4725, "2", "OFF -> ON", "*"],
      [0.672, 0.57625, "3", "OFF -> ON", ""],
      [0.724, 0.68, "4", "OFF -> ON", ""],
      [0.413, 0.6625, "5", "OFF -> NORM", ""],
      [0.633, 0.81, "6", "OFF -> ON", ""],
      [0.872, 0.56375, "7", "OFF -> 5", "*"],
      [0.872, 0.56375, "8", "OFF -> 5", "*"],
      [0.872, 0.56375, "9", "OFF -> 5", "*"],
      [0.872, 0.56375, "10", "OFF -> 5", "*"],
      [0.872, 0.56375, "1,5", "OFF -> 5", "*"],
    ],
  },
  left_console_2: {
    image: {
      src: "left_console_2",
      crop: {
        x: 50,
        y: 0,
        height: 1,
        width: 1,
      },
    },
    points: [
      [0.337, 0.45125, "1", "NORM -> STOP TRANS", ""],
      [0.369, 0.22875, "2", "EMERG -> AUTO", ""],
      [0.431, 0.29375, "3", "EMERG -> AUTO", ""],
      [0.571, 0.52875, "4", "OFF -> ON", ""],
      [0.662, 0.62125, "5", "OFF -> ON", ""],
      [0.754, 0.72, "6", "OFF -> ON", ""],
    ],
  },
  front_seat: {
    image: {
      src: "seat",
      crop: {
        x: 50,
        y: 0,
        height: 1,
        width: 1,
      },
    },
    points: [[0.455, 0.52125, "1", "ARM", ""]],
  },
  main_panel_left: {
    image: {
      src: "main_panel_left",
      crop: {
        x: 50,
        y: 0,
        height: 1,
        width: 1,
      },
    },
    points: [[0.536, 0.55, "2", "Zero (Hold + Scroll)", ""]],
  },
  right_console_1: {
    image: {
      src: "right_console",
      crop: {
        x: 620,
        y: 150,
        height: 2,
        width: 0.3,
      },
    },
    points: [
      [0.456, 0.16625, "1", "OFF -> ON", ""],
      [0.35, 0.66625, "2", "OFF -> ON", ""],
      [0.406, 0.57875, "3", "OFF -> ON", ""],
      [0.583, 0.2975, "4", "OFF -> ON", ""],
      [0.63, 0.21875, "5", "OFF -> NORM", ""],
    ],
  },
  right_console_2: {
    image: {
      src: "right_console",
      crop: {
        x: 820,
        y: 150,
        height: 2,
        width: 0.4,
      },
    },
    points: [
      [0.19, 0.69125, "6", "OFF -> ON", ""],
      [0.371, 0.3875, "7", "OFF -> ON", ""],
      [0.336, 0.515, "8", "OFF -> ON", ""],
      [0.631, 0.34625, "9", "HOLD -> DN\nDN -> OPERATE LOCKED", ""],
      [0.57, 0.2075, "10", "  OFF -> AUTO", ""],
    ],
  },
  rear_left_console: {
    image: {
      src: "rear_left_console",
      crop: {
        x: 400,
        y: 50,
        height: 2,
        width: 0.8,
      },
    },
    points: [
      [0.389, 0.27625, "1", "OFF -> ON", ""],
      [0.769, 0.49375, "2", "ARM", ""],
    ],
  },
  rear_right_console: {
    image: {
      src: "rear_right_console",
      crop: {
        x: 800,
        y: 250,
        height: 2,
        width: 0.4,
      },
    },
    points: [
      [0.291, 0.5625, "1", "OFF -> ON", ""],
      [0.532, 0.57875, "2", "OFF -> ON", ""],
      [0.78, 0.6525, "3", "OFF -> MAN ONLY", ""],
    ],
  },
  main_panel_1: {
    image: {
      src: "main_panel",
      crop: {
        x: 1400,
        y: 400,
        height: 2,
        width: 0.3,
      },
    },
    points: [
      [0.644, 0.73125, "1", "Pull", ""],
      [0.492, 0.27875, "4", "Wait\n26%", ""],
      [0.373, 0.29375, "7", "Wait\n26%", ""],
    ],
  },
  right_console_3: {
    image: {
      src: "right_console",
      crop: {
        x: 400,
        y: 50,
        height: 2,
        width: 0.4,
      },
    },
    points: [[0.686, 0.5925, "2", "Wait Green Light", ""]],
  },
  throttle: {
    image: {
      src: "throttle",
      crop: {
        x: 160,
        y: 50,
        height: 2,
        width: 0.6,
      },
    },
    points: [
      [0.74, 0.49375, "3", "Click", ""],
      [0.57, 0.37625, "5", "To Idle", ""],
      [0.811, 0.345, "6", "Click", ""],
      [0.729, 0.155, "8", "To Idle", ""],
    ],
  },
  main_panel_2: {
    image: {
      src: "main_panel",
      crop: {
        x: 600,
        y: 0,
        height: 2,
        width: 0.6,
      },
    },
    points: [
      [0.18, 0.30625, "1", "OFF -> ON", ""],
      [0.537, 0.67375, "2", "OFF -> ON", ""],
      [0.891, 0.24375, "3", "OFF \n -> ON", ""],
      [0.11, 0.2225, "4", "Click", ""],
      [0.283, 0.6325, "5", "OFF -> MAX", ""],
      [0.281, 0.5675, "6", "OFF -> MAX", ""],
    ],
  },
  left_console_3: {
    image: {
      src: "left_console_1",
      crop: {
        x: 160,
        y: 50,
        height: 2,
        width: 0.6,
      },
    },
    points: [[0.508, 0.56125, "1,5", "   OFF -> STORE\n   STORE -> NAV", ""]],
  },
  front_panel: {
    image: {
      src: "front_panel",
      crop: {
        x: 200,
        y: 0,
        height: 2,
        width: 0.8,
      },
    },
    points: [
      [0.627, 0.43375, "2", "Wait SH NO TAXI -> SH OK", ""],
      [0.393, 0.8575, "3", "Click", ""],
      [0.675, 0.8575, "4", "Click", ""],
    ],
  },
  left_console_4: {
    image: {
      src: "left_console_2",
      crop: {
        x: 800,
        y: 100,
        height: 2,
        width: 0.6,
      },
    },
    points: [
      [0.15, 0.36375, "1", "STOP TRANS -> NORM", ""],
      [0.539, 0.7525, "2", "Hold until green light", ""],
    ],
  },
};
