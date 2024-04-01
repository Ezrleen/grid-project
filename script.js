const container = document.querySelector(".container");
const container1 = document.querySelector(".container1");
const button = document.createElement("button");
const input = document.createElement("input");
const p = document.createElement("p");
p.innerText="50"
input.type="range"
input.min = "10";
input.max = "100";
button.innerText = "Change value";
button.addEventListener("click",setgrid)
input.addEventListener('input',()=>{
    p.innerText = input.value;

})

container1.appendChild(button)
container1.appendChild(input)
container1.appendChild(p)

container1.style.display = "flex";
container1.style.justifyContent = "center";
container1.style.marginBottom = "15px";






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
            newDiv.addEventListener('mouseover',test)//*drawing only when mouse moving + leftbutton clicked)*/


            container.appendChild(newDiv);
    }
    
}}
 
function test(e) {
    
    container.addEventListener('mousedown', () => { //* test if the left mouse button is clicked in the grid)/*
        isDrawing = true;
    });
    container.addEventListener('mouseup', () => { //* test if the left mouse button is  not clicked in the grid)/*
        isDrawing = false;
    });
    if (isDrawing) {
        console.log(e.target)
        e.target.style.backgroundColor = "red"; //* if clicked the e.target which is the div is changing color)*/

    }
}
