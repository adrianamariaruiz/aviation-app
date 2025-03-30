import AirportsList from "@/components/airportsList/AirportList";
import Title from "@/components/ui/title/Title"
import { airports, countries } from "@/components/util/data-mock";


export default function Home() {
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
