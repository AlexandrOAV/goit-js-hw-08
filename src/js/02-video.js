
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
const savedTime = localStorage.getItem('videoplayer-current-time')

player.on('timeupdate', throttle(function (timeupdate) {
    console.log(timeupdate.seconds);
    let currentTime = timeupdate.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000));
reloadPage(savedTime);
function reloadPage(time){
if (time) {
    player.setCurrentTime(time);
    }
};

