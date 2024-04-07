// convert_data.js
import fs from 'fs';
import data from './collected_data/hand_point/hand_point_7.json' assert { type: 'json' };
console.log(data);

function convertArray(inputArray) {
    const combinedArray = [];

    for (const obj of inputArray) {
        combinedArray.push(obj.x, obj.y, obj.z);
    }

    return combinedArray;
}

const resultArray = convertArray(data);

console.log(resultArray);

const jsonString = JSON.stringify(resultArray);

fs.writeFile('./converted_data/hand_point_converted/hand_point_converted_data_7.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err);
    } else {
        console.log('Successfully wrote file');
    }
});
