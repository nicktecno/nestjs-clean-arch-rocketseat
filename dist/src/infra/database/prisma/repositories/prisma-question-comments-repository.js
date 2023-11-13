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
exports.PrismaQuestionCommentsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const prisma_question_comment_mapper_1 = require("../mappers/prisma-question-comment-mapper");
let PrismaQuestionCommentsRepository = exports.PrismaQuestionCommentsRepository = class PrismaQuestionCommentsRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findById(id) {
        const questionComment = await this.prisma.comment.findUnique({
            where: {
                id,
            },
        });
        if (!questionComment) {
            return null;
        }
        return prisma_question_comment_mapper_1.PrismaQuestionCommentMapper.toDomain(questionComment);
    }
    async findManyByQuestionId(questionId, { page }) {
        const questionComments = await this.prisma.comment.findMany({
            where: {
                questionId,
            },
            orderBy: {
                createdAt: "desc",
            },
            take: 20,
            skip: (page - 1) * 20,
        });
        return questionComments.map(prisma_question_comment_mapper_1.PrismaQuestionCommentMapper.toDomain);
    }
    async create(questionComment) {
        const data = prisma_question_comment_mapper_1.PrismaQuestionCommentMapper.toPrisma(questionComment);
        await this.prisma.comment.create({
            data,
        });
    }
    async delete(questionComment) {
        await this.prisma.comment.delete({
            where: {
                id: questionComment.id.toString(),
            },
        });
    }
};
exports.PrismaQuestionCommentsRepository = PrismaQuestionCommentsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaQuestionCommentsRepository);
//# sourceMappingURL=prisma-question-comments-repository.js.map