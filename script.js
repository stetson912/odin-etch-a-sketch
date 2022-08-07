/*
    -- goal of project --
        -- be able to enter a number from 16 to 100 to create a square grid of divs to act as the etch-a-sketch canvas.

        -- utilize prompt to obtain the number of squares for the grid. 
        -- add logic for prompt to a button that creates the grid when clicked
        -- when mouseover event occurs, change color of div from white to black. 
        -- ex credid for making the square a random color. 
        -- consider making the event a click event or mouse button down event? research the latter.

    -- pseudocode --
    -insert button at top of page.
        prompt user for a number
        validate that input is a number between 16 and 100
    -add listener to button to create grid when clicked
        attatch createGrid(num) function to run when clicked
    -createGrid(num) logic
        
        if valid, create elements
        add event listeners to elements to change background color on mouseover
        insert elements into grid-container
*/

// functions

function getRandomColor() {
    let letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function draw(square){
    let colorsCheck = document.querySelector('.colors').checked
    if(colorsCheck){
    let color = getRandomColor()
    console.log(color)
    square.style.backgroundColor = color 
    return
    }

    square.style.backgroundColor = '#595757'
}



function createGrid(num) {
    // div container is 640px square
    const container = document.querySelector('.grid-container')

    // remove all children to remake grid
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
    container.style.gridTemplateColumns = `repeat(${num},1fr)`
    container.style.gridTemplateRows = `repeat(${num},1fr)`
    const squareSize = 640/num 
    
    //create squares
    let square = null
    let i = 1
    while(i <= num*num){
        square = document.createElement("div")
        square.classList.add("square")
        square.style.backgroundColor = "#eeeeee"
        square.style.width= squareSize
        square.style.height= squareSize
        container.appendChild(square)
        i++
    }
    const squares = document.querySelectorAll('.square')
    squares.forEach(square =>{
        square.addEventListener('mouseover',()=>{
            draw(square)
        })
    })
}

// start of program logic
const body = document.querySelector('body')
const gridContainer = document.querySelector('.grid-container')

const gridButton = document.createElement("button")
gridButton.classList.add("btn")
gridButton.innerText = "Create Grid"
body.insertBefore(gridButton,gridContainer)
gridButton.addEventListener('click', (e) =>{
    let gridSize = parseInt(prompt("Enter your desired grid size between 16 and 100"))
    if(!(gridSize >= 16) || !(gridSize <=100)){
        alert("Please enter a nubmer between 16 and 100.")
        return
    }
    if(gridSize >=16 && gridSize <= 100){
        createGrid(gridSize);
    }

})
