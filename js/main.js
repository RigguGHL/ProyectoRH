
document.getElementById("menu").onclick = function() {
    document.getElementById("sidenav").classList.remove('hide-bar');
    document.getElementById("dark-back").style.display = 'block';
};

document.getElementById("dark-back").onclick = function() {
    document.getElementById("sidenav").classList.add('hide-bar');
    document.getElementById("dark-back").style.display = 'none';
};

document.onclick = event => {
    if (event.target.matches('th')) {
        if (event.target.firstElementChild.classList.contains('toggle-up'))
            event.target.firstElementChild.classList.replace('toggle-up', 'toggle-down');
        else 
            event.target.firstElementChild.classList.replace('toggle-down', 'toggle-up');
    }
};

document.getElementById('section1').onclick = function() {
    if (document.getElementById("section1-arrow").classList.contains('arrow-right'))
        document.getElementById("section1-arrow").classList.replace('arrow-right', 'arrow-down');
    else
        document.getElementById("section1-arrow").classList.replace('arrow-down', 'arrow-right');
}

document.getElementById('section2').onclick = function() {
    if (document.getElementById("section2-arrow").classList.contains('arrow-right'))
        document.getElementById("section2-arrow").classList.replace('arrow-right', 'arrow-down');
    else
        document.getElementById("section2-arrow").classList.replace('arrow-down', 'arrow-right');
}