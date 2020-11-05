
const eventHub=document.querySelector(".container")
const contentTarget=document.querySelector(".notesContainer")
import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'
import{createNoteCard} from './NoteHTMLConverter.js'
import { useNotes, getNotes} from './NoteProvider.js'



eventHub.addEventListener("noteStateChanged", ()=>noteList())

export const noteList=()=>{
    getNotes()
    .then(getCriminals)
    .then(()=>{
        const allCriminals=useCriminals()
        const allNotes=useNotes()
        render(allNotes, allCriminals)
    })
}

const render = (noteCollection, criminalCollection) => {
    contentTarget.innerHTML = noteCollection.map(note => {
        console.log(note)
        // Find the related criminal
        const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)
        console.log(relatedCriminal)
        return `
            <section class="note">
                <h2>Note about ${relatedCriminal.name}</h2>
                ${note.noteText}
            </section>
        `
    })
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