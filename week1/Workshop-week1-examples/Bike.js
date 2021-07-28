class Bike {
   constructor(color, electric, model){
        this.color = color;
        this.electric = electric;
        this.model = model;
   } 
   start(){
        console.log('you being pedaling')
   }
   getInfo(){
       console.log(`color: ${this.color}, electric: ${this.electric}`)
   }
}


class BeaterBike extends Bike{
    constructor(color, electric, model, beater){
        super(color, electric, model);
        this.beater = beater
    }

    getInfo(){
        super.getInfo()
        console.log(`beater status:  ${this.beater}`)
    }
}




// const myOldBeaterBike = new Bike('purple', false, 'schwinn', true);
myOldBeaterBike.getInfo()



class App extends Component {
    constructor(){
        super(props)
        this.state = {

        }
    }

    render(){
        
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

// goodOldBike.getInfo()
// electricBike.getInfo()
// goodOldBike.start()
// electricBike.start()