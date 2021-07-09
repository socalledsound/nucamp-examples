const getRandomColor = () => `#${Math.floor(Math.random() * 2 ** 24).toString(16).padStart(6, "0")}`

const root = document.getElementById('root')

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

const divs = peopleArr.map((person, i) => {
    const container = document.createElement('div')
    container.classList.add('container')
    container.style.backgroundColor = getRandomColor()
    console.log(person)
    const keys = Object.keys(person)
    console.log(keys)
    const textEls = keys.map( () => document.createElement('p'))
    console.log(textEls)
    keys.forEach((key, i) => {
        if(person[key] != null){
        const trimmed = person[key].substring(0, 15)
        console.log(trimmed)
        textEls[i].textContent = trimmed.toString()
        }

    })
    console.log(container)
    return container
})

console.log(divs)
divs.forEach((div) => root.appendChild(div))