import { useConvictions } from "../convictions/ConvictionProvider.js"
import { useCriminals, getCriminals } from "./CriminalProvider.js"
import { createCriminalCard } from "./Criminals.js"


const eventHub = document.querySelector(".container")


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








// export const criminalList = () => {
//     const contentTarget = document.querySelector(".criminalsContainer")

//     getCriminals()
//     .then(() => {

//         const criminalArray = useCriminals()
//         let criminalHTMLRepresentation = " "
//         for (const criminal of criminalArray) {
//             criminalHTMLRepresentation += createCriminalCard(criminal)
//         }
//         contentTarget.innerHTML = criminalHTMLRepresentation
//     })


// }