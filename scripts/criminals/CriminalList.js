import { useConvictions } from "../convictions/ConvictionProvider.js"
import { useCriminals, getCriminals } from "./CriminalProvider.js"
import { createCriminalCard } from "./Criminals.js"


const eventHub = document.querySelector(".container")


// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
    console.log(event)
    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== "0"){
        /*
            Filter the criminals application state down to the people that committed the crime
        */
       const listOfCriminals=useCriminals()
        const matchingCriminals = listOfCriminals.filter(criminal=> criminal.conviction===event.detail.crimeThatWasChosen)
        console.log(matchingCriminals)
        render(matchingCriminals)
        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
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