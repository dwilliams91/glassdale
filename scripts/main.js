import { getOfficers, useOfficers } from './officers/OfficerProvider.js'
import {getCriminals, useCriminals} from './criminals/CriminalProvider.js'
import { CriminalList } from './criminals/CriminalList.js'
import { getConvictions, useConvictions } from './convictions/ConvictionProvider.js'
import { ConvictionSelect } from './convictions/ConvictionSelect.js'
import { OfficerList } from './officers/OfficerList.js'
import {officerSelect} from './officers/OfficerSelect.js'
import { NoteForm } from './Notes/NoteForm.js'

console.log("Welcome to the main module")
 
CriminalList()
ConvictionSelect()
OfficerList()
officerSelect()
NoteForm()
