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
};
