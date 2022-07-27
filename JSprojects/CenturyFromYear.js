function centuryFunc(year) {
    // Finish this :)
    let century = Math.floor(year/100);
    if ((year % 100) != 0){
      century = century + 1;
    }
    return century;
  }
  console.log(centuryFunc(1705));
  console.log(centuryFunc(1900));
  console.log(centuryFunc(1601));
  console.log(centuryFunc(2000));