import AirportsList from "@/components/airportsList/AirportList";
import Title from "@/components/ui/title/Title"

const airports = [
  {
    "id": "3209782",
    "gmt": "10",
    "airport_id": "32",
    "iata_code": "ABH",
    "city_iata_code": "ABH",
    "icao_code": "YAPH",
    "country_iso2": "AU",
    "geoname_id": "7668679",
    "latitude": "-23.65",
    "longitude": "146.63333",
    "airport_name": "Alpha",
    "country_name": "Australia",
    "phone_number": null,
    "timezone": "Australia/Brisbane"
  },
  {
    "id": "3209783",
    "gmt": "-6",
    "airport_id": "33",
    "iata_code": "ABI",
    "city_iata_code": "ABI",
    "icao_code": "KABI",
    "country_iso2": "AD",
    "geoname_id": "4669647",
    "latitude": "32.409443",
    "longitude": "-99.679726",
    "airport_name": "Municipal",
    "country_name": "United States",
    "phone_number": null,
    "timezone": "America/Chicago"
  }
];
const countries = [
  {
    "id": "77113",
    "capital": "Andorra la Vella",
    "currency_code": "EUR",
    "fips_code": "AN",
    "country_iso2": "AD",
    "country_iso3": "AND",
    "continent": "EU",
    "country_id": "1",
    "country_name": "Andorra",
    "currency_name": "Euro",
    "country_iso_numeric": "20",
    "phone_prefix": "376",
    "population": "84000"
  },
  {
    "id": "77114",
    "capital": "Abu Dhabi",
    "currency_code": "AED",
    "fips_code": "AE",
    "country_iso2": "AE",
    "country_iso3": "ARE",
    "continent": "AS",
    "country_id": "2",
    "country_name": "United Arab Emirates",
    "currency_name": "Dirham",
    "country_iso_numeric": "784",
    "phone_prefix": "971",
    "population": "4975593"
  }
]

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
