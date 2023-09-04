let container = document.querySelector(".container .elements");

for (let i = 0  ; i<16  ; i++){
    let grid_block = document.createElement("div");
    grid_block.classList.add(".grid_block");
    container.appendChild(grid_block);
    for (let j = 0  ; j<16  ; j++){
        let grid_element = document.createElement("div");
        grid_element.classList.add("grid_element")
        grid_block.appendChild(grid_element);
        grid_element.addEventListener("mouseenter", () => {
          grid_element.style.backgroundColor = "blue";
        });
    }
}


let clear_btn = document.querySelector(".clear_btn");
clear_btn.addEventListener("click", () => {
  document.querySelectorAll("grid_element").forEach((element) => {
    element.style.backgroundColor = "white";
  });
});