import { Router } from 'express'
import userController from './users/user.controller'
import productController from './products/product.controller';

const routes = Router()

routes.post('/users', userController.create);
routes.get('/users', userController.list);
routes.get('/users/:id', userController.find);
routes.put('/users/:id', userController.update);
routes.delete('/users/:id', userController.remove);

routes.post('/products', productController.create);
routes.get('/products', productController.list);
routes.get('/products/:id', productController.find);
routes.put('/products/:id', productController.update);
routes.delete('/products/:id', productController.remove);
routes.get('/random-products', productController.randomProducts)
routes.get('/products-writeJSON', productController.write);
routes.get('/products-readJSON', productController.read);

routes.get('/stock', productController.stock);
routes.get('/stock-find', productController.findStock);

export default routes