import PointList from '../js/pointList.js';

export default function App() {
  const appElement = document.getElementById('points');
  const pointList = new PointList(appElement, 20);
  pointList.renderElements();
  pointList.moveElements(line);

  document.addEventListener('keypress', e => {
    if (e.code === 'KeyC') pointList.moveElements(circle);
    if (e.code === 'KeyL') pointList.moveElements(line);
    if (e.code === 'KeyS') pointList.moveElements(square);
  });
}

function circle(pointsCount, currentI) {
  const r = 100;
  const angle = ((2 * Math.PI) / pointsCount) * currentI;
  return {
    x: Math.sin(angle) * r,
    y: Math.cos(angle) * r,
  };
}

function line(pointsCount, currentI) {
  const step = 20;
  return {
    x: currentI * step,
    y: 0,
  };
}

function square(pointsCount, currentI) {
  const width = 200;
  const countOnLine = pointsCount / 4;
  const step = width / countOnLine;
  const coordinates = {};

  if (currentI < pointsCount / 4) {
    coordinates.x = step * (currentI % countOnLine) - width / 2;
    coordinates.y = -width / 2;
  } else if (currentI < countOnLine * 2) {
    coordinates.x = width / 2;
    coordinates.y = step * (currentI % countOnLine) - width / 2;
  } else if (currentI < countOnLine * 3) {
    coordinates.x = width / 2 - step * (currentI % countOnLine);
    coordinates.y = width / 2;
  } else {
    coordinates.x = -width / 2;
    coordinates.y = width / 2 - step * (currentI % countOnLine);
  }

  console.log(coordinates);

  return coordinates;
}
