import axios from 'axios';
import { OrderPayLoad } from './Orders/types';

const API_URL = process.env.REACT_APP_API_URL;
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

export function fetchProducts() {
  return axios(`https://dashboard.heroku.com/apps/sds-dsdeliver-wes/products`);
}

export function fetchLocalMapBox(local: string) {
  return axios(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=pk.eyJ1Ijoid2VzY2FzdGVsYW5pIiwiYSI6ImNram9ueG4wdTExYXQzMWx5Y2MzemFkbzcifQ.naytOKqOqm7TuhqBE3WCyg`
  );
}

export function saveOrder(payload: OrderPayLoad) {
  return axios.post(`https://dashboard.heroku.com/apps/sds-dsdeliver-wes/orders`, payload);
}
