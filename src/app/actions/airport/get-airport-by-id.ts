import { getApiKey, getApiUrl } from "@/components/util/basic-api";
import { IAirport } from "@/interfaces/airports.interface";

const getAirportDetail = async (id: string) => {

  const url = getApiUrl('/airports')
  const key = getApiKey();

  try {

    const res = await fetch(`${url}?access_key=${key}`, {next: {revalidate: 60}});
    const dataResponse = await res.json();
    
    const airportInfo = dataResponse.data.find((airport:IAirport) => airport.id === id);
    console.log(airportInfo)

    if (!airportInfo) return null;
  
    return airportInfo;
    
  } catch (error) {
    console.error('Error fetching airport data:', error);
    throw new Error('Error fetching airport data');
  }

}

export default getAirportDetail;

