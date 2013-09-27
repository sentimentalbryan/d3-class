
function getData() {
    d3.jsonp("http://www.reddit.com/.json?jsonp=handleData&cb=" + Math.random());
}

var previousData;

var height;
var width;
var PADDING = 50;
var COLUMNS = 8;

function setupViz() {

//    d3.select("body").append("span")
//         .text("CONTENT GOES HERE") 
//         .attr("id","title-text")

    width = document.body.clientWidth;
    height = document.body.clientHeight;

    d3.select("body")
    .append("svg")
    .attr("id","viz")
    .attr("width", width - PADDING)
    .attr("height", height - PADDING)
    .attr("background","#000000")
}

setupViz()

function handleData(data) {

    var formatted = data.data.children.map(function(d) {
        return d.data;
    }); 

    var previousById = ( previousData || [] ).reduce (function (byId,d) {
        byId[d.id] = d; 
        return byId;
    },{});

    formatted.forEach(function(d) {
        if(!previousById[d.id]) return;
        d.previous = previousById[d.id];
        d.scoreChange = d.score - d.previous.score;
    });

    previousData  = formatted;
    var root  = d3.select("#viz");

    var maxRadius = width / COLUMNS ;

    var radiusScale = d3.scale.linear()
    .domain(d3.extent(formatted, function(d) {
    return d.score
    }))
    .range([maxRadius /  10, maxRadius ] );

    var stories = root.selectAll(".story").data(formatted,function(d){ return d.id});

    var storiesEntering = stories.enter()
    .append("g")
    .classed("story",true)

    storiesEntering.append("circle");
    storiesEntering.append("text").text(  function(d){ return d.title} )  ;

    stories
    .attr("transform", function(d,i) {
        var row = Math.floor(i / COLUMNS );
        var column = i % COLUMNS;
        var x = column * maxRadius * 2;
        var y = row * maxRadius * 2;
        return "translate("  + x + "," + y + ")";
    })
    .select("circle")
    .classed("up",function(d) {
        return d.scoreChange > 0;
    })
    .classed("down",function(d) {
        return d.scoreChange < 0;
    })
    .attr("r",function(d) {
        return radiusScale(d.score);
    })
    .on("mouseover", function() {
       d3.select("title-text").text(this.title) 
    }) 
}

setInterval(getData,3000);

getData();
