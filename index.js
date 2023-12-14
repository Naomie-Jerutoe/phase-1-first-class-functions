function receivesAFunction(callback){
  callback();
  return 'This is a type of function declaration';
}

function returnsANamedFunction(){
  return receivesAFunction; 
}

function returnsAnAnonymousFunction(){
  return function (){
    return 'This is an anonymous function';
  }
}

