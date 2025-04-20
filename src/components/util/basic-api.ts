export const getApiUrl = (path = '') => {
  return  `${process.env.NEXT_PUBLIC_API_URL}${path}`;
}

export const getApiKey = () => {
  return process.env.NEXT_ACCESS_KEY;
}