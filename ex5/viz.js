
var xToColor = d3.scale.linear()
.domain([0,document.body.clientWidth])
.range(["#ff0000", "#0000ff"]);


d3.select("body")
.on("mousemove",function() {
    console.log(d3.event.clientX);
    //d3.select()
})


var data =  [
{  name:"superjail", excellence: 0.8 } , 
{  name:"ren & stimpy", excellence: 1 },
{  name:"familly guy", excellence: 0.7 },
{  name:"american dad", excellence: 0.2 }
];


var excellenceExtend = d3.extent(data, function(d) {
return d.excellence;
})

var excellenceScale = d3.scale.linear()
.domain(excellenceExtend)
.range(["10px","100px"]);

d3.select("body").selectAll("h2")
.data(data).enter()
.append("h2")
.text(function(d) { return d.name;} )
.style("font-size",function(d) {
return excellenceScale(d.excellence)
});




//console.log("ADSFDSFASFASD")

//d3.select("body") .text("Hello from D3");
