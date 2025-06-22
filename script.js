// function takrorlanganHarf(harf) {
//     const top = new Set()
//     for(const a of harf) {
//         if (top.has(a)) {
//             return a
//         }
//         top.add(a)
//     }
//     return null
// }

// console.log(takrorlanganHarf('javascript'));
// console.log(takrorlanganHarf('frontend'));
// console.log(takrorlanganHarf('python'));

// let arr = [
//     {name: 'Shuxrat', age: 56},
//     {name: 'Abdurahmon', age: 24},
//     {name: 'Rovshan', age: 42},
// ]

// arr.sort((a,b) => a.age - b.age)

// console.log(arr);



// for (let i = 1; i <= 30; i++ ) {
//     if ( i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if ( i % 3 === 0) {
//         console.log("Fizz");
//     } else if ( i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }


// let massiv = [1, 2, 3, 7, 12,]

// let qiymat = 7

// let indeks = massiv.indexOf(qiymat)

// if (indeks !== -1) {
//     console.log(indeks);
// } else {
//     console.log(-1);
// }

// function palindrome(string) {
//     return string === string.split('').reverse().join('')
// }

// console.log(palindrome("madam"));
// console.log(palindrome("asdf"));



// function half() {
//     let arr = [1, 2, 3, 4, 5, 6]

//     let yarmi = Math.floor(arr.length / 2)

//     let arr1 = arr.slice(0, yarmi)
//     let arr2 = arr.slice(yarmi)

//     return [arr1, arr2]
// }

// console.log(half());





// function uzunSoz(gap) {
//   return  gap 
//   .split(' ')
//   .reduce((uzunligi, jami) => jami.length > uzunligi.length ? jami : uzunligi, "")
// }

// console.log(uzunSoz("I love programming in JavaScript"));
// console.log(uzunSoz("Learning JavaScript is fun"));



// let arr = [1, 2, 3, 4]

// let ar = arr.map( num => num * 2)

// console.log(ar);




// let arr1 = [1, 2, 3]

// let arr2 = [3, 4, 5]

// let aniqlash = arr1.filter( x => arr2.includes(x))

// let natija = [...arr1.filter( x => !aniqlash.includes(x)), 
//     ...arr2.filter( x => !aniqlash.includes(x))
// ]

// console.log(natija);


// let N = 10 

// let fib = []

// for (let i = 0; i < N; i++) {
//     if (i === 0) {
//         fib.push(0)
//     } else if (i === 1) {
//         fib.push(1)
//     } else {
//         fib.push( fib[ i - 1] + fib[ i - 2])
//     }
// }

// console.log(fib);



// let input = "programming"

// let res = []

// input.split('').forEach(char => {
//     if (!res.includes(char)) {
//         res.push(char)
//     }
// })

// console.log(res.join(''));


// let ar = [1,[2, 3, [4, [5]]]]

// let arr = ar.flat(Infinity)

// console.log(arr);


// function fac(n) {
//     if ( n === 0 || n === 1) {
//         return 1
//     } else {
//         return n * fac(n-1)
//     }
// }

// let N = 12

// console.log(fac(N));


// let arr = [5, 5, 5, 5, 5, 5]

// let count = arr.reduce((acc, val) => {
//     acc[val] = (acc[val] || 0) + 1
//     return acc
// }, {})

// console.log(count);


// const data = [
//     {type: 'fruit', name: 'apple'},
//     {type: 'fruit', name: 'banana'},
//     {type: 'vegetable', name: 'carrot'},
//     {type: 'vegetable', name: 'onion'},
// ]

// const group = {}

// data.forEach( item => {
//     const { type , name} = item
//     if (!group[type]) {
//         group[type] = []
//     }
//     group[type].push(name)
// })

// console.log(group);


// function fn(arr) {
//     return arr.reduce((sum, val) => sum + val, 0) / arr.length
// }
// console.log(fn([100, 200, 300]));


// let data = '{"name": "Jhon", "age": 30}'

// let obj = JSON.parse(data)

// let keys  = Object.keys(obj)

// console.log(keys);




// function formatText(text,callback) {
//     return callback(text)
// }

// console.log(formatText('javascript is fun', text => text.toUpperCase()));



// function getData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data keldi")
//         }, 5000)
//     })
// }

// getData().then(data => console.log(data))



// async function getUser(name) {
//     try {
//         const responce = await fetch(name)
//         const data = await responce.json()
//         console.log(data.name);
//     } catch (error) {
//         console.error(error)
//     }

// }

// getUser('https://jsonplaceholder.typicode.com/users/7')
