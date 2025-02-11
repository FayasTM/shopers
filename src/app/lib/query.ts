import {groq} from 'next-sanity';

const bannerQuery = groq`*[_type == "banner"] {
    ...
}|order(_createdAt desc)`;

const productsQuery = groq`*[_type == "product"] {
    ...
}|order(_createdAt desc)`;

const bestSellersQuery = groq`*[_type == "product" && bestSeller == true] {
    ...
}|order(_createdAt desc)`;

export {bannerQuery, productsQuery, bestSellersQuery};