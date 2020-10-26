export const createWitnessCard=(witnessObj)=>{
    return `
    <div class=witnessCard id="criminal-${witnessObj.id}">
    <h4>${witnessObj.name}</h4>
    <p>Statements ${witnessObj.statements}</p>
    </div>

    `
}