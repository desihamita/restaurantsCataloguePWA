import API_ENDPOINT from '../globals/api-endpoint';

class DbSource {
	static async home() {
		const response = await fetch(API_ENDPOINT.HOME);
		const responseJson = await response.json();
		return responseJson.restaurants;
	}

	static async detail(id) {
		// eslint-disable-next-line new-cap
		const response = await fetch(API_ENDPOINT.DETAIL(id));
		const responseJson = await response.json();
		return responseJson.restaurant;
	}
}

export default DbSource;