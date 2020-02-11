export default function Point(x, y, className) {
  let _x = x;
  let _y = y;
  let _className = className;

  this.element = document.createElement('div');
  this.element.className = _className;

  this.setCoordinates = function(x, y) {
    this.element.style.transform = `translate(${x}px, ${y}px)`;
  };

  this.setCoordinates(x, y);
}
