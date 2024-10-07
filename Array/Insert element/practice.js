let array = [1, 2, 3, 4]

let position = 2;
let newValue = 10;

for (let i = array.length - 1; i >= 0; i--) {
    if (i >= position) {
        array[i + 1] = array[i]
        if (i === position) {
            array[i] = newValue;
        }

    }
    console.log(array[i]);

}
console.log('Dynamically');



let changeValue = () => {
    let Position = parseInt(document.getElementById('position').value)
    let textValue = parseInt(document.getElementById('textValue').value)
    let arr = [22, 23, 24, 25]
    for (let j = arr.length - 1; j >= 0; j--) {
        if (j >= Position) {
            arr[j + 1] = arr[j];
            if (j === Position) {
                arr[j] = textValue
            }
        }

        console.log(arr[j]);
    }
}