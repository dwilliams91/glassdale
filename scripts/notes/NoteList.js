
const eventHub=document.querySelector(".container")
const contentTarget=document.querySelector(".notesContainer")
import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'
import{createNoteCard} from './NoteHTMLConverter.js'
import { useNotes, getNotes, deleteNote, editNote} from './NoteProvider.js'



eventHub.addEventListener("noteStateChanged", ()=>noteList())

export const noteList=()=>{
    getNotes()
    .then(getCriminals)
    .then(() =>{
        const allCriminals=useCriminals()
        const allNotes=useNotes()
        // console.log("This should be an array of criminals",allCriminals)
        // console.log("This should be an array of all notes", allNotes)
        render(allNotes, allCriminals)
    })
}

const render = (noteCollection, criminalCollection) => {
    contentTarget.innerHTML = noteCollection.map(note => {
        // console.log(note)
        // Find the related criminal
        // debugger
        const relatedCriminal = criminalCollection.find(criminal => criminal.id === parseInt(note.criminalId))
        console.log("this should be the related criminal",relatedCriminal.name)
        return `
        <div class=noteCard>
        <h4>Author: ${note.author}</h4>
        <p>Name: ${relatedCriminal.name}</p>
        <p>Date: ${note.Date}</p>
        <p>Notes: ${note.note}</p>
        <button id="editNote--${note.id}">Edit</button>
        <button id="deleteNote--${note.id}">Delete</button>
        </div>
        `
    }).join(``)
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        console.log(clickEvent)
        const [prefix, id] = clickEvent.target.id.split("--")

        console.log(id)
       
       deleteNote(id).then(
           () => {
               const updatedNotes = useNotes()
               const criminals = useCriminals()
               render(updatedNotes, criminals)
           }
       )
    }
})
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("editNote--")) {
        console.log(clickEvent)
        const [prefix, id] = clickEvent.target.id.split("--")

        editNote(id).then(
            () => {
                const updatedNotes = useNotes()
                const criminals = useCriminals()
                render(updatedNotes, criminals)
            }
        )       
    }
})