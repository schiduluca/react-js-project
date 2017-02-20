

class Country {

    constructor(jsonObject) {
        this.jsonObject = jsonObject;
        this.jsonToObject(this.jsonObject);
    }

    jsonToObject(jsonObject) {

        this.name = jsonObject.name;
        this.population = jsonObject.population;
        this.area = jsonObject.area;
        this.url = Country.defaultProps.url + jsonObject.name;
        this.capital = jsonObject.capital;
        this.region = jsonObject.region;
    }
}

Country.defaultProps = {
    url  : "https://en.wikipedia.org/wiki/"
};

export default Country;