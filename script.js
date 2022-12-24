const  container = document.querySelector('.container')

ndivs = 16


function createDiv(clsname){
    const div = document.createElement("div")
    div.className = clsname
    div.addEventListener("click", () => {
        div.setAttribute("style","background-color:#ff2563")
    })
    return div
}



function start(){
    let style = "    grid-template-columns: "
    
    while ( container.hasChildNodes()){
        container.removeChild(container.firstChild)
}

    for( let i =0 ; i< ndivs;i++){
        style = style + " 1fr"
        console.log(style)
}
   container.setAttribute("style", style )
    for( let i =0 ; i< ndivs**2;i++){
        container.appendChild(createDiv("small"))

}
}

const btn = document.querySelector(".change")
btn.addEventListener("click", () => {
    ndivs = prompt("enter number of squares per side")
    start()
})
 

 start()

