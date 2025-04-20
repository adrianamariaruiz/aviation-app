import { getApiKey, getApiUrl } from "@/components/util/basic-api";

const getData = async (limitValue: number) => {
  const url = getApiUrl('/airports')
  const key = getApiKey();

  try {
    const res = await fetch(`${url}?access_key=${key}&limit=${limitValue}`, {next: {revalidate: 60}});
    const dataResponse = await res.json();
    return dataResponse.data;
  } catch (error) {
    console.error('Error fetching airport data:', error);
    throw new Error('Error fetching airport data'); 
  }

}

export default getData;