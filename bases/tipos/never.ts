(()=> {
  const error = (msg:string):never => {
throw new Error(msg);
  }
  const error2= (msg:string):(never|number) => {
 if(false){
   throw new Error(msg);
 }
 return 1;
  }

  error('Ocurrio un error');
  error2('Ocurrio un error devuleve un numero');

})()
