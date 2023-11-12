import { Question } from "@/domain/forum/enterprise/entities/question";
import { Question as PrismaQuestion, Prisma } from "@prisma/client";
export declare class PrismaQuestionMapper {
    static toDomain(raw: PrismaQuestion): Question;
    static toPrisma(question: Question): Prisma.QuestionUncheckedCreateInput;
}
