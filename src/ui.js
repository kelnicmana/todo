document.querySelector('.navSvg').addEventListener('click', function() {
    if (document.querySelector('.left').classList.contains('hidden')) {
        document.querySelector('.left').classList.remove('hidden');
    }
    else {
        document.querySelector('.left').classList.add('hidden');
    }
});

export default uiFunctions