import { notFound } from "next/navigation";

import getAirportDetail from "@/app/actions/airport/get-airport-by-id";
import { IAirport } from "@/interfaces/airports.interface";
import Title from "@/components/ui/title/Title";

interface Props {
  params: {
    id: string;
  }
}

const pageDetails = async({params}:Props) => {
  const{id} = await params;

  const airportInfo:IAirport = await getAirportDetail(id)
  // console.log(airportInfo)

  if(!airportInfo) return notFound();

  return (
    <>
    <div className="flex justify-between py-5 px-5 text-white! max-w-5xl border border-white rounded-lg shadow-md bg-gradient">
      <div>
        <Title title="Información General" className="pb-4"/>
        <p className="font-bold">Código IATA: <span className="font-normal">{airportInfo.iata_code}</span></p>
        <p className="font-bold">Código ICAO: <span className="font-normal">{airportInfo.icao_code}</span></p>
        <p className="font-bold">Ciudad IATA: <span className="font-normal">{airportInfo.country_name} ({airportInfo.country_iso2})</span></p>
        <p className="font-bold">Teléfono: <span className="font-normal">{airportInfo.phone_number || "No disponible"}</span></p>
      </div>
      <div>
        <p>imagen</p>
      </div>
    </div>
    </>
  )
}

export default pageDetails