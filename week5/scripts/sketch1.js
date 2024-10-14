let sketch1 = function(p){
  let radius
  let numCircles = 10
  let strWeight = 20

  let timerID
  let bkgndClr

  p.setup = function() {
    p.createCanvas(600, 600)

    p.colorMode(p.HSB, p.TWO_PI, 1, 1)
    
    radius = p.width * 0.1
    p.strokeCap(p.SQUARE)
    bkgndClr = p.color(0)
    timerID = setInterval(()=>{
      bkgndClr = p.color(p.random(p.TWO_PI), p.random(1), p.random(1))
    }, 2000)
  }

  p.draw = function() {
    p.background(bkgndClr)
    p.strokeWeight(strWeight)
    
    p.noFill()
    p.translate(p.width*0.5, p.height*0.5)
    for(let i = 0; i < numCircles; i++){
      p.push()
      p.rotate(p.sin(p.millis() * 0.001 * (i*0.1+1) ) )
      let diameter = (i*strWeight*2) + radius*2
      p.stroke(p.TWO_PI/numCircles*i, 1, 1)
      p.arc(0, 0, diameter, diameter, p.HALF_PI + p.QUARTER_PI, p.TWO_PI + p.QUARTER_PI)
      p.pop()
    }
    
  }
}

new p5(sketch1, "sketch-holder1")
// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }