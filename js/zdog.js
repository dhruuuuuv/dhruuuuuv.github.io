
let TAU = Zdog.TAU; // easier to read constant
let UP_LIMIT = 70
let inc_amount = -1
let inc_const = 0.005
let ycount = 0
let up = true

let isSpinning = true;

let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  dragRotate: true,
  onDragStart: function () {
    isSpinning = false;
  },
  rotate: { x: -TAU / 8 }
});

const pot = new Zdog.Cylinder({
  addTo: illo,
  diameter: 90,
  length: 70,
  stroke: false,
  rotate: {
    x: TAU / 4
  },
  color: '#E2725B',
  backface: '#9b7653',
});

const potLip = new Zdog.Ellipse({
  addTo: pot,
  diameter: 100,
  stroke: 15,
  translate: {
    z: 40
  },
  color: '#E2725B',
})

const stem = new Zdog.Shape({
  addTo: illo,
  path: [
    { x: 0, y: -35 },   // start
    // { arc: [
    //   { x:  20, y: -60 }, // corner
    //   { x:  20, y:  -20 }, // end point
    // ]},
    {
      arc: [ // start next arc from last end point
        { x: 20, y: -100 }, // corner
        { x: 20, y: -100, z: -10 }, // end point
      ]
    },
  ],
  closed: false,
  stroke: 8,
  color: '#7c9d14'
});

const leaf = new Zdog.Ellipse({
  addTo: stem,
  width: 8,
  height: 15,
  stroke: 10,
  color: '#7c9d14',
  translate: {
    x: 25, y: -100, z: -10
  },
  rotate: {
    z: TAU / 8
  }
})

const leaf2 = leaf.copy({
  translate: {
    x: 18, y: -60, z: -6
  },
  rotate: {
    x: TAU / 8
  }
})

const stem2 = stem.copyGraph({
  rotate: {
    y: TAU / 2 + 1
  }
})



function animate () {
  illo.rotate.y += isSpinning ? 0.03 : 0;
  if (ycount === UP_LIMIT) {
    inc_amount = -inc_amount
  } else if (ycount === 0) {
    inc_amount = -inc_amount
  }

  illo.rotate.x += isSpinning ? inc_amount * inc_const : 0;
  ycount += inc_amount
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}

animate();