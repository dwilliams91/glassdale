

export const createCriminalCard=(criminalObj)=>{
    return `
    <div class=criminalCard id="criminal-${criminalObj.id}">
    <h4>${criminalObj.name}</h4>
    <p>Age: ${criminalObj.age}</p>
    <p>Crime: ${criminalObj.conviction}</p>
    <p>Term Start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
    <p>Term End: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
    <button id="associates--${criminalObj.id}">Associate Alibis</button>

    </div>

    `
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click",(eventObj)=>{
    const [nameOfID, criminalId]=eventObj.target.id.split("--")
    if (eventObj.target.id.startsWith("associates--")){
        const myCustomEvent=new CustomEvent("alibiButtonClicked", {
            detail:{
                criminalId:criminalId
            } 
        })
        eventHub.dispatchEvent(myCustomEvent)
    }
})


