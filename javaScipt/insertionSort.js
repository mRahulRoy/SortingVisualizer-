/*This algorithm performs insertion sort */
function swapInsertionSortElements(element1, element2) {
    return new Promise((resolve, reject) => {
        window.requestAnimationFrame(() => {//it is used to provide smooth animation.

            setTimeout(() => {
                /*These three lines are interchaning the values or the data written in it. */
                let temp = Number(element1.innerHTML);
                element1.innerHTML = Number(element2.innerHTML);
                element2.innerHTML = temp;
                /*These bottom three lines are interchanging the height with each other so that we can feel it like swaping the elements*/
                
                temp = element1.style.height;
                element1.style.height = element2.style.height;
                element2.style.height = temp;
                /*These three bottom lines are interChaning the background colour as we know  0th element will always be considered as the sorted one and we are represnting that by the green color and next element of it by light blue that represnts that it is going to compare itself with the elements present in its left and if that element is smaller than 0th then swapping will done and we will moving left until we did not reach at the exact position of the element in light blue color after reaching at its correct index then we will change its color to green that will happen after the swapping is done .*/
                temp = element1.style.backgroundColor;
                element1.style.backgroundColor = element2.style.backgroundColor;
                element2.style.backgroundColor = temp;

                resolve();
            }, delay) // sortSpeed function gives the delay by taking input from the speed slider.
        });
    });
}
async function insertionSort() {
    let bars = document.querySelectorAll(".bar");
    sortBtn.disabled = true;
    arraySizeSlider.disabled = true;
    select.disabled = true;
    for (let i = 1; i < bars.length; i++) {

        let temp = Number(bars[i].innerHTML);
        console.log("insertion sort is runing")

        /*Initially we are highlighting the sorted left part that is i-1 using green and highlighting the next element of it in light blue that represents a element that is going to be compared with the all the elements present at its left until it does not reaches at the right position*/

        bars[i - 1].style.backgroundColor = "green";
        bars[i].style.backgroundColor = "rgb(29,164,228)";

        /*Putting await here for the delay so that user can see the different colors like sorted elements are in left with the color green and element that will be compared to the elements present to its right are in light blue. delay or await is just for the intution and to show what actually is happening */

        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, delay);
        });
        let j = i - 1;
        while (j >= 0 && temp < Number(bars[j].innerHTML)) {
            /*swapping the two bars with some change in property like height ,color etc*/
            await swapInsertionSortElements(bars[j + 1], bars[j]);
            /*Putting a delay so that we can eaisly see that both the bars has been swaaped  */    
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve();
                }, delay);
            });
            j--;
        }
                
        bars[j + 1].innerHTML = temp;
        /*now that element we have seen so far in light blue colour has been reached to its correct index so we will simply change its color to green*/
        bars[j+1].style.backgroundColor = "green";
    }
    sortBtn.disabled = false;
    arraySizeSlider.disabled = false;
    select.disabled = false;
}


