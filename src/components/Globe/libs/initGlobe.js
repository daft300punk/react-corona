import DAT from './globe';

export default function initGlobe(data) {
  const container = document.getElementById('container');
  const globe = new DAT.Globe(container);

  window.data = data;

  for(let i = 0; i < data.length; i++) {
    globe.addData(data[i][1], { format: 'magnitude', name: data[i][0], animated: true });
  }
  globe.createPoints();
  globe.animate();
}