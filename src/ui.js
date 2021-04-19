function togglePopUp() {
    if (document.querySelector('#popUp').classList.contains("show")) {
        document.querySelector('#popUp').classList.remove("show");
    }
    else {
        document.querySelector('#popUp').classList.add("show");
    }
}

document.querySelector('#openPopUp').addEventListener('click', () => {
    togglePopUp();
});

document.querySelector('#closePopUp').addEventListener('click', () => {
    togglePopUp();
});

export default uiFunctions