import { getOfficers, useOfficers } from './officers/OfficerProvider.js'
import {getCriminals} from './criminals/CriminalProvider.js'
import { criminalList } from './criminals/CriminalList.js'

console.log("Welcome to the main module")
 
// console.log(getOfficers())
let blah=getCriminals()
console.log(blah)
// criminalList()