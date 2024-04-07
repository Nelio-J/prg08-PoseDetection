export function convertArray(
    inputArray: { x: number; y: number; z: number }[]
) {
    const combinedArray = [];

    for (const obj of inputArray) {
        combinedArray.push(obj.x, obj.y, obj.z);
    }

    return combinedArray;
}
