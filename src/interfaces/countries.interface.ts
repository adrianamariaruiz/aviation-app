export interface ICountry {
  id:                  string;
  capital:             string | null;
  currency_code:       string | null;
  fips_code:           string | null;
  country_iso2:        string;
  country_iso3:        string;
  continent:           string;
  country_id:          string;
  country_name:        string;
  currency_name:       string | null;
  country_iso_numeric: string;
  phone_prefix:        string | null;
  population:          string | null;
}
