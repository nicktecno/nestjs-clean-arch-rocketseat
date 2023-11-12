import { PaginationParams } from '@/core/repositories/pagination-params';
import { AnswerCommentsRepository } from '@/domain/forum/application/repositories/answer-comments-repository';
import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment';
export declare class PrismaAnswerCommentsRepository implements AnswerCommentsRepository {
    findById(id: string): Promise<AnswerComment | null>;
    findManyByAnswerId(answerId: string, params: PaginationParams): Promise<AnswerComment[]>;
    create(answerComment: AnswerComment): Promise<void>;
    delete(answerComment: AnswerComment): Promise<void>;
}
