
const eventHub=document.querySelector(".container")
const contentTarget=document.querySelector(".notesContainer")
import{createNoteCard} from './NoteHTMLConverter.js'
import { useNotes, getNotes} from './NoteProvider.js'



eventHub.addEventListener("noteStateChanged", ()=>noteList())

export const noteList=()=>{
    getNotes()
    .then(()=>{
        const allNotes=useNotes()
        render(allNotes)
    })
}

const render = noteArray => {

    let noteHTML=""
    for (const note of noteArray){
        noteHTML +=createNoteCard(note)
    }
    // console.log(noteHTML)
    contentTarget.innerHTML = `${noteHTML}`
}

