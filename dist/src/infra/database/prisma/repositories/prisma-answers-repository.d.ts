import { PaginationParams } from '@/core/repositories/pagination-params';
import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository';
import { Answer } from '@/domain/forum/enterprise/entities/answer';
export declare class PrismaAnswersRepository implements AnswersRepository {
    findById(id: string): Promise<Answer | null>;
    findManyByQuestionId(questionId: string, params: PaginationParams): Promise<Answer[]>;
    create(answer: Answer): Promise<void>;
    save(answer: Answer): Promise<void>;
    delete(answer: Answer): Promise<void>;
}
