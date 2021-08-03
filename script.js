// Feito para reconhecer todas as teclas digitadas pelo usuário
document.body.addEventListener('keyup',(event)=>{
    playSound(event.code.toLocaleLowerCase() ); //toLocaleLowerCase() usado para retornar todas as teclas apertadas em minusculo
});

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;

    if(song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }

});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);  
    let KeyElement   = document.querySelector(`div[data-key="${sound}"]`);
    
    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(KeyElement) {
        KeyElement.classList.add('active');

        setTimeout(()=>{
            KeyElement.classList.remove('active');
        }, 300);
    }
}

function playComposition(songArray) {
    let wait = 0;

    for(let songItem of songArray) {
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);

        wait+= 400;
    }
}