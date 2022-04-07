let arrayContainer = document.getElementById("arrayContainer");
let selectedOption = document.getElementById("select");


let margin_size = 0;
function generateArray(size = 5) {

    for (i = 1; i <= size; i++) {
        let value = Math.ceil(Math.random() * 100);
        let element = document.createElement("div");
        element.classList.add("bar");
        element.innerHTML = value;
        element.style = " margin:0% " + margin_size + "%  ; width:" + (100 / size - (4 * margin_size)) + "%;";//this line is the heart of our program.

        margin_size = 0.1; 
        element.style.height = `${value * 3.1}px`;
        arrayContainer.appendChild(element);

    }

}


let arraySize = document.getElementById("arrSize");

 function changeBars() {
    arrayContainer.innerHTML = "";
    generateArray(arraySize.value);
    console.log("Size of arary is: ",arraySize.value)
}



let select = document.getElementById("select");
select.addEventListener("input", () => {
    console.log(select.value)
});

let sortBtn = document.getElementById("sortBtn");
sortBtn.addEventListener("click", ()=>{
    if(select.value == "Bubble Sort"){
        bubbleSort();
    }
    else if(select.value== "Selection Sort"){
        selectionSort();
    }
    else if(select.value== "Insertion Sort"){
        insertionSort();
    }
});


generateArray();