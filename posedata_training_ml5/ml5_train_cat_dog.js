const nn = ml5.neuralNetwork({ task: 'classification', debug: true })
nn.addData([18,9.2,8.1,2,1], {label:"cat"})
nn.addData([20.1,17,15.5,5,0], {label:"dog"})
nn.addData([17,9.1,9,1.95,1], {label:"cat"})
nn.addData([23.5,20,20,6.2,0], {label:"dog"})
nn.addData([16,9.0,10,2.1,1], {label:"cat"})
nn.addData([21,16.7,16,3.3,0], {label:"dog"})
// rest of the data..
// ...

function startTraining() {
    nn.normalizeData()
    nn.train({ epochs: 20 }, () => finishedTraining())
}
async function finishedTraining(){
    console.log("Finished training!")
    await makePrediction()
}
async function makePrediction() {
    const results = await nn.classify([20,11,10,3,1]) // dit is een pose uit mediapipe
    console.log(results)
    nn.save("model", () => console.log("model was saved!"))
}

// nn.normalizeData()
// nn.train({ epochs: 20 }, () => finishedTraining())
// async function finishedTraining(){
//     const results = await nn.classify([20,11,10,3,1])
//     console.log(results)
// }