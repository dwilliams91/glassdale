export const createCriminalCard=(criminalObj)=>{
    return `
    <div class=criminalCard>
    <h5>${criminalObj.name}</h5>
    <p>Age: ${criminalObj.age}</p>
    <p>Crime: ${criminalObj.conviction}</p>
    <p>Term Start: ${criminalObj.incarceration.start}</p>
    <p>Term End: ${criminalObj.incarceration.end}</p>
    </div>

    `
}