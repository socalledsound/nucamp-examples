class ArrayFromScratch {
    constructor(){
        this.length = 0;
        this.data = {}
    }

    get(index){
        return this.data[index]
    }

    push(item){
        this.data[this.length] = item;
        this.length ++
    }

    map(anyFunction){
        const newArray = []
        for(let i = 0; i < this.length; i++){
            newArray[i] = cb(this.data[i], i)
        }
        return newArray
    }

    filter(cb){

    }

    


    // map(cb){
    //     // const newArray = new ArrayFromScratch()
    //     const newArray = []
    //     for(let i = 0; i < this.length; i++){
    //         // newArray.push(cb(this.data[i], i))
    //         newArray[i] = cb(this.data[i], i)
    //     }
    //     return newArray
    // }


}

// const arr = new ArrayFromScratch();
// console.log(arr.length)
// arr.push('nyancat');
// console.log(arr.length)
// console.log(arr.get(0))


const arr = new ArrayFromScratch()
arr.push(0)
arr.push(1)
arr.push(2)
console.log(arr.length)
const arr2 = arr.map((el, i) => el + 10)
console.log(arr2)
