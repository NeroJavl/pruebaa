const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('waaaa no lo puedo creer')
    alert('dijistes que sii ')
    alert('*se DESMAYA 🙈')
    alert('XD')
    alert('oieeeeee')
    alert('me haces la persona mas feliz')
    alert('te keloooo 💞✨')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})