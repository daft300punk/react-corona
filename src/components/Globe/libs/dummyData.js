const types = ['dev', 'dsc', 'des'];

const makeDummyDataFlat = () => {
  let dataFlat = [];
  for(let i = 0; i < 1000; i++) {
    let multiplier1, multiplier2;

    if( Math.random() < .5 ) multiplier1 = 1;
    else multiplier1 = -1;

    if( Math.random() < .5 ) multiplier2 = 1;
    else multiplier2 = -1;

    const lat = Math.random() * 90 * multiplier1;
    const long = Math.random() * 180 * multiplier2;
    const type = types[Math.floor(Math.random() * 3)];
    const data = {
      lat: lat,
      long: long,
      type: type,
      text: ''
    };
    dataFlat.push(data);
  }
  return dataFlat;
};

const makeDummyDataMagnitude = () => {
  let dataMagnitude = [];
  
  for(let i = 0; i < 500; i++) {
    let multiplier1, multiplier2;
    
    if( Math.random() < .5 ) multiplier1 = 1;
    else multiplier1 = -1;

    if( Math.random() < .5 ) multiplier2 = 1;
    else multiplier2 = -1;

    const lat = Math.random() * 90 * multiplier1;
    const long = Math.random() * 180 * multiplier2;
    const type = types[Math.floor(Math.random() * 3)];
    const data = {
      lat: lat,
      long: long,
      type: type,
      text: '',
      magnitude: Math.random()
    };
    dataMagnitude.push(data);
  }

  return dataMagnitude;
};

export const dataFlat = makeDummyDataFlat();
export const dataMagnitude = makeDummyDataMagnitude();
