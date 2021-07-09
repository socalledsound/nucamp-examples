class Monster {
    constructor(type, color, element, way) {
        this.type = type
        this.color = color
        this.element = element
        this.way = way
    }


    attack(){
        console.log('scream aaaargh!')
    }

    beStinky(){
        //let's be mean in here
    }

}


class Dragon extends Monster{
    // constructor(type, color, element, way) {
    //     super(type, color, element, way)
    // }


    fly() {
        console.log(`The ${this.color} ${this.element} ${this.type} flaps its wings and begins to fly.`);
    }
    direction() {
        console.log(`up up and away to the ${this.way} !`);
    }
}



class Zombie extends Monster{
    // constructor(type, color, element, way) {
    //     super(type, color, element, way)

    // }
    mutterIncomprehensibly(){

    }

    direction(){
        console.log(`slowly moving to the ${this.way} !`);
    }


    stumbleAround(){
        console.log(`The ${this.color} ${this.element} ${this.type} stumbles away.`);
    }
}




const myZombie = new Zombie('weird', 'green', 'luck', 'left')
myZombie.attack()


// const redDragon = new Dragon('wood', 'red', 'dunno', 'left')
// redDragon.fly()
// redDragon.direction()
// redDragon.attack()