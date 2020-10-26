import { getOfficers, useOfficers } from './officers/OfficerProvider.js'
import {getCriminals, useCriminals} from './criminals/CriminalProvider.js'
import { CreateCriminalEventListener, CriminalList } from './criminals/CriminalList.js'
import { getConvictions, useConvictions } from './convictions/ConvictionProvider.js'
import { ConvictionSelect } from './convictions/ConvictionSelect.js'
import { OfficerList } from './officers/OfficerList.js'
import {officerSelect} from './officers/OfficerSelect.js'
import { NoteForm } from './Notes/NoteForm.js'
import { noteList } from './Notes/NoteList.js'
import{CreatAlibiEventListener} from './criminals/AlibiList.js'
import { CreateWitnessEventListener } from './witnesses/WitnessList.js'
import { witnessButton } from './witnesses/WitnessButton.js'
import { getWitnesses, useWitnesses } from './witnesses/WitnessProvider.js'

console.log("Welcome to the main module")
 
CriminalList()
ConvictionSelect()
OfficerList()
officerSelect()
NoteForm()
noteList()
CreatAlibiEventListener()
CreateWitnessEventListener()
witnessButton()
CreateCriminalEventListener()


