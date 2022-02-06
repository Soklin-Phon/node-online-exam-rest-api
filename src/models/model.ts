import { AnswerSheet } from "./answer-sheet/answer-sheet";
import { Answer } from "./answer/answer";
import { QuestionOption } from "./question-option/question-option";
import { QuestionSheetOrder } from "./question-sheet-order/question-sheet-order";
import { QuestionSheet } from "./question-sheet/question-sheet";
import { Question } from "./question/question";
import { Subject } from "./subject/subject";
import { User } from "./user/user";

const models = [
    User,
    Question,
    QuestionSheet,
    QuestionSheetOrder,
    QuestionOption,
    AnswerSheet,
    Answer,
    Subject,
];

export default models;