import DAT from './globe';

import {dataFlat, dataMagnitude} from './dummyData';

export default function initGlobe() {
  const container = document.getElementById('container');
  let globe;

  window.data = dataFlat;
  const sizeOfPoint = 2;

  if(dataFlat[0].magnitude) {
    globe = new DAT.Globe(container, 'magnitude', sizeOfPoint);
  } else {
    globe = new DAT.Globe(container, 'flat', sizeOfPoint);
  }
  globe.addData(dataFlat);

  globe.createPoints();
  globe.animate();
}
