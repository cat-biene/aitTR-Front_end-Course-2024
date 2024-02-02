const cats = [
    {
      name: 'Alisa',
      age: 5,
      gender: 'female',
    },
    {
      name: 'Sima',
      age: 10,
      gender: 'female',
    },
    {
      name: 'Kasper',
      age: 9,
      gender: 'male',
    },
    {
      name: 'Marusya',
      age: 15,
      gender: 'female',
    },
  ];
  
  // вывести имена всех девочек
  
  // массив кошечек
  // const females = cats.filter(({ gender }) => gender === 'female');
  // const females = cats.filter((c) => c.gender === 'female');
  
  // массив имён кошечек
  // const femalesNames = females.map(({ name }) => name);
  // console.log(femalesNames);
  
  cats
    .filter((c) => c.gender === 'female')
    .forEach(({ name }) => console.log(name));
 
    const cats1 = [
        {
          name: 'Alisa',
          age: 5,
          gender: 'female',
        },
        {
          name: 'Sima',
          age: 10,
          gender: 'female',
        },
        {
          name: 'Kasper',
          age: 9,
          gender: 'male',
        },
        {
          name: 'Marusya',
          age: 15,
          gender: 'female',
        },
      ];
      
      // filter - отфильтровать массив (выкинуть лишние элементы)
      // map - преобразовать каждый элемент массива
      // reduce - получить некое аккумулированное значение из массива (сумма, минимум, максимум и т.д.)
      // forEach - выполнить какое-то действие (при этом нам не нужен новый массив)
      
      // получить массив объектов {name: '...', age: 15}, только девочек
      const females = cats1
        .filter((c) => c.gender === 'female')
        // так как возвращаем объект оборачиваем его в круглые скобки
        .map((c) => ({
          name: c.name,
          age: c.age,
        }));
      
      console.log(females);

      const cats2 = [
        {
          name: 'Sima',
          age: 10,
          gender: 'female',
        },
        {
          name: 'Alisa',
          age: 5,
          gender: 'female',
        },
        {
          name: 'Kasper',
          age: 9,
          gender: 'male',
        },
        {
          name: 'Marusya',
          age: 15,
          gender: 'female',
        },
      ];
      
      // filter - [🙂, 🙂, 😟] => [🙂, 🙂]
      // map - [🙂, 🙂, 🙂] => [😟, 😟, 😟]
      // reduce - [🙂, 🙂, 😟] => 😟 либо 10 либо что-то одно единственное
      // forEach - [🙂, 🙂, 😟] => undefined
      
      // если массив numbers пустой
      // const sum = numbers.reduce((acc, el) => acc + el, 0)
      // const product = numbers.reduce((acc, el) => acc * el, 1)
      
      // вывести на экран самого молодого котика
      // const youngCat = cats.reduce((acc, cat) => {
      //   if (acc === undefined) {
      //     return cat;
      //   } else if (cat.age < acc.age) {
      //     return cat;
      //   } else {
      //     return acc;
      //   }
      // }, undefined);
      
      const youngCat = cats2.reduce(
        (acc, cat) => (acc === undefined ? cat : cat.age < acc.age ? cat : acc),
        undefined
      );
      
      console.log(youngCat);
      
      // 1: acc = undefined, cat = { name: 'Sima', age: 10, ... }, return { name: 'Sima', age: 10, ... }
      // 2: acc = { name: 'Sima', age: 10, ... }, cat = { name: 'Alisa', age: 5, ... }
      // 3: acc = { name: 'Alisa', age: 5, ... }, cat = { name: 'Kasper', age: 9, ... }
      // 4: acc = { name: 'Alisa', age: 5, ... }, cat = { name: 'Marusya', age: 15, ... }
      // acc = { name: 'Alisa', age: 5, ... }