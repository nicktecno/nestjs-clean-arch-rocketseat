"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaAnswerAttachmentMapper = void 0;
const unique_entity_id_1 = require("../../../../core/entities/unique-entity-id");
const answer_attachment_1 = require("../../../../domain/forum/enterprise/entities/answer-attachment");
class PrismaAnswerAttachmentMapper {
    static toDomain(raw) {
        if (!raw.answerId) {
            throw new Error("Invalid attachment type.");
        }
        return answer_attachment_1.AnswerAttachment.create({
            attachmentId: new unique_entity_id_1.UniqueEntityID(raw.id),
            answerId: new unique_entity_id_1.UniqueEntityID(raw.answerId),
        }, new unique_entity_id_1.UniqueEntityID(raw.id));
    }
}
exports.PrismaAnswerAttachmentMapper = PrismaAnswerAttachmentMapper;
//# sourceMappingURL=prisma-answer-attachment-mapper.js.map