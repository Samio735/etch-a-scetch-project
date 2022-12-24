const  container = document.querySelector('.container')

ndivs = 16


function createDiv(clsname){
    const div = document.createElement("div")
    div.className = clsname
    return div
}
let style = "    grid-template-columns: "
function start(){
    for( let i =0 ; i< ndivs;i++){
        style = style + " 1fr"
        console.log(style)
}
   container.setAttribute("style", style )
    for( let i =0 ; i< ndivs**2;i++){
        container.appendChild(createDiv("small"))

}
}


 ndivs = prompt("enter number of squares per side")

 start()

