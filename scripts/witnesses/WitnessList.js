// creating a function with an eventlistener that is being exported to the dom
import {createWitnessCard} from './Witness.js'
import { getWitnesses, useWitnesses } from "./WitnessProvider.js"

// getting the criminals
// returning the criminal who have the id that is the same as the id of the button clicked. 
// doing the alibiList function for criminal found
// finds the div with the id of the criminal of the found criminal
// adds html to it and goes through each of the known associates and returns the name and alibi


const eventHub = document.querySelector(".container")
export const CreateWitnessEventListener = () => {
    eventHub.addEventListener("WitnessStatementClicked", (eventObj) => {
        console.log("this button was clicked")
        getWitnesses()
            .then(() => {
                const arrayOfWitnesses = useWitnesses()
                render(arrayOfWitnesses)
            })
    })
}

const render = witnessCollection => {
    const contentTarget = document.querySelector(".criminalsContainer")
    let witnessHTML=""
    for (const witness of witnessCollection){
        witnessHTML +=createWitnessCard(witness)
    }
    contentTarget.innerHTML = witnessHTML
}

export const witnessList = () => {
    getCriminals()
        .then(() => {
            const appStateCriminals = useCriminals()
            render(appStateCriminals)
        })
}