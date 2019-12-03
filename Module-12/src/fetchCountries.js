'use strict';

export default function(input) {
  return fetch(
    `https://restcountries.eu/rest/v2/name/${input}`,
  ).then(response => response.json());
}
