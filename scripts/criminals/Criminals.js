export const createCriminalCard=(criminalObj)=>{
    return `
    <div class=criminalCard>
    <h4>${criminalObj.name}</h4>
    <p>Age: ${criminalObj.age}</p>
    <p>Crime: ${criminalObj.conviction}</p>
    <p>Term Start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
    <p>Term End: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
    </div>

    `
}