

let speedSlider = document.getElementById("speedSlider");
let delay = 1000;


// This listens to the event when a users increases or decreses the speed of the range slider.
// this function works on onchange event
function sortSpeed() {
    delay = 1720 - parseInt(speedSlider.value);
    console.log(delay);
   
}



// This listens to the event that gives the size of new array that is choosed by the user using range slider.
let arraySizeSlider = document.getElementById("arrSize");



function swap(element1, element2) {
    return new Promise((resolve, reject) => {


        window.requestAnimationFrame(() => {

            setTimeout(() => {
                let temp = element1.style.height;
                element1.style.height = element2.style.height;
                element2.style.height = temp;
                temp = element1.innerHTML;
                element1.innerHTML = element2.innerHTML;
                element2.innerHTML = temp;
                // arrayContainer.insertBefore(element2,element1);
                resolve();
            }, delay) // sortSpeed function gives the delay by taking input from the speed slider.
        });
    });
}

async function bubbleSort() {
    let bars = document.querySelectorAll(".bar");
    sortBtn.disabled = true;
    arraySizeSlider.disabled = true;
    select.disabled = true;
    for (let i = 0; i < bars.length; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.backgroundColor = "Red";

            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("3 seconds over");
                }, delay); //sortSpeed function gives the delay by taking input from the speed slider.
            })



            let value1 = Number(bars[j].innerHTML);
            let value2 = Number(bars[j + 1].innerHTML);
            if (value1 > value2) {
                await swap(bars[j], bars[j + 1]);

                bars = document.querySelectorAll(".bar");
            }

            bars[j].style.backgroundColor = "black";
            bars[j + 1].style.backgroundColor = "black";
        }
        bars[bars.length - i - 1].style.backgroundColor = "green";
    }
    sortBtn.disabled = false;
    arraySizeSlider.disabled = false;
    select.disabled = false;
}

