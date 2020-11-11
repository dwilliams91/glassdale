import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "./CriminalFacilityProvider.js"
import { facilitiesHTMLCreator } from "./Facilities.js"
import { getFacilities, useFacilities } from "./FacilityProvider.js"

// get contentTarget and eventhub
const eventhub = document.querySelector(".container")

// set up the state for this module
// let criminals=[]
// let facilties=[]
// let criminalFacilities=[]

// listen for the click

eventhub.addEventListener("FacilitiesButtonClicked", e => {
    facilitiesList()

})


export const facilitiesList = () => {
    getCriminals()
    .then(getCriminalFacilities())
    .then(getFacilities())
    .then(
        () => {
            // Pull in the data now that it has been fetched
            const facilities = useFacilities()
            const crimFac = useCriminalFacilities()
            const criminals = useCriminals()

            // Pass all three collections of data to render()
            render(facilities, criminals, crimFac)
        }
    )

}

const render = (facilities, criminals, facilitiesCriminal) => {
    const contentTarget = document.querySelector(".facilityContainer")
    // map facilites. For each of the facilities
    
    contentTarget.innerHTML= facilities.map(
        facilitiesObj => {
            // goes through each of the relationships and finds all the of the relationships that have the id for the facility
            const CriminalsRelationshipToThisFacilities = facilitiesCriminal.filter(fc => fc.facilityId === facilitiesObj.id)
            // goes through the new array of relationships. For each of the relationships, find the related criminal
            const criminal = CriminalsRelationshipToThisFacilities.map(fc => {
                const relatedCriminal = criminals.find(thisCriminal => thisCriminal.id === fc.criminalId)
                return relatedCriminal

            })
            return facilitiesHTMLCreator(facilitiesObj,criminal)
        })

}

