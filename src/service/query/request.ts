"use client"

import axios from 'axios';

const request = axios.create({ baseURL: 'https://market-backend-zeta.vercel.app' });

export { request };
