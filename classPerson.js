class Person{
    constructor(name){
        console.log('Person constructor called');
        this.name=name;
    }
    // introduce(){
    //     console.log(`Hello, my name is ${this.name}`);
    // }
    //member method as arrow function 
    introduce =()=>{
        let no=8; // var - global variable, let- local variable , const- constant, this. - instance variable
        console.log(no);
        console.log('Hello, my name is '+this.name); //this is new way of writing function
    }
    
    
}
//console.log(no);
const j=new Person("Janhavi");
j.introduce();