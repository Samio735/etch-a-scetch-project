const  container = document.querySelector('.container')

ndivs = 16


function createDiv(clsname){
    const div = document.createElement("div")
    div.className = clsname
    return div
}

function start(){

    for( let i = 1 ; i< ndivs**2;i++){
        if(i % ndivs === 0) {
            container.appendChild(createDiv("small-first"))
        }
        else{
            container.appendChild(createDiv("small"))
        }

}
}

start()
