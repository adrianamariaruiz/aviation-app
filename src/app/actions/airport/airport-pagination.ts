'use server'

import { getApiKey, getApiUrl } from "@/components/util/basic-api";

interface PaginationProps {
  page?: number;
  offset?: number;
  limit?: number;
}

export const getPagination = async( {page=1, offset=0, limit=10}: PaginationProps ) => {
  if(isNaN(Number(page))) page = 1;
  if(page < 1) page = 1;
  if(isNaN(Number(offset))) offset = 0;

  const url = getApiUrl('/airports')
  const key = getApiKey();

  try {
  
    const res = await fetch(`${url}?access_key=${key}&page=${page}&offset=${offset}&limit=${limit}`, {next: {revalidate: 60}});
    const dataResponse = await res.json();

    return dataResponse.data;

  } catch (error) {
    console.error('Error fetching airport data:', error);
    throw new Error('Error fetching airport data'); 
  }

}