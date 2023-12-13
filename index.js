function receivesAFunction(callback){
  callback();
  return 'The callback argument is called as a function';
}

const namedFunction = function (){
  return 'This is a named function';
}

function returnsANamedFunction(){
  return namedFunction; 
}

function returnsAnAnonymousFunction(){
  return function (){
    return 'This is an anonymous function';
  }
}

