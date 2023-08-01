import { mapping } from "./sample.js";
console.log(mapping);

const getDropdownOptions = (mapping) => {
  const options = Object.keys(mapping);
  return options;
};

const getDropdownNums = (mapping) => {
  const options = mapping.points.map((val) => val[3]);
  return options;
};
let curOption = mapping[getDropdownOptions(mapping)[0]];
let cachedImages = {};
let curNumSelect = 0;

// const inputVals = {
//   num: 0,

// }

var sketch = new p5(function (p5) {
  const drawBackground = () => {
    let curImgKey = curOption.image.src;
    let curImg = cachedImages[curImgKey];
    if (curImg) {
      p5.image(
        curImg,
        0,
        0,
        p5.width,
        p5.height,
        curOption.image.crop.x,
        curOption.image.crop.y,
        curImg.width * curOption.image.crop.width,
        curImg.height * curOption.image.crop.height,
        p5.COVER
      );
    } else {
      p5.loadImage(
        `images/${curImgKey}.png`,
        (img) => (cachedImages[curImgKey] = img)
      );
    }
  };

  const drawCircle = (raw_x, raw_y, num, desc, opt, size) => {
    const x = raw_x * p5.width;
    const y = raw_y * p5.height;
    size = size ?? 24;

    p5.textAlign(p5.LEFT, p5.CENTER);
    let circleColor = "GreenYellow";
    if (opt == "*") circleColor = "yellow";
    p5.noFill();
    p5.strokeWeight(4);
    p5.stroke(circleColor);
    p5.arc(x, y, 80, 80, p5.PI / 2 - 0.4, 2 * p5.PI - p5.PI / 2 + 0.4);
    p5.textSize(36);
    p5.fill(circleColor);
    p5.noStroke();
    p5.text(num, x - 24, y);
    p5.textSize(size);
    p5.text(desc, x + size * 0.25, y);
    // p5.textSize()
    // p5.text()
  };

  p5.draw = function () {
    drawBackground();
    for (const circle of curOption.points) {
      // console.log(circle);
      drawCircle(...circle);
    }
  };

  p5.setup = function () {
    const cnv = p5.createCanvas(1000, 800);
    cnv.mouseClicked(onCanvasPress);
    p5.background("orange");

    const button = p5.createButton("Save Image");
    const button_2 = p5.createButton("Save Points");

    const drop = p5.createSelect();
    const numSelect = p5.createSelect();

    button_2.mousePressed(() =>
      navigator.clipboard.writeText(JSON.stringify(curOption.points))
    );

    const options = getDropdownOptions(mapping);

    const nums = curOption.points.map((point) => point[2]);

    for (const num of nums) {
      numSelect.option(num);
    }

    curNumSelect = nums[0];
    numSelect.changed(() => {
      console.log(`Selected N${numSelect.value()}`);
      curNumSelect = numSelect.value();
    });

    for (const option of options) {
      drop.option(option);
    }

    drop.changed(() => {
      console.log(`Selected ${drop.value}`);
      curOption = drop.value;
    });

    button.mousePressed(() => p5.saveCanvas(cnv, drop.value(), "png"));
  };

  const onCanvasPress = () => {
    const idx = curOption.points.map((p) => p[2]).indexOf(curNumSelect);
    console.log(idx);
    curOption.points[idx][0] = p5.mouseX / p5.width;
    curOption.points[idx][1] = p5.mouseY / p5.height;
  };
});

console.log(getDropdownOptions(mapping));
