// const style = document.querySelector('head').appendChild(document.createElement('link'))
//   style.rel="stylesheet"
//   style.href = '/style.css'
window.addEventListener('load', function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(function (reg) { console.log('SW registered!', reg); })["catch"](function (err) { return console.log('SW registration FAIL:', err); });
    }
});
var init = function () {
    var inputColor = document.querySelector('input[type=color]');
    inputColor.addEventListener('input', searchColorInput);
    var inputCopu = document.querySelector('input[type=text]');
    inputCopu.addEventListener('click', clipValue);
};
init();
function searchColorInput() {
    var inputColor = document.querySelector('input[type=color]');
    updateCopuInput(inputColor.value);
    return inputColor.value;
}
function updateCopuInput(value) {
    if (value === void 0) { value = '#ff000f'; }
    var inputCopu = document.querySelector('input[type=text]');
    inputCopu.value = value;
    var main = document.getElementById('main');
    main.style.background = value;
}
function clipValue() {
    var inputCopu = document.querySelector('input[type=text]').value;
    navigator.clipboard.writeText(inputCopu)
        .then(function () {
        // Получилось!
        alert("Copu colors ".concat(inputCopu));
    });
}
