let trigger = document.querySelector('.trigger');
trigger.addEventListener('click', show);
function show(){
    document.querySelector('.main').classList.toggle('active');
    document.querySelector('.gnb').classList.toggle('active');
    document.querySelector('.trigger').classList.toggle('active');
    document.querySelector('.video_frame').classList.toggle('active');
}