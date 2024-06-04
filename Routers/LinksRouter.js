import express from 'express'
import LinksController from '../Controllers/LinksController.js'

const LinksRouter = express.Router()

LinksRouter.get('/', LinksController.getLinks)
LinksRouter.get('/:id/clicks', LinksController.getLinkClicksBySource);
LinksRouter.get('/:id', LinksController.redirect);
LinksRouter.post('/', LinksController.add)
LinksRouter.put('/:id', LinksController.update)
LinksRouter.delete('/:id', LinksController.delete)
export default LinksRouter
