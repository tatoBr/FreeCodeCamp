function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  let opArr = [];
  for (let element of arr) {
    let { name, avgAlt } = element;

    const semiMajorAxisCube =
      Math.pow(avgAlt + earthRadius, 3);

    const twoPI = 2 * Math.PI;

    const orbitalPeriod =
      twoPI * Math.sqrt(semiMajorAxisCube / GM);

    opArr.push({
      name: name,
      orbitalPeriod: Math.round(orbitalPeriod)
    });
  }
  return opArr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
