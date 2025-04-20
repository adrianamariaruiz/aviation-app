import { notFound } from "next/navigation";

import getAirportDetail from "@/app/actions/airport/get-airport-by-id";

interface Props {
  params: {
    id: string;
  }
}

const pageDetails = async({params}:Props) => {
  const{id} = params;

  const airportInfo = await getAirportDetail(id)

  if(!airportInfo) return notFound();

  return (
    <>
      <div>pageDetails {id}</div>
      <div>{airportInfo.airport_name}</div>
    </>
  )
}

export default pageDetails