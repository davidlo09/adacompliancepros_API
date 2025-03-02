import express from 'express';
import controllers from '../controllers';
import * as middlewares from '../middlewares'
import { controllerWrapper } from '../decorators';

const router = express.Router();

router.post(
  '/check-ada-compilance',
  middlewares.validateEmail,
  middlewares.validateURL,
  middlewares.validateName,
  controllerWrapper(controllers.adaCompilance)
);

router.post(
  '/vpat-101-explainer',
  middlewares.validateEmail,
  controllerWrapper(controllers.vpat101)
);

export default router;
