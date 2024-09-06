const api_key = process.env.REACT_APP_YELP_API_KEY;

const getData = async (term, location, sortBy) => {
    const ravenousUrl = 'https://api.yelp.com/v3';
    const ravenousEndpoint = '/businesses/search';
    const requestParams = `?term=${term}&location=${location}&sort_by=${sortBy}`;
    const urlToFetch = ravenousUrl + ravenousEndpoint + requestParams;
    try {
        const response = await fetch(urlToFetch, {
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse.businesses;
        }
    } catch (error) {
        console.log(error);
    }
    return [];
}

export default getData;