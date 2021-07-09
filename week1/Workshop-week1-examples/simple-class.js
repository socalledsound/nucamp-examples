const getDistance = (pos1, pos2) => {
    const dx = pos1.x - pos2.x;
    const dy = pos1.y - pos2.y;
    return Math.sqrt(dx * dx + dy * dy) 
    }

class Hero {
    constructor(name, position, health){
        this.name = name
        this.position = position
        this.health = health
        this.alive = true;
    }

    checkHealth(){
        if(this.health < 1){
            this.alive = false
            console.log(`${this.name} has died`)
        } else if(this.health < 10){
            console.log(`eat some food! health is down to ${this.health}`)
        } else {
            console.log(`health: ${this.health}`)
        }
    }

    eat(food){
        this.health += food.nutritionalValue
    }

    move(dir){
        const oldPos = this.position;
        const newPos = { x: this.position.x + dir.x, 
                        y: this.position.y + dir.y
                        }
         this.position = newPos;
        this.health -= Math.abs(getDistance(newPos, oldPos))
    }
}


class Dragon {
    constructor(type, color, element, way) {
        this.type = type
        this.color = color
        this.element = element
        this.way = way
    }

    fly() {
        console.log(`The ${this.color} ${this.element} ${this.type} flaps its wings and begins to fly.`);
    }
    direction() {
        console.log(`up up and away to the ${this.way} !`);
    }
}

const redDragon = new Dragon('wood', 'red', 'dunno', 'left')



class Food {
    constructor(name, nutritionalValue){
        this.name = name
        this.nutritionalValue = nutritionalValue
    }

    decay(){
        this.nutritionalValue -= 1
    }
}

class NegativeFood extends Food{
    constructor(name, nutritionalValue){
        super(name, nutritionalValue)
        this.nutritionalValue *= -1;
    }
    
}


const apple = new Food('apple', 10);
const marshmallow = new NegativeFood('apple', 100);


const sam = new Hero('sam', {x: 100, y: 100}, 100)
console.log(sam)
sam.move({x: -10, y: 20})
console.log(sam)
sam.checkHealth()
sam.eat(apple)
sam.checkHealth()
sam.eat(marshmallow)
sam.checkHealth()



