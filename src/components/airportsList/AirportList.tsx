import { IAirport } from "@/interfaces/airports.interface";
import { ICountry } from "@/interfaces/countries.interface";

interface Props{
  airports: IAirport[];
  countries: ICountry[];
}

const AirportsList = ({airports, countries}:Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
        
        airports.map((airport) => {
          
          const airportCountry = countries.find(country => country.country_iso2 === airport.country_iso2);
          console.log(airportCountry)

          return(
            <div key={airport.airport_id} className="flex flex-col border-2 rounded-lg shadow-md p-4 gap-2">
              <h2 className="text-2xl font-semibold">{airport.airport_name}</h2>
              {
                airportCountry && 
                  <div key={airportCountry.country_id}>
                    <div>
                      <p className="text-l">{airportCountry.capital}, {airportCountry.country_name}</p>
                      <p className="font-extrabold w-fit text-3xl bg-linear-90 from-[#006AFF] to-[#00F9FF] text-transparent bg-clip-text">{airportCountry.currency_code}</p>
                    </div>
                  </div>
                  
              }
            </div>
          )

        })

      }

    </div>
  )
}

export default AirportsList