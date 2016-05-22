var data = [
    {"a": "a baby seal walked into a club"},
    {"a": "circles are pointless"},
    {"a": "velcro's a rip-off"}
];

var randomIndex = Math.floor(Math.random()*data.length);

document.getElementById("joke").innerHTML=data[randomIndex].a;
