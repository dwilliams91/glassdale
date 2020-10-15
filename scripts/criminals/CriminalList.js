import { getCriminals } from "./CriminalProvider.js"
import { createCriminalCard } from "./Criminals.js"

export const criminalList=()=>{
    const criminalOutput=document.querySelector(".criminalsContainer")
    const criminalArray=getCriminals()
    let criminalHTMLRepresentation=" "
    for (const criminal of criminalArray){
        criminalHTMLRepresentation+= createCriminalCard
    }
    criminalOutput.innerHTML=criminalHTMLRepresentation

}