import { getOfficers } from './officers/OfficerProvider.js'
import {getCriminals} from './criminals/CriminalProvider.js'

console.log("Welcome to the main module")
 
console.log(getOfficers())
console.log(getCriminals())