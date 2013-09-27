//
//--
//[12:39:30.833] function pluck(k) {               
//    return function(datum) {      
//        return datum[k];          
//    }                             
//}                                 
//
//[12:39:30.843] undefined
//[12:39:35.087] var r = pluck("color")
//[12:39:35.093] undefined
//--
//[12:39:41.903] r(document.body)
//[12:39:41.913] undefined
//--
//[12:40:17.192] var r = pluck("colour")
//[12:40:17.202] undefined
//[12:40:22.008] r(document.body)
//[12:40:22.015] undefined
//--
//[12:40:28.048] r
//[12:40:28.058] [object Function]
//--
//[12:40:42.259] r({colour:"red"})
//[12:40:42.275] "red"


//Helper function, cheaper than constantly creating anonymous elements.
function pluck(k) {
    return function(datum) {
        return datum[k];
    }
}

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
