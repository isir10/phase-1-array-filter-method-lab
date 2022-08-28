// Code your solution here
function findMatching(drivers, names) {
    return drivers
      .filter(function (driver) {
        return driver.toUpperCase().indexOf(names.toUpperCase()) !== -1;
      })
      .sort();
  }

function fuzzyMatch(drivers, names) {
    return drivers
      .filter(function (driver) {
        return driver.toUpperCase().indexOf(names.toUpperCase()) === 0;
      })
      .sort();
  }
  
  function matchName(drivers, name) {
    return drivers.filter(function (driver) {
      return driver.name.toUpperCase() === name.toUpperCase();
    });
  }