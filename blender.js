// Blending Mode Change
[].forEach.call(document.querySelectorAll('.blend-mode-change'), function (el) {
    var target = document.querySelector(el.getAttribute('data-target'));

    el.value = window.getComputedStyle(target).getPropertyValue('-webkit-blend-mode');

    var onchange = function (e) {
        e.preventDefault();
        target.style.webkitBlendMode = e.target.value;
    };

    el.addEventListener('change', onchange, false);
});

// Hue Rotate
[].forEach.call(document.querySelectorAll('[type=range]'), function (el) {
    var imgName = el.getAttribute('data-img'),
        img = document.querySelector('.' + imgName);

    var id = el.getAttribute('id'),
        display = document.querySelector('[data-range=' + id + '] span');

    var onchange = function (e) {
        var val = e.target.value;
        e.preventDefault();
        display.textContent = val;
        img.style.webkitFilter = 'hue-rotate' + '(' + val + 'deg)';
    };

    el.addEventListener('change', onchange, false);
});

// Show/Hide Toggle
[].forEach.call(document.querySelectorAll('.show-hide-toggle'), function (el) {
    var target = document.querySelector(el.getAttribute('data-target'));

    var onchange = function (e) {
        target.classList.toggle('hidden');
    };

    el.addEventListener('change', onchange, false);
});

// Switch between a few of prefilled images
document.getElementById('change-img').addEventListener('change', function (e) {
    e.preventDefault();

    [].forEach.call(document.querySelectorAll('.nyc img'), function (el) {
        el.setAttribute('src', e.target.value);
    });
}, false);

document.getElementById('separate-imgs').addEventListener('change', function (e) {
    document.querySelector('.container').classList.toggle('separate-imgs');
}, false);

[].forEach.call(document.querySelectorAll('.bg-color-change, .color-change'), function (el) {
    var target = document.querySelector(el.getAttribute('data-target')),
        props = {
            'bg-color-change': 'backgroundColor',
            'color-change': 'color'
        }

    var onchange = function (e) {
        target.style[props[e.target.className]] = e.target.value;
    };

    el.addEventListener('change', onchange, false);
});

// document.getElementById('background-color').value = '#e7e7e7';
// document.getElementById('background-color').addEventListener('change', function (e) {
//     document.getElementsByTagName('body')[0].style.backgroundColor = e.target.value;
// }, false);