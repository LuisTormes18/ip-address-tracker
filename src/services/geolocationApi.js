import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;

export const getAddressByIp = async (ip) => {

    const resp = await axios({
        url: `http://api.ipapi.com/api/${ip}?access_key=${api_key}`,
    });
    return resp.data;
};
