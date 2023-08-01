export const mapping = {
  left_console: {
    image: {
      src: "left_console",
      crop: {
        x: 160,
        y: 50,
        height: 2,
        width: 0.6,
      },
    },
    points: [
      [0.344, 0.7325, "1", "OFF -> ON", "*"],
      [0.8, 0.6, "2", "OFF -> ON\nHOLD -> GC"],
    ],
  },
  right_console: {
    image: {
      src: "left_console",
      crop: {
        x: 50,
        y: 0,
        height: 1,
        width: 1,
      },
    },
    points: [[100, 20, "2"]],
  },
};
