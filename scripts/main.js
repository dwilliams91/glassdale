import { getOfficers, useOfficers } from './officers/OfficerProvider.js'
import {getCriminals, useCriminals} from './criminals/CriminalProvider.js'
import { criminalList } from './criminals/CriminalList.js'

console.log("Welcome to the main module")
 
getCriminals()
.then(()=>{
    const criminalArray=useCriminals()
    console.log(criminalArray)
    console.log("This shouldn't be undefined", criminalArray[0])


})
// criminalList()