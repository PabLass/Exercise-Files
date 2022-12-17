console.log('Hello')
var dataArray = [5,11,18];

var svg = d3.select("body").append("svg").attr('height',"100%" ).attr('width',"100% ");

svg.selectAll("rect")
    .data(dataArray)
    .enter().append('rect')
        .attr('height', function (d,i) {return d*15; })
        .attr('y',"100" )
        .attr('width',"50" )
        .attr('x',function (d,i) {return 60*i; })
        .attr('y',function (d,i) {return 300 - d*15; })
        .attr('fill', "pink")
;
 
var newX= 300;
svg.selectAll("circle.first")
    .data(dataArray)
    .enter().append('circle')
                .attr("class","first")
                .attr('cx',function (d,i) {newX += (d*3) + (i*20); return newX })
                .attr('cy',function (d,i) {return 100 ; })
                .attr('r',function (d,i) {return d*3; })
                .attr('fill', "green")

var newX= 600;
svg.selectAll("ellipse")
    .data(dataArray)
    .enter().append('ellipse')
                .attr('cx',function (d,i) {newX += (d*3) + (i*20); return newX })
                .attr('cy',function (d,i) {return 100 ; })
                .attr('rx',function (d,i) {return d*3; })
                .attr('ry',function (d,i) {return 30; })
                .attr('fill', "blue")
var newX= 600;
var NewY=300;
svg.selectAll("line")
    .data(dataArray)
    .enter().append('line')
        .attr('x1', newX)
        .attr('y1', function (d,i) {return NewY+ (i*20);} )
        .attr('x2', function (d) {return newX + (d*15); return newX })
        .attr('y2', function (d,i) {return NewY+ (i*20);} )
      //  .style('stroke', '#000')
      //  .style('stroke-width', '2')
      ;
var newX= 300;



var textarray=['start', 'middle', 'end'];

svg.append("text").selectAll("tspan")
    .data(textarray)
    .enter().append("tspan")
        .attr('x',newX )
        .attr('y',function(d,i){return   NewY  +i*30}   )
        .attr('fill',"none")
        .attr('font-size',"30")
        .attr('text-anchor',"start")
        .attr('stroke',"blue")
        .attr('stroke-width',"2")
        .attr("dominant-baseline","middle" )
        .text(function (d) {return d;})

;    


    ;

    svg.append("line")
    .attr('x1', newX)
    .attr('y1', NewY -5 )
    .attr('x2', newX)
    .attr('y2', NewY +60 );