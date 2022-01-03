(()=> {

const fullName = (firstName:String, lastName?:string, upper:boolean=true):string => {

if(upper){
  return  `${firstName} ${lastName || 'No last name'}`.toUpperCase();
}
return  `${firstName} ${lastName || 'No last name'}`;
}

const name = fullName('Tony', 'Stark', false);
console.log(name);


})()
