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
  var elementWidth = htmlElement.node().getBoundingClientRect().width
  var elementHeight = htmlElement.node().getBoundingClientRect().height
  return [elementWidth,elementHeight]
}

function appendSvgCompenentGrpToParent(parent,className){
  parent.append("g")
  .attr("class",className)
}

function verticallyAlignHTMLElementWithSVGElement(svgElement,htmlElement){
  var svgElementBBox = svgElement.node().getBBox();
  var htmlElementRect = htmlElement.node().getBoundingClientRect();
  var svgElementCenterPoint = [svgElementBBox.x - ( svgElementBBox.width / 2 ),svgElementBBox.y - ( svgElementBBox.height / 2 )];
  //TODO set the html x position to equal (html element width / 2 ) - svgElementCenterPoint
  htmlElementPositionAligned = svgElementCenterPoint[0] - (htmlElementRect.width/2);
  htmlElement.style("left",htmlElementPositionAligned)
}

function centerAnchorPointHtmlElement(htmlElement){
  var offsetx = htmlElement.node().getBoundingClientRect().width/2;
  htmlElement.style("left",""+"-"+offsetx+"px");
}
