import { useCriminals, getCriminals } from "./CriminalProvider.js"
import { createCriminalCard } from "./Criminals.js"

export const criminalList = () => {
    const criminalOutput = document.querySelector(".criminalsContainer")

    getCriminals()
    .then(() => {

        const criminalArray = useCriminals()
        let criminalHTMLRepresentation = " "
        for (const criminal of criminalArray) {
            criminalHTMLRepresentation += createCriminalCard(criminal)
        }
        criminalOutput.innerHTML = criminalHTMLRepresentation
    })


}