var endLoading = function () {
    document.body.style.overflow = 'auto';
    document.getElementById('loader').classList.add("loading");
}
window.addEventListener('load', endLoading);