
function greet(greeting) {
    return (name) => {
        return `${greeting}, ${name}`
    }
}

const sayHi = greet('hi')('chris');

// console.log(sayHi)



// connect(mapStateToProps, mapDispatchToProps)(MyApp)



const friends = [
    {
        name: 'Nate',
        greeting: 'hi',
    },
    {
        name: 'Beth',
        greeting: 'Hi!',
    },
    {
        name: 'Afse',
        greeting: 'Salam'
    }
]


const greetings = friends.map( friend => greet(friend.greeting)(friend.name))

console.log(greetings)
