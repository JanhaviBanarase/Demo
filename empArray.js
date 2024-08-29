let emp=[
    {id:1,name:'Janhavi',age:22},
    {id:2,name:'Tanmay',age:21},
    {id:3,name:'Chinmay',age:23}
]

console.log(emp.find(emp=>emp.id==2));

for(let x of emp){
   
        console.log(x);
        console.log('Id: '+x.id);
        console.log('Name: '+x.name);
    }
