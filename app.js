
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

  ul.appendChild(li);

  inp.value = "";

  let nav_btn = document.querySelector(".nav-button1 button");
  let nav_btn2 = document.querySelector(".nav-button2 button");
  let nav_btn3 = document.querySelector(".nav-button3 button");
  nav_btn3.classList.add("active-btn");


  nav_btn.addEventListener("click", () => {
    if (checkbox.checked) {
      li.style.display = "none";
    } else {
      li.style.display = "flex";
    }

  });

  nav_btn2.addEventListener("click", () => {
    li.style.display = "none";
    if (checkbox.checked) {
      li.style.display = "flex";
    } else {
      li.style.display = "none";
    }
  });

  nav_btn3.addEventListener("click", () => {
    li.style.display = "flex";
  })

});
