"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaQuestionAttachmentMapper = void 0;
const unique_entity_id_1 = require("../../../../core/entities/unique-entity-id");
const question_attachment_1 = require("../../../../domain/forum/enterprise/entities/question-attachment");
class PrismaQuestionAttachmentMapper {
    static toDomain(raw) {
        if (!raw.questionId) {
            throw new Error("Invalid attachment type.");
        }
        return question_attachment_1.QuestionAttachment.create({
            attachmentId: new unique_entity_id_1.UniqueEntityID(raw.id),
            questionId: new unique_entity_id_1.UniqueEntityID(raw.questionId),
        }, new unique_entity_id_1.UniqueEntityID(raw.id));
    }
}
exports.PrismaQuestionAttachmentMapper = PrismaQuestionAttachmentMapper;
//# sourceMappingURL=prisma-question-attachment-mapper.js.map