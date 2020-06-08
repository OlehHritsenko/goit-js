const findBestEmployee = function(employees) {
    let numberTask = 0;

    for (let key in employees) {
      if (numberTask <= employees[key]) {
          numberTask = employees[key];
      }
    }
    for (let entrie of Object.entries(employees)) {
        if (entrie.includes(numberTask)) {
          return entrie[0];
        }
    }
};

  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux