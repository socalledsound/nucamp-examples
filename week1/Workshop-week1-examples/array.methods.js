


// console.log(arr)

const matrix = Array(5).fill(0).map(() => Array(5).fill(0));
// console.log(matrix)


// const logValue = (val) => {
//     console.log(value)
// }


// const add1 = (x) => x + 1


// const addThenLog = (func1, func2) => {
//         const x = 10
//         func2(func1(x))
// }

// addThenLog(add1, logValue)




// add1(3)




// const callbackFunction = (item, index) => index
// const arr = Array(5).fill(0)
// console.log(arr)
// arr2 = arr.map((item, index) => item + index )
// console.log(arr2)
// const arr3 = arr2.map((item) => item + 1)
// console.log(arr3)




const sequentialArr = Array.from({length : 20}, (el, i) => i )
//console.log(sequentialArr)


const getRandomInt = () => Math.floor(Math.random() * 100)
const randArray = Array.from({length: 10}, getRandomInt)
// console.log(randArray)


const addOne = (x) => x + 1 
const arrItemsPlusOne = randArray.map(addOne)
// console.log(arrItemsPlusOne)
const arrItemsTimes100 = randArray.map( item => item * 100)
// console.log(arrItemsTimes100)

const greaterThan50 = randArray.filter((el) => el > 50)
// console.log(greaterThan50)


const equalsSix = sequentialArr.filter( item => item === 6)[0]
//console.log(equalsSix)


const betweenTenandTwenty = randArray.filter((item, index) => item >=10 && item <=20)

// console.log(betweenTenandTwenty)


const peopleArr  = [
    {
        username:    'glestrade',
        displayname: 'Inspector Lestrade',
        email:       'glestrade@met.police.uk',
        authHash:    'bdbf9920f42242defd9a7f76451f4f1d',
        lastSeen:    '2019-05-13T11:07:22+00:00',
    },
    {
        username:    'mholmes',
        displayname: 'Mycroft Holmes',
        email:       'mholmes@gov.uk',
        authHash:    'b4d04ad5c4c6483cfea030ff4e7c70bc',
        lastSeen:    '2019-05-10T11:21:36+00:00',
    },
    {
        username:    'iadler',
        displayname: 'Irene Adler',
        email:       null,
        authHash:    '319d55944f13760af0a07bf24bd1de28',
        lastSeen:    '2019-05-17T11:12:12+00:00',
    },
];


const loginName = 'mholmes'
const currentUser = peopleArr.filter((el) => el.username === loginName )[0] 
console.log(currentUser)
console.log(currentUser.authHash)

// see challenge
// see mapping-dom-example



// const total = randArray.reduce((acc, cur) => acc + cur)
// console.log(randArray)

const add = (accumulator, current) => {
    // console.log(accumulator)
    return accumulator + current
}


const total = randArray.reduce(add)
// console.log(total)

const min = randArray.reduce((acc, cur) => {
    
    let val
    if(acc < cur){
        return val = acc
    }else{
        return val = cur
    }
    // console.log(acc, cur)
    // console.log(val)
    return val
})
// console.log(randArray)
// console.log(min)



// function notEmptyEmail(x) {
//     return (x.email !== null) && (x.email !== undefined);
//  }
 //const peopleWithEmail = peopleArr.filter(notEmptyEmail)
//  console.log(peopleWithEmail)

 function getLastSeen(x) {
    return x.lastSeen;
}

// const lastSeenDates = peopleWithEmail.map(getLastSeen)
// const lastSeenDates2 = peopleWithEmail.map(( person ) => person.lastSeen)
// const mostRecent = lastSeenDates.reduce((a, b) => a > b ? a : b)
// console.log(mostRecent)

const chainedMostRecent = peopleArr.filter( (person) => (person.email !== null) && (person.email !== undefined))
                                    .map((person) => person.lastSeen)
                                    .reduce((a, b) => a > b ? a : b)
console.log(chainedMostRecent)



// function notEmptyMostRecent(currentRecent, person) {
//     return (notEmptyEmail(person))
//         ? greater(currentRecent, person.lastSeen)
//         : currentRecent;
// }


const notEmptyEmail = (x) =>  (x.email !== null) && (x.email !== undefined)
const lastSeen = (a, b) => a.lastSeen > b.lastSeen ? a : b;

const mostRecent = peopleArr.reduce((currentMostRecent, person) => {
    // console.log(currentMostRecent)
    return (notEmptyEmail(person))
        ? lastSeen(currentMostRecent, person)
        : currentMostRecent      
})

// console.log(mostRecent.lastSeen)




//update one item in object using.reduce
const userNameToUpdate = 'iadler'
const emailToAdd = 'iadler@hotmail.com'
const updatedPeopleArr = peopleArr.reduce((updatedItems, item ) => {
    // console.log(updatedItems)
    const itemToUpdate = item.username === userNameToUpdate
    console.log(itemToUpdate)
    if(itemToUpdate) {
        updatedItems.push({...item, email: emailToAdd})
        return updatedItems
    }else{
        updatedItems.push(item)
        return updatedItems
    }
    }, [])

//  console.log(updatedPeopleArr)   