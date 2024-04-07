// const nn = ml5.neuralNetwork({ task: 'classification', debug: true });

const options = {
    task: 'classification',
    debug: true,
    layers: [
        {
            type: 'dense',
            units: 16,
            activation: 'relu',
        }, {
            type: 'dense',
            units: 16,
            activation: 'relu',
        },
        {
            type: 'dense',
            activation: 'softmax',
        },
    ]
}

const trainingOptions = {
    epochs: 32,
    learningRate: 0.2,
    hiddenUnits: 16,
}

const nn = ml5.neuralNetwork(options);

const directories = [
    './training_data/converted_data/hand_far_away_converted',
    './training_data/converted_data/hand_point_converted'
];

const numFiles = 30;

function shuffleArray(array) {
    array.sort(() => (Math.random() - 0.5))

    // for (let i = array.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [array[i], array[j]] = [array[j], array[i]];
    // }
    console.log(array);
}

let totalData = [];
// let trainingData = [];
// let testingData = [];


directories.forEach((dir, index) => {
    // Define the label based on the directory
    const label = index === 0 ? 'hand_far_away' : 'hand_point';

    for (let i = 1; i <= numFiles; i++) {
        const filePath = `${dir}/${label}_converted_data_${i}.json`;

        fetch(filePath)
            .then(response => response.json())
            .then(data => {
                totalData.push({ data: data, label: label });
            })
            .catch(error => console.error('Error:', error));
    }
    console.log(totalData);

});

window.startTraining = async function() {

    await Promise.all(totalData);

    shuffleArray(totalData);

    const trainingData = totalData.slice(0, Math.floor(totalData.length * 0.8));
    const testingData = totalData.slice(Math.floor(totalData.length * 0.8));

    console.log(trainingData);
    console.log(testingData);

    trainingData.forEach(({ data, label }) => {
        nn.addData(data, { label: label });
    });

    nn.normalizeData();
    nn.train(trainingOptions, () => finishedTraining(testingData));
}

async function finishedTraining(testingData) {
    console.log("Finished training!");
    // await makePrediction();
    await testModel(testingData);
}

async function testModel(testingData) {
    const accuracyDiv = document.getElementById('accuracy');

    accuracyDiv.textContent = '';

    let correctPredictions = 0;

    for (let i = 0; i < testingData.length; i++) {
        const { data, label } = testingData[i];
        const prediction = await nn.classify(data);
        console.log(prediction);
        if (prediction[0].label === label) {
            correctPredictions++;
        }
    }

    let accuracy = (correctPredictions / testingData.length) * 100 + '%';
    console.log(`Accuracy: ${accuracy}`);

    let p = document.createElement('p');
    p.textContent = `Accuracy: ${accuracy}`;
    accuracyDiv.appendChild(p);

    nn.save("model", () => console.log("model was saved!"));
}

async function makePrediction() {
    const results = await nn.classify([
        0.7454570531845093,
        1.2891838550567627,
        8.126132229335781e-7,
        0.656182050704956,
        1.224424958229065,
        -0.05072588101029396,
        0.5892505049705505,
        1.1219850778579712,
        -0.08721882849931717,
        0.5410751104354858,
        1.0295480489730835,
        -0.11845032125711441,
        0.48985767364501953,
        0.9544975161552429,
        -0.1510983556509018,
        0.6663125157356262,
        0.9441342353820801,
        -0.08060827106237411,
        0.6381768584251404,
        0.7900360226631165,
        -0.1285010576248169,
        0.6221444606781006,
        0.695624828338623,
        -0.16202600300312042,
        0.6119738221168518,
        0.6118531823158264,
        -0.18509548902511597,
        0.7351902723312378,
        0.9382030367851257,
        -0.08829810470342636,
        0.7302329540252686,
        0.7590513229370117,
        -0.13254833221435547,
        0.7251426577568054,
        0.6435176134109497,
        -0.165263831615448,
        0.7218030691146851,
        0.5453842878341675,
        -0.18833331763744354,
        0.797929048538208,
        0.9708293676376343,
        -0.10043993592262268,
        0.8222500085830688,
        0.8056062459945679,
        -0.14543217420578003,
        0.8291454911231995,
        0.6966402530670166,
        -0.17430274188518524,
        0.8308569192886353,
        0.6010880470275879,
        -0.1934598684310913,
        0.8541948795318604,
        1.0322000980377197,
        -0.11534740775823593,
        0.8979452252388,
        0.9172228574752808,
        -0.15689943730831146,
        0.9168943166732788,
        0.8328162431716919,
        -0.17524710297584534,
        0.9280868768692017,
        0.7535721063613892,
        -0.18630968034267426
    ]);
    console.log(results);
    // nn.save("model", () => console.log("model was saved!"));
}



// const files = {
//     hand_far_away: [
//         './training_data/converted_data/hand_far_away_converted/hand_far_away_converted_data_1.json',
//         './training_data/converted_data/hand_far_away_converted/hand_far_away_converted_data_2.json',
//         './training_data/converted_data/hand_far_away_converted/hand_far_away_converted_data_3.json',
//         './training_data/converted_data/hand_far_away_converted/hand_far_away_converted_data_4.json',
//         './training_data/converted_data/hand_far_away_converted/hand_far_away_converted_data_5.json',
//         './training_data/converted_data/hand_far_away_converted/hand_far_away_converted_data_6.json',
//         './training_data/converted_data/hand_far_away_converted/hand_far_away_converted_data_7.json'
//     ],
//     point: [
//         './training_data/converted_data/hand_point_converted/hand_point_converted_data_1.json',
//         './training_data/converted_data/hand_point_converted/hand_point_converted_data_2.json',
//         './training_data/converted_data/hand_point_converted/hand_point_converted_data_3.json',
//         './training_data/converted_data/hand_point_converted/hand_point_converted_data_4.json',
//         './training_data/converted_data/hand_point_converted/hand_point_converted_data_5.json',
//         './training_data/converted_data/hand_point_converted/hand_point_converted_data_6.json',
//         './training_data/converted_data/hand_point_converted/hand_point_converted_data_7.json'
//     ]
// };
//