export const facilitiesHTMLCreator = (facilitiesObj, relatedCriminals) => {
    return `
    <div class="facitiliesCard">
    <h4>${facilitiesObj.facilityName}</h4>
    <p>Security Level${facilitiesObj.facilityName}</p>
    <p>Capacity: ${facilitiesObj.capacity}</p>
    <ul>
    ${relatedCriminals.map(criminal => `<li>${criminal.name}</li>`).join("")}
    </ul>
    </div>
    
    `

}