const multiplyBy = x => ((num) => num * x);

function multiplyBy(x){
    return function(num){
        return num * x
    }
}




const niftyVal= multiplyBy(2);
console.log(multiplyBy(2);


