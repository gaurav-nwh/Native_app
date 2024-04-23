import React, { useState, useEffect } from 'react';
import  api from '../api';
import { errorHandler } from '../errorhandles';

const useGetAllProjectsForAdmin = (status) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response =  api.post('/project/all-project');
        response= await errorHandler(response)
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching category data:', error);
        alert(error.message)
      }
    };
   

      fetchData();
    
  }, [status]);
  
  return data;
};

export default useGetAllProjectsForAdmin;
