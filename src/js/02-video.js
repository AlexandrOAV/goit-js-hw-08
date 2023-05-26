
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
const savedTime = localStorage.getItem('videoplayer-current-time')
reloadPage(savedTime);
player.on('timeupdate', throttle(function (timeupdate) {
    let currentTime = timeupdate.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000));

function reloadPage(time) {
    
    if (time) {
        player.setCurrentTime(time).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
        });
        
    }
};

