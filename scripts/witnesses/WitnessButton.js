const contentTarget = document.querySelector(".filter__witnesses")
const eventHub=document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
    <button id="witnessStatements">Witness Statements</button>
    <button id="criminalButton">Criminal List</button>

    `
}

export const witnessButton = () => {
    render()
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

eventHub.addEventListener("click", clickEvent=>{
    if (clickEvent.target.id==="criminalButton"){
        console.log("criminal button was clicked")
        const myEvent=new CustomEvent("CriminalButtonClicked", {
            detail:{
                displayWitnesses:clickEvent.target.id
            } 
        })
        eventHub.dispatchEvent(myEvent)

    }
    // console.log("clicked on the witnesses")
})




