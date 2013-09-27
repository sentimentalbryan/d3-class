

var delayByOneSecond = function(d,i) {
  	  return i * 1000;
  }; 

d3.select("body")
  .text("Hello from D3");

d3.select("body")
  .append("h1").text("Hello from D3");

d3.select("body")
  .append("h1").append("a").text("Hello from D3");

var div1 = d3.select("body")
  .append("div")

div1.append("h1").text("Hello from D3 h1");
div1.append("h2").text("Hello from D3 h2");

//div1.transition(4000)
//  .style("color","red")
//  .style("background","orange")
//  .delay(delayByOneSecond)
div1.transition(15000)
  .style("color","green")
  .style("background","white")
  .delay(delayByOneSecond)
