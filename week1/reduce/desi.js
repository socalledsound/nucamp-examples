// function filterC(){
//     let Cbegin = "\nThese restaurant begin with the letter C:\n";
//     const beginC = restaurants.filter(r => r.startsWith('C'));
//      beginC.forEach(r => {
//          Cbegin +=`\n${r.name}`;
//      });
//    document.getElementById("list").innerText = Cbegin;

const myArray = [0,4,6,7];

const seven = myArray.filter( function(item){
    console.log(item);
    return item === 7
    });
console.log(seven);

const myDesire = {
    screencapURL = 'puppy.png',
    amplify = function(){
        console.log('HI!');
    }
}