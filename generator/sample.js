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
    points: [[0.337, 0.45125, "1", "ARM", ""]],
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
    points: [[0.337, 0.45125, "2", "OFF -> ON", ""]],
  },
  right_console_1: {
    image: {
      src: "right_console",
      crop: {
        x: 160,
        y: 50,
        height: 2,
        width: 0.6,
      },
    },
    points: [
      [0.472, 0.1875, "1", "OFF -> ON", ""],
      [0.609, 0.4725, "2", "OFF -> ON", ""],
      [0.672, 0.57625, "3", "OFF -> ON", ""],
      [0.724, 0.68, "4", "OFF -> ON", ""],
      [0.413, 0.6625, "5", "OFF -> NORM", ""],
    ],
  },
  right_console_2: {
    image: {
      src: "right_console",
      crop: {
        x: 160,
        y: 50,
        height: 2,
        width: 0.6,
      },
    },
    points: [
      [0.472, 0.1875, "6", "OFF -> ON", ""],
      [0.609, 0.4725, "7", "OFF -> ON", ""],
      [0.672, 0.57625, "8", "OFF -> ON", ""],
      [0.724, 0.68, "9", "HOLD -> DN\nDN -> OPERATE LOCKED", ""],
      [0.413, 0.6625, "10", "OFF -> AUTO", ""],
    ],
  },
  rear_left_console: {
    image: {
      src: "rear_left_console",
      crop: {
        x: 160,
        y: 50,
        height: 2,
        width: 0.6,
      },
    },
    points: [
      [0.472, 0.1875, "1", "OFF -> ON", ""],
      [0.609, 0.4725, "2", "ARM", ""],
    ],
  },
  rear_right_console: {
    image: {
      src: "rear_left_console",
      crop: {
        x: 160,
        y: 50,
        height: 2,
        width: 0.6,
      },
    },
    points: [
      [0.472, 0.1875, "1", "OFF -> ON", ""],
      [0.609, 0.4725, "2", "OFF -> ON", ""],
      [0.609, 0.4725, "3", "OFF -> MAN ONLY", ""],
    ],
  },
  main_panel_1: {
    image: {
      src: "main_panel",
      crop: {
        x: 160,
        y: 50,
        height: 2,
        width: 0.6,
      },
    },
    points: [
      [0.413, 0.6625, "1", "Pull", ""],
      [0.472, 0.1875, "4", "Wait 26%", ""],
      [0.724, 0.68, "7", "Wait 26%", ""],
    ],
  },

  right_console_3: {
    image: {
      src: "right_console",
      crop: {
        x: 160,
        y: 50,
        height: 2,
        width: 0.6,
      },
    },
    points: [[0.413, 0.6625, "2", "Wait Green Light", ""]],
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
      [0.413, 0.6625, "3", "Click", ""],
      [0.472, 0.1875, "5", "To Idle", ""],
      [0.724, 0.68, "6", "Click", ""],
      [0.724, 0.68, "8", "To Idle", ""],
    ],
  },

  main_panel_2: {
    image: {
      src: "main_panel",
      crop: {
        x: 160,
        y: 50,
        height: 2,
        width: 0.6,
      },
    },
    points: [
      [0.472, 0.1875, "1", "OFF -> ON", ""],
      [0.609, 0.4725, "2", "OFF -> ON", ""],
      [0.672, 0.57625, "3", "OFF -> ON", ""],
      [0.724, 0.68, "4", "Click", ""],
      [0.413, 0.6625, "5", "OFF -> MAX", ""],
      [0.413, 0.6625, "6", "OFF -> MAX", ""],
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
    points: [
      [0.472, 0.1875, "1", "OFF -> STORE", ""],
      [0.609, 0.4725, "5", "STORE -> NAV", ""],
    ],
  },

  front_panel: {
    image: {
      src: "front_panel",
      crop: {
        x: 160,
        y: 50,
        height: 2,
        width: 0.6,
      },
    },
    points: [
      [0.472, 0.1875, "2", "Wait SH NO TAXI -> SH OK", ""],
      [0.609, 0.4725, "3", "Click", ""],
      [0.609, 0.4725, "4", "Click", ""],
    ],
  },

  left_console_4: {
    image: {
      src: "left_console_2",
      crop: {
        x: 160,
        y: 50,
        height: 2,
        width: 0.6,
      },
    },
    points: [
      [0.472, 0.1875, "1", "STOP TRANS -> NORM", ""],
      [0.609, 0.4725, "2", "Hold until green light", ""],
    ],
  },
};
