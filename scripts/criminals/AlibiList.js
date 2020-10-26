
import { useCriminals } from "./CriminalProvider.js"
const eventHub = document.querySelector(".container")

// creating a function with an eventlistener that is being exported to the dom
export const CreatAlibiEventListener=()=>{
    eventHub.addEventListener("alibiButtonClicked", (eventObj)=>{
        // getting the criminals
        const arrayOfCriminals=useCriminals()
        // returning the criminal who have the id that is the same as the id of the button clicked. 
        const foundCriminal=arrayOfCriminals.find((criminalObj)=> {
            return criminalObj.id===parseInt(eventObj.detail.criminalId)
        })
        // doing the alibiList function for criminal found
        AlibiList(foundCriminal)
    })

}



const AlibiList=(criminalObj)=>{
    console.log(criminalObj)
    render(criminalObj)

}


const render=(criminalObj)=>{
    // finds the div with the id of the criminal of the found criminal
    const contentTarget=document.querySelector(`#criminal-${criminalObj.id}`) 
    // adds html to it and goes through each of the known associates and returns the name and alibi
    contentTarget.innerHTML+=
    `
    <div class=alibi__list>
        ${criminalObj.known_associates.map(alibiObj=>{
            return  `
            <p>${alibiObj.name}</p>
            <p>${alibiObj.alibi}</p>

            `
        })
        
        }
    </div>
    `

}






