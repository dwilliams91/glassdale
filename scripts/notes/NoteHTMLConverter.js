export const createNoteCard=(noteObj)=>{
    let whyIsTheReturnNotWorking=
    `
    <div class=noteCard>
    <h4>Author${noteObj.author}</h4>
    <p>Suspect: ${noteObj.suspect}</p>
    <p>Date: ${noteObj.Date}</p>
    <p>Notes: ${noteObj.note}</p>
    
    </div>
    `
    return whyIsTheReturnNotWorking
}

