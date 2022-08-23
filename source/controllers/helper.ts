import fetch from 'cross-fetch';

const fetchData = () => {
    return new Promise(async (resolve, reject) => {
        let collectionResponse = await fetch(`https://opendata.ecdc.europa.eu/covid19/vaccine_tracker/json/`);
        collectionResponse = await collectionResponse.json();
        return resolve(collectionResponse);
    });
};
export default fetchData;
