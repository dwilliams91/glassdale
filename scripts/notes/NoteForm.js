import { saveNote } from "./NoteProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub=document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
        <input id="note--dateOfInterview" type="date">
        <input id=note--author type=text placeholder="Your Name Here">
        <input id=note--suspect type=text placeholder="Suspect">
        <div>
         <textarea id="note--note" placeholder="Notes"></textarea></div>
        <button id="saveNote">Save Note</button>
    `
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
    render()
}