import UrlParser from '../../routes/url-parser';
import DbSource from '../../data/db-source';
import {createDetailTemplate} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
	async render() {
		return `
			<div id="restaurant" class="restaurant" tabindex="0"></div>
			<div id="likeButtonContainer"></div>
		`;
	},

	async afterRender() {
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		const restaurant = await DbSource.detail(url.id);
		const restaurantContainer = document.querySelector('#restaurant');
		restaurantContainer.innerHTML = createDetailTemplate(restaurant);

		LikeButtonInitiator.init({
			likeButtonContainer: document.querySelector('#likeButtonContainer'),
			restaurant: {
				id: restaurant.id,
				name: restaurant.name,
				description: restaurant.description,
				pictureId: restaurant.pictureId,
				rating: restaurant.rating,
			},
		});
	},
};

export default Detail;
