function problem3(number) {
  var clap = 0;
  var numlist;
  var n;

  n = number.toString().length;
  for(var i=1; i <= number; i++){
    numlist = i.toString();
    for(var j=0; j < numlist.length; j++){
      var value = Number(numlist[j]);
      if(value === 3 || value === 6 || value === 9)
        clap++;
    }
  }
  
  
  return clap;
}

module.exports = problem3;
