import { AxiosResponse } from "axios";

export interface ResponseAxios extends AxiosResponse {
    data: Array<Course>,
}


export interface Course {
    id: number,
    title: string,
    slug: string,
    authorId: number,
    category: string
}

