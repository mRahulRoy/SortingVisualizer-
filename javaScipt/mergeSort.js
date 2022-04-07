let arr = document.querySelectorAll(".bar");
console.log("working")



function mergeSortedArray(arr,start,end)
{
    let mid =Math.floor( (start + end) / 2);
    let lenght1 = mid - start + 1;
    let lenght2 = end - mid;
    let arr1 = Array(lenght1);
    let arr2 = Array(lenght2);
    let mainIndex = start; //this start tell us like on which index value has to be placed. like if we have sorted the array till index 3 so now we have to put right values from the 4th index . i hope you understood.
    for (let i = 0; i < lenght1; i++)
    {
        arr1[i] = Number(arr[mainIndex++].innerHTML);
    }
    mainIndex = mid + 1;
    for (let i = 0; i < lenght2; i++)
    {
        arr2[i] = Number(arr[mainIndex++].innerHTML);
    }

    let i = 0, j = 0;
    mainIndex = start;
    while (i < lenght1 && j < lenght2)
    {
        if (arr1[i] < arr2[j])
        {
            arr[mainIndex++].innerHTML = Number(arr1[i++]);
        }
        else
        {
            arr[mainIndex++].innerHTML = Number(arr2[j++]);
        }
    }
    while (i < lenght1)
    {
        arr[mainIndex++].innerHTML = Number(arr1[i++]);
    }
    while (j < lenght2)
    {
        arr[mainIndex++].innerHTML = Number(arr2[j++]);
    }
}


async function merge(arr, start, end)
{
    if (start < end)
    {
        let mid =Math.floor( (start + end) / 2);
        arr[mid].style.backgroundColor = "red";
        merge(arr, start, mid);
        merge(arr, mid + 1, end);
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 5200);
        });  
        mergeSortedArray(arr, start, end);
    }
}

// merge(arr, 0, arr.length - 1);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i].innerHTML);
// }
