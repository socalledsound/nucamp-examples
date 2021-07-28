const bicycle = {  
    color: 'blue',   
    electric: false,  
    hello = (greeting) => console.log(greeting), 
    start() 
    {       
        console.log('You begin to pedal the bike.');  
    }
};


bicycle.color = 'green';
bicycle.electric = true;
bicycle.start = function(){
    console.log('whatever');
}


const myObject = {
    name: 'alien food',
    isAlive: false,
    isFun: true,
}

const eatFood = (name) => {
    console.log(name)
}

eatFood();








// console.log(bicycle.start());


const myArrowFunction = num => ({
    name: 'chris',
    sorry: 'i cursed',
})