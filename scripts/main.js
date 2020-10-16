import { getOfficers, useOfficers } from './officers/OfficerProvider.js'
import {getCriminals, useCriminals} from './criminals/CriminalProvider.js'
import { criminalList } from './criminals/CriminalList.js'
import { getConvictions, useConvictions } from './convictions/ConvictionProvider.js'
import { ConvictionSelect } from './convictions/ConvictionSelect.js'

console.log("Welcome to the main module")
 
criminalList()
ConvictionSelect()

// getConvictions()
// .then(() =>{
//     console.log(useConvictions())

// })
// getCriminals()
//     .then(() => {

//         const criminalArray = useCriminals()
// })
