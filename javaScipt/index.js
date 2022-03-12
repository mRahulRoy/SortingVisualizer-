let arrayContainer = document.getElementById("arrayContainer");
let margin_size = 0;
function generateArray(size = 20) {

    for (i = 1; i <= size; i++) {
        let value = Math.ceil(Math.random() * 100);
        let element = document.createElement("div");
        element.classList.add("bar");
        element.innerHTML = value;


       
        element.style= " margin:0% " + margin_size + "%  ; width:" + (100/size-(4*margin_size)) + "%;";
        margin_size = 0.1; //this line is the heart of our program.


        // element.style.transform = `translateX(${i * 24}px)`;
        element.style.height = `${value * 3.1}px`;
        arrayContainer.appendChild(element);

    }
    // console.log(arrayContainer.offsetWidth);//displays the width of the array conatainer
    // console.log("size of array ", size);
    // console.log("ofset width is ", document.getElementsByClassName("bar")[0].offsetWidth);
}

function getArraySize(value) {
    arrayContainer.innerHTML = "";
    generateArray(value);
    windowWidthChange();
}
generateArray();
window.addEventListener("resize", windowWidthChange);



function windowWidthChange() {
    let windowWidth = document.documentElement.clientWidth;
    let windowHeight = document.documentElement.clientHeight;
    // console.log("width is : ", windowWidth);
    // console.log("height is : ", windowHeight);

    // if (windowWidth < 457) {//849
    //     let arrSize = document.getElementById("arrSize").value;
    //     let bars = document.getElementsByClassName("bar");
    //     for (i = 0; i < arrSize; i++) {
    //         bars[i].style.width = "5px";
    //         bars[i].style.transform = `translateX(${i * 8}px)`;

    //         console.log(arrSize);
    //     }
    // }
}