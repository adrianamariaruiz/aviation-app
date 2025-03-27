export interface FlightData {
  flight_date:   string;
  flight_status: string;
  departure:     DepartureAndArrival;
  arrival:       DepartureAndArrival;
  airline:       Airline;
  flight:        Flight;
  aircraft?:     Aircraft | null;
  live?:         Live | null;
}

export interface DepartureAndArrival {
  airport:          string;
  timezone:         string;
  iata:             string;
  icao:             string;
  terminal?:        string | null;
  gate?:            string | null;
  baggage?:         string | null;
  delay?:           number | null;
  scheduled:        string;
  estimated?:       string | null;
  actual?:          string | null;
  estimated_runway?:string | null;
  actual_runway?:   string | null;
}

export interface Airline {
  name: string;
  iata: string;
  icao: string;
}

export interface Flight {
  number:     string;
  iata:       string;
  icao:       string;
  codeshared: Codeshared | null;
}

export interface Codeshared {
  airline_name:  string;
  airline_iata:  string;
  airline_icao:  string;
  flight_number: string;
  flight_iata:   string;
  flight_icao:   string;
}

export interface Aircraft {
  registration: string;
  iata:         string;
  icao:         string;
  icao24:       string;
}

export interface Live {
  updated:          string;
  latitude:         number;
  longitude:        number;
  altitude:         number;
  direction:        number;
  speed_horizontal: number;
  speed_vertical:   number;
  is_ground:        boolean;
}
