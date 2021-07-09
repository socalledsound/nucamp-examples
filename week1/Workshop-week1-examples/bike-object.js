
function async(a){
    
}

const bicycle = {
    color:'blue',
    electric: 'false',
    getInfo(){
        console.log(this.color, this.electric)
    },
    start(){
        console.log('you begin to pedal the bike')
    }
}

console.log(bicycle)
console.log(bicycle.color)
console.log(bicycle.start)
bicycle.start()
bicycle.getInfo()

bicycle.color = 'green';
const changedColor = bicycle.color
bicycle.electric = true
console.log(`new color : ${bicycle.electric}`)