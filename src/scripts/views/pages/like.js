import FavoriteIdb from '../../data/favorite-idb';
import {createItemTemplate} from '../templates/template-creator';

const Like = {
	async render() {
		return `
      <div class="content">
        <h2 class="content__heading">Your Favorite Restaurant</h2>
        <div id="restaurants" class="restaurants" tabindex="0"></div>
      </div>
    `;
	},

	async afterRender() {
		const movies = await FavoriteIdb.getAllRestaurants();
		const moviesContainer = document.querySelector('#restaurants');

		movies.forEach(movie => {
			moviesContainer.innerHTML += createItemTemplate(movie);
		});
	},
};

export default Like;
