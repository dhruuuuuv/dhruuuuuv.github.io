var data = $.getJSON("/js/jokes.json", function(data) {
    console.log(data); // this will show the info it in firebug console
});

var randomIndex = Math.floor(Math.random()*data.length);

document.getElementById("joke").innerHTML=data[0].a;
