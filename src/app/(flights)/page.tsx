import AirportsList from "@/components/airportsList/AirportList";
import Title from "@/components/ui/title/Title"
import { countries } from "@/components/util/data-mock";
import getData from "../actions/airport/get-airports";

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