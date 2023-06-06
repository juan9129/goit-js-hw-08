import Vimeo from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const asynchronous = async data => {
	try {
		localStorage.setItem('videoplayer-current-time', data.seconds);
	} catch (error) {
		console.error('Error getting the current playing time of the video', error);
	}
};

player.on('timeupdate', throttle(asynchronous, 1000));

const current_Time = localStorage.getItem('videoplayer-current-time');
current_Time ? player.setCurrentTime(current_Time) : null;