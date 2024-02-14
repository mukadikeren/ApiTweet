import {Router} from 'express'
import {createOne, deleteOne, getAll, getOne, updateOne} from '../controllers/ctrl.js'
import { get, post } from './controllers/ctrl.js'

const router = Router()

// ajouter 
router.get('/getAll', getAll)
// recuperer une ressource 
router.get('/getOne/:id', getOne)

router.post('createOne', createOne)
// mettre a jour, modifier
router.put('updateOne/:id',updateOne)
// supprimer
router.delete('delete/:id', deleteOne)



export default router