import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Courses } from '../conponents/Courses';
import { Materials } from './../conponents/material/Materials';
import { MaterialDetail } from '../conponents/material/MaterialDetail';
import { Students } from '../conponents/Coursers/Students';
import { Retting } from '../conponents/Coursers/Retting';
import { StuDatails } from '../conponents/Coursers/Studetails/StuDatails';
import { Announments } from '../conponents/Announments';
import { Notifications } from '../conponents/Notifications';
import { Schedule } from '../conponents/Schedule';

export const Rout = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Courses />} />
				<Route path='/courses' element={<Courses />}>
					<Route path='/courses/material' element={<Materials />} />
					<Route path='/courses/material/:id' element={<MaterialDetail />}>
						<Route path='late' element={<h3>late</h3>} />
						<Route path='waiting' element={<h3>waiting</h3>} />
						<Route path='submitted' element={<h3>submitted</h3>} />
					</Route>

					<Route path='/courses/student' element={<Students />} />
					<Route path='/courses/student/:id/details' element={<StuDatails />} />
					<Route path='/courses/rating' element={<Retting />} />
				</Route>

				<Route path='/anouncements' element={<Announments />} />
				<Route path='/notifications' element={<Notifications />} />
				<Route path='/schedule' element={<Schedule />} />
			</Routes>
		</>
	);
};
