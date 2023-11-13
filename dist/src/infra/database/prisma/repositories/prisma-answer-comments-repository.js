"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaAnswerCommentsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const prisma_answer_comment_mapper_1 = require("../mappers/prisma-answer-comment-mapper");
let PrismaAnswerCommentsRepository = exports.PrismaAnswerCommentsRepository = class PrismaAnswerCommentsRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findById(id) {
        const answerComment = await this.prisma.comment.findUnique({
            where: {
                id,
            },
        });
        if (!answerComment) {
            return null;
        }
        return prisma_answer_comment_mapper_1.PrismaAnswerCommentMapper.toDomain(answerComment);
    }
    async findManyByAnswerId(answerId, { page }) {
        const answerComments = await this.prisma.comment.findMany({
            where: {
                answerId,
            },
            orderBy: {
                createdAt: "desc",
            },
            take: 20,
            skip: (page - 1) * 20,
        });
        return answerComments.map(prisma_answer_comment_mapper_1.PrismaAnswerCommentMapper.toDomain);
    }
    async create(answerComment) {
        const data = prisma_answer_comment_mapper_1.PrismaAnswerCommentMapper.toPrisma(answerComment);
        await this.prisma.comment.create({
            data,
        });
    }
    async delete(answerComment) {
        await this.prisma.comment.delete({
            where: {
                id: answerComment.id.toString(),
            },
        });
    }
};
exports.PrismaAnswerCommentsRepository = PrismaAnswerCommentsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaAnswerCommentsRepository);
//# sourceMappingURL=prisma-answer-comments-repository.js.map