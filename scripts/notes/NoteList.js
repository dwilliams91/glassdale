
const eventHub=document.querySelector(".container")
const contentTarget=document.querySelector(".notesContainer")
import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'
import{createNoteCard} from './NoteHTMLConverter.js'
import { useNotes, getNotes} from './NoteProvider.js'



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
        // console.log("this should be the related criminal",relatedCriminal.name)
        return `
        <div class=noteCard>
        <h4>Author: ${note.author}</h4>
        <p>Name: ${relatedCriminal.name}</p>
        <p>Date: ${note.Date}</p>
        <p>Notes: ${note.note}</p>
        
        </div>
        `
    }).join(``)
}

// import { useNotes } from './NoteProvider.js'
// import { useCriminals } from '../criminals/CriminalProvider.js'


// const render = (noteCollection, criminalCollection) => {
//     contentTarget.innerHTML = noteCollection.map(note => {
//         // Find the related criminal
//         const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)

//         return `
//             <section class="note">
//                 <h2>Note about ${relatedCriminal.name}</h2>
//                 ${note.noteText}
//             </section>
//         `
//     })
// }

// const NoteList = () => {
//     getNotes()
//         .then(getCriminals)
//         .then(() => {
//             const notes = useNotes()
//             const criminals = useCriminals()

//             render(notes, criminals)
//         })
// }