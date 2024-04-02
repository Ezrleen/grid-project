const container = document.querySelector(".container");
const container1 = document.querySelector(".container1");
const button = document.createElement("button");
const color = document.createElement("input");
const reset = document.createElement("button");
const Confirm = document.createElement("button");
const input = document.createElement("input");
const p = document.createElement("p");
let val = ""; 
p.innerText="50"
input.type="range"
input.min = "10";
input.max = "100";
button.innerText = "Change value";
Confirm.innerText = "Change color";
reset.innerText = "Reset";
reset.style.width="90px"
color.type="color"

button.addEventListener("click",setgrid)
input.addEventListener('input',()=>{
    p.innerText = input.value;

})
reset.classList.add("AllButtons");
button.classList.add("AllButtons");
Confirm.classList.add("AllButtons");
color.setAttribute("id", "color");
color.style.width="70px"
color.style.height="70px"




container1.appendChild(button)
container1.appendChild(input)
container1.appendChild(p)
container1.appendChild(reset)
container1.appendChild(color)
container1.appendChild(Confirm)
container1.style.display = "flex";
container1.style.justifyContent = "center";
container1.style.marginBottom = "15px";
container1.style.gap="15px"
Confirm.addEventListener('click',()=>{
    val = document.getElementById("color").value;
    console.log(val)

})
const AllButtons = document.querySelectorAll(".AllButtons");
AllButtons.forEach((btn) => {
    
    btn.style.fontFamily="Raleway"
    btn.style.border="Edu NSW ACT Foundation"
    

});
reset.addEventListener('click',()=>{
    container.innerHTML = "";
    
})
    
    


AllButtons.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.1, 1.1)";

    
  });

  btn.addEventListener("mouseout", () => {
    btn.style.transform = "scale(1, 1)";
  });
});

container.style.border = "1px yellow solid";
container.style.display = "flex";
container.style.width = "800px";
container.style.height = "800px";
container.style.flexWrap = "wrap";
container.style.backgroundColor = "gray";

container.style.marginLeft = "auto";
container.style.marginRight = "auto";
 let isDrawing = false;
function setgrid(){
    const size_grid = input.value;

    container.innerHTML = "";
    for (let i = 0; i < size_grid; i++) {
        for (let j = 0; j < size_grid; j++) {
            const newDiv = document.createElement('div');   
            newDiv.style.width = `calc(800px / ${size_grid} - 2px )`;
            newDiv.style.height = `calc(800px / ${size_grid} - 2px)`;
            newDiv.style.backgroundColor = "white";
            newDiv.style.border = "1px solid blue";
            newDiv.addEventListener('mouseover',Click_left_toChange)//*drawing only when mouse moving + leftbutton clicked)*/


            container.appendChild(newDiv);
    }
    
}}
 
function Click_left_toChange(e) {
    
    container.addEventListener('mousedown', () => { //* test if the left mouse button is clicked in the grid)/*
        isDrawing = true;
    });
    container.addEventListener('mouseup', () => { //* test if the left mouse button is  not clicked in the grid)/*
        isDrawing = false;
    });
    if (isDrawing) {
        console.log(e.target)
        e.target.style.backgroundColor = `${val}`; //* if clicked the e.target which is the div is changing color)*/

    }
}

