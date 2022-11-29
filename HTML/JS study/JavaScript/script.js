// //Присвоїли значення а=5
// let a = 5
// //Вивели це значення
// console.log(a)
// //запускажмо Проміс
// let p = new Promise(function(resolve,reject){
//     //Очікуємо на присвоєння а новому значенню
//     setTimeout(() => {
//         resolve(a=500)
//     },  2000);
// });

// //Після присвоєння виконуємо функцію
// p.then(function(){
//     console.log(a)
// })
let a;

const foo = () => console.log('First')
const bar = () => setTimeout(() => console.log('Second'), 500)
const baz = () => console.log('Third')

bar()
foo()
baz()