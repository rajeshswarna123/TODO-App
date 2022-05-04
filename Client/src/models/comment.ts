import { useSession } from './session';

const session = useSession();

export async function getComments(taskId: string){
    return await session.api('comments/task/'+taskId);
}

export async function addComment(comment: Comment){
    return await session.api('comments/', comment);
}


export interface Comment {
    _id?: string;
    text: string;
    taskId: string;
    isReply: boolean;
    createdDate?: string;
    modifiedDate?: string;
}
