import { IAirport } from "@/interfaces/airports.interface";
import { ICountry } from "@/interfaces/countries.interface";
import Link from "next/link";

interface Props {
  airports: IAirport[];
  countries: ICountry[];
}

const AirportsList = ({ airports, countries }: Props) => {
  return (
    <div className="flex justify-center w-full gap-4 mb-10">
      <div className="relative overflow-x-auto w-fu ll shadow-md sm:rounded-lg xl:w-3/5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Aeropuerto</th>
              <th scope="col" className="px-6 py-3">Pais</th>
              <th scope="col" className="px-6 py-3">Ciudad</th>
              <th scope="col" className="px-6 py-3">Código</th>
            </tr>
          </thead>
          <tbody >
            {
              airports.map((airport) => {

                const airportCountry = countries.find(country => country.country_iso2 === airport.country_iso2);
                const airpotTimezone = airport?.timezone?.split("/")[1].replace(/_/g, " ");
                
                return (
                  <tr key={airport.airport_id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-300 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">
                     <Link href={ `/details/${airport.id}` } className="hover:text-secondary-400 transition-colors duration-300">
                      {airport.airport_name}
                     </Link>
                    </th>
                    <td className="px-6 py-3">{airpotTimezone}</td>
                    <td className="px-6 py-3">{airport.country_name}</td>
                    <td className="px-6 py-3 font-extrabold w-fit text-xl text-transition">{airportCountry?.currency_code}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AirportsList