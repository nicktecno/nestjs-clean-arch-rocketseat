"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchRecentQuestionsUseCase = void 0;
const either_1 = require("../../../../core/either");
class FetchRecentQuestionsUseCase {
    questionsRepository;
    constructor(questionsRepository) {
        this.questionsRepository = questionsRepository;
    }
    async execute({ page, }) {
        const questions = await this.questionsRepository.findManyRecent({ page });
        return (0, either_1.right)({
            questions,
        });
    }
}
exports.FetchRecentQuestionsUseCase = FetchRecentQuestionsUseCase;
//# sourceMappingURL=fetch-recent-questions.js.map