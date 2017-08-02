import axios from 'axios';
import Course from '../models/course';

const ROOT_URL = "/api";

export const GET_COURSES = 'GET_COURSES';
export const UPDATE_COURSE = 'UPDATE_COURSE';

export function GetCourses() {
    const request = axios.get(`${ROOT_URL}/courses`);

    return {
        type: GET_COURSES,
        payload: request
    }
}

export function UpdateCourse(course: Course, callback) {
    const request = axios.get(`${ROOT_URL}/courses/${course.id}`, course).then(() => {
        callback();
    });

    return {
        type: UPDATE_COURSE,
        payload: request
    }
}