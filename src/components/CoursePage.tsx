import React, { useState, useEffect } from 'react';
import { getCourses } from '../services/courses';
import { ResponseAxios, Course } from '../interfaces/interface.response';
import CourseList from './CourseList';

export default function CoursePage() {
	const [courses, setCourses] = useState<Course[]>();

	const GetCourseResponse = async () => {
		try {
			const CourseResponse: ResponseAxios = await getCourses();
			setCourses(CourseResponse.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		GetCourseResponse();
	}, []);

	return (
		<>
			<h2>Courses</h2>
			<CourseList courses={courses} />
		</>
	);
}
