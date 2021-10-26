import axios from "axios";

const base_url = process.env.REACT_APP_BASE_URL;
const api_key = process.env.REACT_APP_API_KEY;

export const getAddressByIp = async (ipAddress) => {
    // const resp = await axios({
    //     url: `${base_url}apiKey=${api_key}&ipAddress=${ipAddress}`,
    // });
    fetch(`${base_url}apiKey=${api_key}&ipAddress=${ipAddress}`).catch(err=>{
    	console.log(err)
    })
    // console.log(resp);
};
