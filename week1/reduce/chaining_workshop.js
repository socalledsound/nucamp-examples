const data = [
      {
        name: 'Butters',
        age: 3,
        type: 'dog'
      },
      {
        name: 'Lizzy',
        age: 6,
        type: 'dog'
      },
      {
        name: 'Red',
        age: 1,
        type: 'cat'
      },
      {
        name: 'Joey',
        age: 3,
        type: 'dog'
      }
    ];


    const ages = data
                    .filter(animal => animal.type === 'dog')
                    .map(dog => ({ dogyears: dog.age * 7 }))
                     .reduce((sum, dog) => sum + dog.
                     dogyears, 0);


console.log(ages);