import kNear from "./knear.js"

const k = 3
const machine = new kNear(k);

machine.learn([6, 5, 9], 'cat')
machine.learn([12, 20, 19], 'dog')
machine.learn([18, 9.2, 8.1], 'cat')
machine.learn([20.1, 17, 15.5], 'dog')
machine.learn([17, 9.1, 9], 'cat')
machine.learn([23.5, 20, 20], 'dog')
machine.learn([16, 9.0, 10], 'cat')
machine.learn([21, 16.7, 16], 'dog')

let prediction = machine.classify([12,8,8])
console.log(`I think this is a ${prediction}`)