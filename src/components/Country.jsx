import axios from "axios";

const getApiCountry = async () => {
  const { data } = await axios.get(
    `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_IP_LOCATION_KEY}`
  );

  return data;
};

const Country = async () => {
  const { country } = await getApiCountry();

  return <div>{country}</div>;
};

export default Country;
