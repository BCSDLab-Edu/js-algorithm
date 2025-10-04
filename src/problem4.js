function problem4(word) {
  var answer;
  answer = "";
  for ( c of word ) {
    let a;
    if ( c>="A" && c<="Z" ) {
      a = String.fromCharCode( "Z".charCodeAt(0) - ( c.charCodeAt(0) - "A".charCodeAt(0) ) );
      answer+=a;
    }  else if ( c>="a" && c<="z" ) {
      a = String.fromCharCode( "z".charCodeAt(0) - ( c.charCodeAt(0) - "a".charCodeAt(0) ) );
      answer+=a;
    } else {
      answer+=c;
    }
  }
  return answer;
}

module.exports = problem4;
