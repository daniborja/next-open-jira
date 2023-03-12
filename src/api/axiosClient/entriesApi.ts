import axios from 'axios';

export const entriesAPi = axios.create({ baseURL: '/api' }); // <- same domain  < next
// export const entriesAPi = axios.create({baseURL: process.env.NEXT_CLIENT_URL});
