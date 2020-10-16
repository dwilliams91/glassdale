let criminals = []


export const useCriminals = () => {
    return criminals.slice()
}

export const getCriminals = () => {
    // fetch takes an argument. Which is the link to the API
    return fetch("https://criminals.glassdale.us/criminals")
    // .then is waiting until its got it. Then converts it to json. Its argument IS a function
        .then(response =>  response.json()
        )
        // taking the parsed json and converting it to format we can use.  
        .then(
            parsedCriminals => {
                criminals = parsedCriminals
            }
        )
}