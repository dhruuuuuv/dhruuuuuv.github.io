var target = document.getElementById('target');
var personas = [
  'plant lover',
  'fishbowl gazer',
  'amateur watercolourist',
  'fresh air enthusiast',
  'bleep maker',
  'dog devotee',
  'chilli addict',
  'humble hacker'
];

function newPersona () {
  var i = (Math.random() * personas.length) | 0;
  target.innerText = personas[i];
}

newPersona();