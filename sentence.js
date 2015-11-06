'use strict'

function sentence(str){
  str = decodeURI(str);

  var ReturnObj = function(letters, spaces, words){
    this.letters = letters;
    this.spaces = spaces;
    this.words = words;
  }

  let letters = str.split(' ').join('').length;
  let words = str.split(' ').length;
  let spaces = words - 1;

  let result = new ReturnObj(letters, spaces, words);

  return JSON.stringify(result);

}

module.exports.sentence = sentence;
