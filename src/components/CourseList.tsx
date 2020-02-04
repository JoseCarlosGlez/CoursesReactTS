import React from 'react';
import { Course } from '../interfaces/interface.response';
import { Link } from 'react-router-dom';

export default function CourseList(props: { courses: Array<Course> | undefined }) {


if(props.courses==undefined)return<h2>Loading</h2>



    return (
		<table className="table">
			<thead>
				<tr>
					<th>Title</th>
					<th>author ID</th>
					<th>Categoria</th>
				</tr>
			</thead>
			<tbody>
                {
                props.courses!.map((course: Course) => {
					return (
						<tr key={course.id}>
							<td>
								<Link to={`/course/${course.slug}`}> {course.title} </Link>
							</td>
							<td>{course.authorId}</td>
							<td>{course.category}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
