import React from 'react';
import { useGetAllSemestersQuery } from '../../../redux/features/admin/academicSemester/academicSemesterApi';

const AcademicSemester = () => {
    const data = useGetAllSemestersQuery(undefined)
    console.log(data)
    return (
        <div>
            this is academic semester component
        </div>
    );
};

export default AcademicSemester;