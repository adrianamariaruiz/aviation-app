import AirportsList from "@/components/airportsList/AirportList";
import Title from "@/components/ui/title/Title"
import { countries } from "@/components/util/data-mock";
import { getPagination } from "../actions/airport/airport-pagination";
import Pagination from "@/components/ui/pagination/Pagination";

interface Props {
  searchParams: {
    page?: string
  }
}

export default async function Page({ searchParams }: Props) {
  const {page} = await searchParams;
  const pageAsNumber = page ? parseInt(page) : 1

  const {currentPage, totalPages, airports} = await getPagination({page: pageAsNumber, offset: (pageAsNumber - 1) * 20, limit: 20});

  return (
    <div className="flex flex-col min-h-screen py-5">
        <Title 
          title="SkyConnect Explorer"
          className="mb-10"
        />
        <AirportsList 
          airports={airports} 
          countries={countries}
        />

        <Pagination totalPages={totalPages}/>
    </div>
  );
}
