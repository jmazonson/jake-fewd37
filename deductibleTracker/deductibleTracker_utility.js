function appendDivCompenentGrpToParent(parent,divClassName,pos){
  var newDiv = d3.select(parent)
  .append("div")
  .classed(divClassName,true)
  .style("transform", "translate("+ pos[0] + "px," + pos[1] + "px)")
  .style("position","absolute");
  return newDiv
}

function setDivElementPosition(div,posX,posY){
  div.style("transform", "translate("+ posX + "px," + posY + "px)")
}

function getHTMLElementWidthHeight(htmlElement){
  width = htmlElement.node().getBoundingClientRect().width
  height = htmlElement.node().getBoundingClientRect().height
  return [width,height]
}

function appendSvgCompenentGrpToParent(parent,className){
  parent.append("g")
  .attr("class",className)
}
