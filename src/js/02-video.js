import Vimeo from "@vimeo/player";

import {throttle } from "lodash";
const video = document.querySelector('iframe');
const player = new Vimeo(video);
const played = async()=>{
    try{
        const time = await player.getCurrentTime();
        localStorage.setItem('current-time' , time);
    } 
    catch(error){
        console.error("el reporductor ha fallado" , error);
    }
};

player.on('play', throttle(played,1000
));

const currentTime = localStorage.getItem("current-time");
currentTime ? player.setCurrentTime(currentTime): null;


