// insert element statically at the 6 position of the array and move the array elements after 6 position to the new position in array.

let arr = [10, 20, 30, 40, 50, 60]

let newvalue = 12
let newposition = 2;


for (let i = arr.length - 1; i >= 0; i--) {
    if (i >= newposition) {
        arr[i + 1] = arr[i]

        if (i === newposition) {
            arr[i] = newvalue
        }
    }



    console.log(arr[i]);
}

// insert element dynamically at the 6 position of the array and move the array elements after 6 position to the new position in array.



console.log('dynamically');


function changeValue() {

    const textValue = parseInt(document.getElementById('textValue').value);
    const position = parseInt(document.getElementById('position').value);
    const array = [60, 70, 80, 90, 100];


    for (let j = array.length - 1; j >= 0; j--) {
        if (j >= position) {
            array[j + 1] = array[j];

            if (j === position) {
                array[j] = textValue;
            }
        }

        console.log(array[j]);
    }
}


const jsArray = [6, 7, 8, 9, 0];

const newJsArray = jsArray.splice(0, 5)

console.log(newJsArray);
