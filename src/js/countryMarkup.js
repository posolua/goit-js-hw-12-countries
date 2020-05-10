import countries from '../templates/countries.hbs';
import country from '../templates/country.hbs';
import refs from './refs';

export default function renderCountries(name) {
  name.length > 1
    ? refs.countriesList.insertAdjacentHTML('beforeend', countries(name))
    : refs.countriesList.insertAdjacentHTML('beforeend', country(name));
}
