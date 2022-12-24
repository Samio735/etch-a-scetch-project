const  container = document.querySelector('.container')
let type = "default"
ndivs = 16


function createDiv(clsname){
    const div = document.createElement("div")
    div.className = clsname
    div.addEventListener("click", () => {
    setColor(div,type)
    })
    return div
}
function setColor(div,type){
    if (type === "random"){
    div.setAttribute("style","background-color:" + `rgb(${randomnb()}, ${randomnb()}, ${randomnb()})`)
}
if (type === "default"){
    div.setAttribute("style","background-color:" + `rgb(0, 0, 0)`)
}
}
function randomnb(){
    rnd =  Math.floor( Math.random()*256 )
    console.log(rnd)
    return rnd
}
randomnb()

function start(){
    
    let style = "    grid-template-columns: "
    
    while ( container.hasChildNodes()){
        container.removeChild(container.firstChild)
}

    for( let i =0 ; i< ndivs;i++){
        style = style + " 1fr"
    
}
   container.setAttribute("style", style )
    for( let i =0 ; i< ndivs**2;i++){
        container.appendChild(createDiv("small"))

}
}

const btn = document.querySelector(".change")
btn.addEventListener("click", () => {
    ndivs = prompt("enter number of squares per side")
    start(type)
})

 
const btnrnd = document.querySelector(".random")
btnrnd.addEventListener("click", () => {
    type = "random"
    
})
 
const btndfl = document.querySelector(".default")
btndfl.addEventListener("click", () => {
    type = "default"
    
})
 

 start(type)

