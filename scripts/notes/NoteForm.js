import { saveNote } from "./NoteProvider.js"
import {getCriminals, useCriminals} from '../criminals/CriminalProvider.js'

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub=document.querySelector(".container")

const render = (criminal) => {
    let htmlRepresentation= `
        <input id="note--dateOfInterview" type="date">
        <input id=note--author type=text placeholder="Your Name Here">
        <select id="noteForm--criminal" class="criminalSelect">
        <option value="0">Please select the suspect</option>
    ${
        criminal.map(criminal => {
                return `<option value="${criminal.id}">${criminal.name}</option>`
            }
        )
    }
        </select>
        <div>
         <textarea id="note--note" placeholder="Notes"></textarea></div>
        <button id="saveNote">Save Note</button>
    `
    contentTarget.innerHTML =htmlRepresentation
    
}
eventHub.addEventListener("click", clickEvent=>{
    if (clickEvent.target.id==="saveNote"){
        const dateOfInterview= document.querySelector("#note--dateOfInterview").value
        const authorOfNote=document.querySelector("#note--author").value
        const suspect=document.querySelector("#note--suspect").value
        const note=document.querySelector("#note--note").value
        const timeStamp= Date.now()
// got values, putting them into a new object

        const newNote={
            Date:dateOfInterview,
            timestamp:timeStamp,
            author: authorOfNote,
            suspect: suspect,
            note: note,
        }
        saveNote(newNote)
    }
})


export const NoteForm = () => {
    getCriminals()
    .then(() => {
        const criminals = useCriminals()
        render(criminals)
    })
}

