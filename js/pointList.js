import Point from './point.js';

export default function pointList(containerElement, pointsCount = 10, renderFunction = null) {
  let _pointsCount = pointsCount;
  let _containerElement = containerElement;
  let _points = [];
  let _xStep = 20;
  let _center = {
    x: 300,
    y: 300,
  };

  this.renderElements = function() {
    for (let i = 0; i < _pointsCount; i++) {
      const point = new Point(_center.x, _center.y, 'app__point');
      _points.push(point);
      _containerElement.append(point.element);
    }
  };

  this.moveElements = function(coordsFunction) {
    _points.forEach((point, i) => {
      const newCoordinates = coordsFunction(_pointsCount, i);
      point.setCoordinates(newCoordinates.x + _center.x, newCoordinates.y + _center.y);
    });
  };
}
