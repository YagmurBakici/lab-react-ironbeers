import axios from "axios";

const url = "https://ironbeerapi.herokuapp.com";

export const getAllBeers = () => axios.get(url + "/beers/all");
//bu yukarda buna eşit: https://ironbeerapi.herokuapp.com/beers/all'dan tüm beerları almak için yapıyoruz

export const getOneBeer = id => axios.get(url + "single/:id");

export const getRandomBeer = () => axios.get(url);
