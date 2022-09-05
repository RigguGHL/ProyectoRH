
document.getElementById("menu").onclick = function() {
    document.getElementById("sidenav").classList.remove('hide-bar');
    document.getElementById("dark-back").style.display = 'block';
};

document.getElementById("dark-back").onclick = function() {
    document.getElementById("sidenav").classList.add('hide-bar');
    document.getElementById("dark-back").style.display = 'none';
};