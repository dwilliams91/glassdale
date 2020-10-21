import { getOfficers, useOfficers } from "./OfficerProvider.js"
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__officer")


eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value

        // Define a custom event
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: changeEvent.target.value
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

const render = officerCollection => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="officerSelect">
    <option value="0">Please select the arresting officer...</option>
    ${
        officerCollection.map(officerObject => {
                return `<option value="${officerObject.id}">${officerObject.name}</option>`
            }
        )
    }
</select>
    `
}
export const officerSelect = () => {
    getOfficers()
        .then(() => {
            const officer = useOfficers()
            render(officer)
        })
}
