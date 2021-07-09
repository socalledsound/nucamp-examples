class Bike {
   constructor(color, electric){
        this.color = color;
        this.electric = electric;
        
   } 
   start(){
        console.log('you being pedaling')
   }
   getInfo(){
       console.log(`color: ${this.color}, electric: ${this.electric}`)
   }
}


class ElectricBike extends Bike {
    // constructor(color, electric){
    //     super(color, electric)
    // }

    state = {on: 'on'}

    start(){
        super.start()
        console.log(`the battery is ${this.state.on} and the electric battery helps you go faster`)     
    }
}

const goodOldBike = new Bike('red', false)
const electricBike = new ElectricBike('green', true)

goodOldBike.getInfo()
electricBike.getInfo()
goodOldBike.start()
electricBike.start()