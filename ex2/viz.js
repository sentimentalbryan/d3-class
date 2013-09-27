
var withKeyFunction = d3.select("body").append("div");

withKeyFunction.append("h2").text("with key function");

var items = withKeyFunction.append("ul");

function visualiseWithKeyFunction(data) {
    var update = items.selectAll("li").data(data,function(d,i) {
                        return d.id;
                        });

    update.enter().append("li").text(function(d) { 
        return d.name
    });


    update.style("top",function(d,i) {
        return i * 50 + "px";
    });

}

setInterval(function() {

    var data = [
    {id:1, name: "foo"},
    {id:2, name: "bar "},
    {id:3, name: "baz"},
    {id:4, name: "bop"},
    ];

    data.sort(function() { return Math.random() - 0.5 });


    visualiseWithKeyFunction(data);
}
,2000);
