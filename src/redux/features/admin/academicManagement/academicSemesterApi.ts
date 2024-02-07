import {baseApi} from '../../../api/baseApi';
const academicSemesterApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllSemesters:builder.query({
            query:()=>({
                url:"/academic-semesters",
                method:"GET",
                
            }),
            transformResponse:(response)=>{
                return {
                    data:response.data,
                    meta:response.meta
                }
            }
        }),
        addAcademicSemesters:builder.mutation({
            query:(data)=>({
                url:"/academic-semesters/create-academic-semester",
                method:"POST",
                body:data
            })
        })
      })
})

export const {useGetAllSemestersQuery,useAddAcademicSemestersMutation}= academicSemesterApi