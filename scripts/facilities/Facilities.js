export const facilitiesHTMLCreator = (facilitiesObj, relatedCriminals) => {
    return `
    <h4>${facilitiesObj.facilityName}</h4>
    <ul>
    ${relatedCriminals.map(criminal => `<li>${criminal.name}</li>`).join("")}
    </ul>
    
    `

}