
document.getElementById("menu").onclick = function() {
    document.getElementById("sidenav").classList.remove('hide-bar');
    document.getElementById("dark-back").style.display = 'block';
};

document.getElementById("dark-back").onclick = function() {
    document.getElementById("sidenav").classList.add('hide-bar');
    document.getElementById("dark-back").style.display = 'none';
};

if (document.getElementById('section1')) {
    document.getElementById('section1').onclick = function() {
        if (document.getElementById("section1-arrow").classList.contains('arrow-right'))
            document.getElementById("section1-arrow").classList.replace('arrow-right', 'arrow-down');
        else
            document.getElementById("section1-arrow").classList.replace('arrow-down', 'arrow-right');
    }
}

if (document.getElementById('section2')) {
    document.getElementById('section2').onclick = function() {
        if (document.getElementById("section2-arrow").classList.contains('arrow-right'))
            document.getElementById("section2-arrow").classList.replace('arrow-right', 'arrow-down');
        else
            document.getElementById("section2-arrow").classList.replace('arrow-down', 'arrow-right');
    }
}