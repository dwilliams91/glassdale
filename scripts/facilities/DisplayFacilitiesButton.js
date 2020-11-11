// get content container and eventhub
const contentTarget=document.querySelector(".facility__button")
const eventhub=document.querySelector(".container")
// render a button
export const FacilitiesButton=()=>{
    contentTarget.innerHTML=render()

}
const render=()=>{
    return `<button id=FacilitiesButton>Facilities</button>`
}

// dispatch an event listener for the button
eventhub.addEventListener("click",click=>{
    if (click.target.id==="FacilitiesButton"){
        const FacilitiesButtonClicked= new CustomEvent("FacilitiesButtonClicked", {

        })
        eventhub.dispatchEvent(FacilitiesButtonClicked)
    }

})