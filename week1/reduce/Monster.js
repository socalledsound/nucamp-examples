

class Monster {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    log(){
        console.log(this);
    }
}

class Ghost extends Monster {
    constructor(x, y){
        super(x, y);
    }
}



const myMonster = new Monster(400, 400);
const myGhost = new Ghost(120, 560);

console.log(myGhost.log());