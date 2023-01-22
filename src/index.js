module.exports = function check(str, bracketsConfig) {
  if(str.length % 2 !== 0){
    return false;
  }

  for(let item of bracketsConfig){
    if(!oneTypeBrackets(str, item)){
      return false;
    }
  }
  
  return true;
}

function oneTypeBrackets(string, source) {
  let black_list = [];
  
  for(let i = 0; i < string.length; i++){

    if(black_list.find(item => i === item)){
      continue;
    }

    let isCorrect = false;

    if(string[i] === source[0]){

      for(let j = i + 1 ; j < string.length; j += 2){

        
        if(black_list.find(item => j === item)){
          continue;
        }

        if(string[j] === source[1]){
          isCorrect = true;
          black_list.push(j);
          break;
        }
      }

    } else {
      continue;
    }

    if(!isCorrect){
      return false;
    }
  }

  return true;
}