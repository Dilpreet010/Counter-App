const countValue = document.querySelector("#counter");
const decrement = () => {
    //getting the value from UI
    let value = parseInt(countValue.innerHTML);
    //update the value
    value = value-1;
    //Set the value onto UI
    countValue.innerHTML = value;
}
const increment = () => {
    //getting the value from UI
    let value = parseInt(countValue.innerHTML);
    //update the value
    value = value+1;
    //Set the value onto UI
    countValue.innerHTML = value;
}