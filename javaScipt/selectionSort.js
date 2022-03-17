
function swapSelctionSort(element1, element2) {
    return new Promise((resolve, reject) => {

        window.requestAnimationFrame(() => {
            setTimeout(() => {
                let temp = element1.style.height;
                element1.style.height = element2.style.height;
                element2.style.height = temp;
                temp = element1.innerHTML;
                element1.innerHTML = element2.innerHTML;
                element2.innerHTML = temp;


                resolve();
            }, delay - 100)
        });
    });
}

async function selectionSort() {
    let bars = document.querySelectorAll(".bar");

    select.disabled = true;
    sortBtn.disabled = true;
    arraySizeSlider.disabled = true;

    for (let i = 0; i < bars.length; i++) {
        let min = i;
        let prevMin = i;
        bars[i].style.backgroundColor = "blue"; //this will show initall minimum

        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, delay);
        });


        for (let j = i + 1; j < bars.length; j++) {
            
            bars[j].style.backgroundColor = "red";
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve();
                }, delay);
            });

            let value1 = Number(bars[j].innerHTML);
            let value2 = Number(bars[min].innerHTML);
            
            if (value1 < value2) {
                prevMin = min;
                min = j;
                bars[min].style.backgroundColor = "blue";
                bars[prevMin].style.backgroundColor = "black";
            } else {

                bars[j].style.backgroundColor = "black";
            }
            // bars[j].style.backgroundColor = "black";
            

        }

        if (min != i) {
            bars[i].style.backgroundColor = "red";
            bars[min].style.backgroundColor = "red";
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve();
                }, delay);
            });
            await swap(bars[i], bars[min]);
            bars[i].style.backgroundColor = "black";
            bars[min].style.backgroundColor = "black";
            bars = document.querySelectorAll(".bar");
        }
        
        
        
        
        
        bars[i].style.backgroundColor = "green";
        
    }
    select.disabled = false;
    sortBtn.disabled = false;
    arraySizeSlider.disabled = false;


}