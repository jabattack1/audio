var tv ="<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/snow_zpsd3ayaw2w.gif' id='tv'>";
var logo ="<a href=\"/\" class='animated fadeIn' onClick=\"home();return false;\"><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/headphonesINVERTED2_zpsuu9jvfmc.png' id='logo' class='animated slideInDown'></a>";

var AudioBoyInfo ="<div id='gel'><h2 id='audiopeter' class='animated fadeIn'>Audio Boy = Rebel Solo</h2><h2 id='audiodo' class='animated fadeIn'>Audio Boy = Peter Hahn</h2>"
var PeterHahnInfo ="<div id='gel2'><h2 id='peterdo' class='animated fadeIn'>Peter Hahn = Songwriter/Producer/<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspSinger/Musician</h2></div>"
var ContactInfo ="<div id='gel4'><h2 id='contactpeter' class='animated fadeIn'>551 689 3517</h2></div>"
var MV ="<div id='gel3'><iframe class='animated slideInUp' width=\"660\" height=\"415\" src=\"https://www.youtube.com/embed/B_HmvMoca3c\" frameborder=\"0\" allowfullscreen></iframe></div>"
var headshot = "<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/phat_zpsnq9fh8qf.jpg' class='animated fadeIn' id='photo'>";
var RebelSolo ="<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/rebel%20solo%20BG_zps3xicpxkh.jpg' class='animated fadeIn' id='RebelSolo'>";

function home(){
    $('#content').empty();
    $('#video').empty();
    $('#content').append(tv);
}

function AudioBoy(){

    $('#content').empty();
    $('#video').empty();
    $('#content').append(AudioBoyInfo);
}

function PeterHahn(){

    $('#content').empty();
    $('#video').empty();
    $('#content').append(PeterHahnInfo);
    $('#content').append(headshot);
}

function ContactInfor(){

    $('#content').empty();
    $('#video').empty();
    $('#content').append(ContactInfo);
}

function MusicVideo(){

    // $('#content').empty();
    $('#video').empty();
    $('#video').append(MV);
}

function play_microphone(){
    var audio = document.getElementById("audio_microphone");
    audio.play();
    $('#content').empty();
    $('#video').empty();
    $('#content').append(RebelSolo);
}

function pause_microphone(){
    var audio = document.getElementById("audio_microphone");
    audio.pause();
}