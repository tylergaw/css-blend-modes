// Blending Mode Change
[].forEach.call(document.querySelectorAll('.blend-mode-change'), function (el) {
    var target = document.querySelector(el.getAttribute('data-target'));

    try {
        el.value = window.getComputedStyle(target).getPropertyValue('-webkit-blend-mode');
    }
    catch (e) {
        console.error('Tryin do something dumb');
    }

    var onchange = function (e) {
        e.preventDefault();
        target.style.webkitBlendMode = e.target.value;
    };

    el.addEventListener('change', onchange, false);
});

// Hue Rotate
// For some reason using hue rotate with blend modes causing the sky to fall.
// No JS errors are thrown, but all blend modes and hue rotate stops working.
// Also, the element that both are applied to does odd things like scale up to
// 200% or so.
//
// [].forEach.call(document.querySelectorAll('[name=hue-change]'), function (el) {
//     var target = document.querySelector(el.getAttribute('data-target')),
//         display = el.parentNode.getElementsByTagName('span')[0];

//     var onchange = function (e) {
//         e.preventDefault();

//         var val = e.target.value;
//         target.style.webkitFilter = 'hue-rotate' + '(' + val + 'deg)';
//         display.textContent = val;
//     };

//     el.addEventListener('change', onchange, false);
// });

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

// Title Color and Background color changing
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