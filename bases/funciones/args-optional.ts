(()=> {

const fullName = (firstName:String, lastName?:string):string => {

  return  `${firstName} ${lastName || 'No last name'}`
}

const name = fullName('Tony', 'Stark');
console.log(name);


})()
