

export const Criminal = (criminalObject, facilities) => {
    return `
    <div class="criminalCard" id="criminal-${criminalObject.id}">
        <h4>${criminalObject.name}</h4>
        <div class="criminal__details">
            <p>Convicted for ${criminalObject.conviction}</p>
            <p>Arrested by ${criminalObject.arrestingOfficer}</p>
            <p>Incarcerated between:
                ${new Date(criminalObject.incarceration.start).toLocaleDateString()} and
                ${new Date(criminalObject.incarceration.end).toLocaleDateString()}
            </p>
            <p>Age: ${criminalObject.age}</p>
            <div>
                <h2>Facilities</h2>
                <ul>
                    ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
                </ul>
            </div>
            <button id="associates--${criminalObject.id}">Show Associates</button>
        </div>
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


