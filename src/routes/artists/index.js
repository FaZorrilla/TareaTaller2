import Router from '@koa/router';

export const artistsRouter = new Router();

import { getAll } from './getAll';
import { add } from './add';
import { router } from '../../routes';

//router.<metodo>(ruta relativa, method)
router.get('/', getAll);
router.post('/', add);
