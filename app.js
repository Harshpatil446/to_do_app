let list_element = document.querySelector(".add-button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul")

list_element.addEventListener("click", () => {
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);
    inp.value = "";
})