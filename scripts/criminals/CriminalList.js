import { useConvictions } from "../convictions/ConvictionProvider.js"
import { useOfficers } from "../officers/OfficerProvider.js"
import { useCriminals, getCriminals } from "./CriminalProvider.js"
import { Criminal } from "./Criminals.js"
import { getCriminalFacilities, useCriminalFacilities } from '../facilities/CriminalFacilityProvider.js'
import { getFacilities, useFacilities } from '../facilities/FacilityProvider.js'
const eventHub = document.querySelector(".container")

// dispatching the alibi event listener

let criminals=[]
let facilities=[]
let criminalFacities=[]



// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
    if (event.detail.crimeThatWasChosen !== "0") {
        const listOfCriminals = useCriminals()
        const convictionArray = useConvictions()
        const convictionThatWasChosen = convictionArray.find(convictionObj => {
            return convictionObj.id === parseInt(event.detail.crimeThatWasChosen)
        })
        const matchingCriminals = listOfCriminals.filter(criminal => criminal.conviction === convictionThatWasChosen.name)
        
        criminals=matchingCriminals
        render()
                
    }
})

eventHub.addEventListener("officerSelected", event => {
    if (event.detail.officer !== "0") {
        const listOfCriminals = useCriminals()
        const officerArray = useOfficers()
        const officerThatWasChosen = officerArray.find(officerObj => {
            return officerObj.id === parseInt(event.detail.officer)
        })
        const findingArrestOfficer = listOfCriminals.filter(criminal => criminal.arrestingOfficer === officerThatWasChosen.name)
        criminals=findingArrestOfficer
        render()
                
        
    }
})

const render = () => {
    // Step 1 - Iterate all criminals
    const contentTarget = document.querySelector(".criminalsContainer")
    contentTarget.innerHTML = criminals.map(
        (criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = criminalFacities.filter(cf => cf.criminalId === criminalObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const foundfacilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = facilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

            // Must pass the matching facilities to the Criminal component
            return Criminal(criminalObject, foundfacilities)
        }
    ).join("")
}

// calling criminal.js for each individual criminal
// const render = criminalCollection => {
//     const contentTarget = document.querySelector(".criminalsContainer")
//     let crinimalHTML=""
//     for (const crime of criminalCollection){
//         crinimalHTML +=createCriminalCard(crime)
//     }
//     contentTarget.innerHTML = crinimalHTML
// }


// Render ALL criminals initally
export const CriminalList = () => {
    getCriminals()
        .then(getCriminalFacilities())
        .then(getFacilities())
        .then(
            () => {
                // Pull in the data now that it has been fetched
                facilities = useFacilities()
                criminalFacities = useCriminalFacilities()
                criminals = useCriminals()

                // Pass all three collections of data to render()
                render()
            }
        )


}

// end of my stuff

export const CreateCriminalEventListener = () => {
    eventHub.addEventListener("CriminalButtonClicked", (eventObj) => {
        getCriminals()
        .then(getCriminalFacilities())
        .then(getFacilities())
        .then(getCriminalFacilities)
        .then(
            () => {
                // Pull in the data now that it has been fetched
                facilities = useFacilities()
                criminalFacities = useCriminalFacilities()
                criminals = useCriminals()


                // Pass all three collections of data to render()
                render()
            }
        )
    })
}






