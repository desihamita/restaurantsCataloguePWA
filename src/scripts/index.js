import 'regenerator-runtime';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import FooterToolsInitiator from './utils/footer-tools-initiator';

import './components/heroElement';

const app = new App({
	button: document.querySelector('#hamburgerButton'),
	drawer: document.querySelector('#navigationDrawer'),
	content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
	app.renderPage();
});

window.addEventListener('load', async () => {
	app.renderPage();
	await swRegister();

	FooterToolsInitiator.init({
		subscribeButton: document.querySelector('#subscribePushNotification'),
		unsubscribeButton: document.querySelector('#unsubscribePushNotification'),
	});
});
