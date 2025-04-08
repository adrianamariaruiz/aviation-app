import AirportsList from "@/components/airportsList/AirportList";
import Title from "@/components/ui/title/Title"
import { countries } from "@/components/util/data-mock";
import { getPagination } from "../actions/airport/airport-pagination";

interface Props {
  searchParams: {
    page?: string
  }
}

export default async function Page({ searchParams }: Props) {
  const {page} = await searchParams;
  const pageAsNumber = page ? parseInt(page) : 1

  const airports = await getPagination({page: pageAsNumber, offset: (pageAsNumber - 1) * 10});

  if(!airports) return null;

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
