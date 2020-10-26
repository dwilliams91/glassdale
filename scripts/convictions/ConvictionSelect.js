// define eventhub with a queryselector on the content with a large area like the main element.
// listen for browser generated events like a click or listen with .addEventListener("typeOfEvent", typeOfEvent =>{})
// figure out which item the event happened on with if statement and .target.id
// get the target item. define empty target array
//create a custom event with the property of detail. The detail will be the argument sent out in the eventhub
//dispatchEvent to the hub. 

// define eventhub with a queryselector on the content
// get the location which will be changed with the querySelector
// use the eventHub with the detail from the custom event. 
//invoke the render function
// const eventHub=document.querySelector(".main")


/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { getConvictions, useConvictions } from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered


const contentTarget = document.querySelector(".filters__crime")
const eventHub = document.querySelector(".container")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {

    if (event.target.id === "crimeSelect") {
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        })

        eventHub.dispatchEvent(customEvent)
    }
})


const render = convictionsCollection => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="crimeSelect">
    <option value="0">Please select a crime...</option>
    ${
        convictionsCollection.map(convictionObject => {
                return `<option value="${convictionObject.id}">${convictionObject.name}</option>`
            }
        )
    }
</select>
    `
}


export const ConvictionSelect = () => {
    getConvictions()
        .then(() => {
            const convictions = useConvictions()
            render(convictions)
        })
}


// End of my stuff

// eventHub.addEventListener("change", (changeEvent)=>{
//     console.log(changeEvent)
//     if (changeEvent.target.id==="crimeSelect"){
//     const newCustomEvent= new customEvents("crimeSelect",{
//         detail:{
//             crimeThatWasChosen: changeEvent.target.value

//         }
//     })
//     eventHub.dispatchEvent(customEvent)
//     }
// })











