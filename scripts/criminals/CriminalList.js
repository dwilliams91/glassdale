import { useConvictions } from "../convictions/ConvictionProvider.js"
import { useOfficers } from "../officers/OfficerProvider.js"
import { useCriminals, getCriminals } from "./CriminalProvider.js"
import { createCriminalCard } from "./Criminals.js"


const eventHub = document.querySelector(".container")


// dispatching the alibi event listener





// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
    if (event.detail.crimeThatWasChosen !== "0"){
       const listOfCriminals=useCriminals()
       const convictionArray=useConvictions()
       const convictionThatWasChosen= convictionArray.find(convictionObj => {
            return convictionObj.id === parseInt(event.detail.crimeThatWasChosen)
        })
        const matchingCriminals = listOfCriminals.filter(criminal=> criminal.conviction===convictionThatWasChosen.name)
        render(matchingCriminals)
        
    }
})

eventHub.addEventListener("officerSelected", event => {
    if (event.detail.officer !== "0"){
        const listOfCriminals=useCriminals()
        const officerArray=useOfficers()
        const officerThatWasChosen=officerArray.find(officerObj =>{
            return officerObj.id===parseInt(event.detail.officer)
        })
        const findingArrestOfficer=listOfCriminals.filter(criminal=>criminal.arrestingOfficer===officerThatWasChosen.name)
    
        render(findingArrestOfficer)
        
    }
})

// calling criminal.js for each individual criminal
const render = criminalCollection => {
    const contentTarget = document.querySelector(".criminalsContainer")
    let crinimalHTML=""
    for (const crime of criminalCollection){
        crinimalHTML +=createCriminalCard(crime)
    }
    contentTarget.innerHTML = crinimalHTML
}


// Render ALL criminals initally
export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const appStateCriminals = useCriminals()
            render(appStateCriminals)
        })
}

// end of my stuff








