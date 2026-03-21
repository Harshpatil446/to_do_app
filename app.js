
let list_element = document.querySelector(".add-button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul")

list_element.addEventListener("click", () => {
   let li = document.createElement("li");

   let checkbox = document.createElement("input");
   checkbox.type = "checkbox"
   checkbox.classList.add("check-box");

   let span = document.createElement("span");
   span.innerText = inp.value;
   span.classList.add("task");

   let span2 = document.createElement("span");
   span2.classList.add("del-icon");


   let delBtn = document.createElement("i");
   delBtn.classList.add("delete");

   delBtn.innerHTML = '<i class="fa-solid fa-x"></i>';

   let line = document.createElement("div");
   line.classList.add("line2");

   delBtn.addEventListener("click", () => {
    li.remove();
});

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    span.style.textDecoration = "line-through";
  } else {
    span.style.textDecoration = "none";
  }
});

   span2.appendChild(delBtn);
   li.appendChild(checkbox);
   li.appendChild(span);
   li.appendChild(span2);

   ul .appendChild(li);

   inp.value = "";
});
