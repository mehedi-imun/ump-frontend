import type { TableColumnsType, TableProps } from 'antd';
import { Table } from 'antd';
import React from 'react';
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement/academicSemesterApi";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const AcademicSemester = () => {
  const {data:semesterData} = useGetAllSemestersQuery(undefined);
  const tableData = semesterData?.data.map(({_id,name, startMonth,endMonth,year} )=> ({

    _id,
    name,
     startMonth,
     endMonth,
     year
  }) )
  const columns: TableColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
    },
    {
      title: 'Year',
      dataIndex: 'year',
      defaultSortOrder: 'descend',
    },
    {
      title: 'Start month',
      dataIndex: 'startMonth',
      
    },
    {
      title: 'End month',
      dataIndex: 'endMonth',
      
    },
  ];

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return <div><Table columns={columns} dataSource={tableData} onChange={onChange} /></div>;
};

export default AcademicSemester;
