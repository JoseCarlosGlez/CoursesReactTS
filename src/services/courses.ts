
import axios from 'axios';
import { ResponseAxios } from '../interfaces/interface.response';

const baseUrl = `http://localhost:3001/courses/`;

export function getCourses():Promise<ResponseAxios> {
    return axios.get(baseUrl)
}