import express  from 'express';
import examController from '../controllers/exam/exam.controller';
import questionSheetController from '../controllers/question-sheet/question-sheet.controller';
import questionController from '../controllers/question/question.controller';
import registrationController from '../controllers/registration/registration.controller';
import resetPasswordController from '../controllers/reset-password/reset-password.controller';
import sheetOrderController from '../controllers/sheet-order/sheet-order.controller';

const auth = require('../utils/auth.utils');

const router = express.Router();

router.use('/api/register', registrationController);
router.use('/api/password', resetPasswordController);
router.use('/api/question-sheets', questionSheetController);
router.use('/api/questions', questionController);
router.use('/api/question-sheet-orders', sheetOrderController);
router.use('/api/answer-sheets', sheetOrderController);
router.use('/api/answers', sheetOrderController);
router.use('/api/exams', examController);

export default router;