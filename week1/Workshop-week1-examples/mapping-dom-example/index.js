// a utility function to generate a random color
const getRandomColor = () => `#${Math.floor(Math.random() * 2 ** 24).toString(16).padStart(6, "0")}`
//get a ref to the root div in our html fil
const root = document.getElementById('root')
// some data.  add some more if you want to!
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

//this function takes in some data and uses it to generat some html
const createItem = (person) => {
    const container = document.createElement('div')
    container.classList.add('container')
    container.style.backgroundColor = getRandomColor()
    console.log(person)
    const keys = Object.keys(person)
    console.log(keys)
    //notice that I'm using .map to generate a paragraph element for
    // each key in the person object that gets passed in to this function
    const textEls = keys.map( () => document.createElement('p'))
    console.log(textEls)
    // for each is another array method that you should use 
    // when you don't return anything 
    keys.forEach((key, i) => {
        if(person[key] != null){
        const trimmed = person[key].substring(0, 15)
        console.log(trimmed)
        textEls[i].textContent = trimmed.toString()
        container.appendChild(textEls[i])
    }

    })
    
    // each time this function is invoked it will return a div
    console.log(container)
    return container
}

// add one line of code here
// which transforms the peopleArr into html
// using the function above!


// and then, after the mystery line of code, we take the array that has
// been generated and .forEach element, append it to the root div in the html!
divs.forEach((div) => root.appendChild(div))