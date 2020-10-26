const contentTarget = document.querySelector(".filter__witnesses")
const eventHub=document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
    <button id="witnessStatements">Witness Statements</button>

    `
}
eventHub.addEventListener("click", clickEvent=>{
    if (clickEvent.target.id==="witnessStatements"){
        const myEvent=new CustomEvent("WitnessStatementClicked", {
            detail:{
                displayWitnesses:clickEvent.target.id
            } 
        })
        eventHub.dispatchEvent(myEvent)

    }
    // console.log("clicked on the witnesses")
})


export const witnessButton = () => {
    render()
}

