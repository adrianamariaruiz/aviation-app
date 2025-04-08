import { getApiKey, getApiUrl } from "@/components/util/basic-api";

const getData = async () => {
  const limitValue = 10

  const url = getApiUrl('/airports')
  const key = getApiKey();

  const res = await fetch(`${url}?access_key=${key}&limit=${limitValue}`, {next: {revalidate: 60}});
  const dataResponse = await res.json();
  console.log(dataResponse.data)
  return dataResponse.data;
}

export default getData;