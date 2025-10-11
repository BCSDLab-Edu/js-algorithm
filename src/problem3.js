function problem3(number) {
  let clap = 0;
  for(let i=1; i<=number; i++){
    let str = String(i).split("");
    for(let j of str){
      if(j === "3" || j === "6" || j === "9"){
        clap+=1;
      }
    }
  }
  return clap;
}

module.exports = problem3;
