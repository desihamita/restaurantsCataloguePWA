import TheMovieDbSource from '../../data/db-source';
import {createItemTemplate} from '../templates/template-creator';

const Home = {
	async render() {
		return `
      <div class="content">
        <h2 class="content__heading">Rekomendasi Restaurants</h2>
        <div id="movies" class="restaurants">
        </div>
      </div>
    `;
	},

	async afterRender() {
		const movies = await TheMovieDbSource.home();
		const moviesContainer = document.querySelector('#movies');
		movies.forEach(movie => {
			moviesContainer.innerHTML += createItemTemplate(movie);
		});
	},
};

export default Home;
