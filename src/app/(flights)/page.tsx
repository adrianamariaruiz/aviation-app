import AirportsList from "@/components/airportsList/AirportList";
import Title from "@/components/ui/title/Title"
import { getApiKey, getApiUrl } from "@/components/util/basic-api";
import { countries } from "@/components/util/data-mock";

const getData = async () => {
  const limitValue = 10

  const url = getApiUrl('/airports')
  const key = getApiKey();

  const res = await fetch(`${url}?access_key=${key}&limit=${limitValue}`, {next: {revalidate: 60}});
  const dataResponse = await res.json();
  console.log(dataResponse.data)
  return dataResponse.data;
}

const AirportsHome = async() => {

  const airports = await getData();

  return (
    <div className="flex flex-col min-h-screen">
        <Title 
          title="SkyConnect Explorer"
          className="mb-5"
        />
        <AirportsList 
          airports={airports} 
          countries={countries}
        />
    </div>
  );
}

export default AirportsHome;