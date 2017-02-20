import EventEmitter from "events";
import dispatcher from "../Dispatcher";
import axios from 'axios';
import Country from "../models/Country";

class CountryStore extends EventEmitter {
    constructor() {
        super();
        this.countries = [];
        this.filteredCountries = [];
    }

    fetchData() {
        axios.get('https://restcountries.eu/rest/v1/all')
            .then(function(arr) {
            countryStore.countries = arr.data.map(function(country) {
                return new Country(country);
            });
        }).then(function() {
            countryStore.filteredCountries = Object.assign(countryStore.countries);
            countryStore.emit("fetched");
        });
    }

    filterData(text) {
        countryStore.filteredCountries = Object.assign(countryStore.countries.filter((country) => {
           return country.name.toLowerCase().indexOf(text.toLowerCase()) != -1;
        }));


        countryStore.emit("filtered");
    }

    getAll() {
        return this.filteredCountries;
    }

    handleActions(action) {
        switch (action.type) {
            case 'FETCH_DATA' :
                this.fetchData();
                break;
            case 'SEARCH_ITEMS' :
                this.filterData(action.text);
                break;
            default :
                break;
        }
    }
}



const countryStore = new CountryStore();

countryStore.defaultProps = {
    url  : "https://en.wikipedia.org/wiki/"
};
dispatcher.register(countryStore.handleActions.bind(countryStore));
export default countryStore;