const left_button = document.getElementById('works_moveLeft');
const right_button = document.getElementById('works_moveRight');
const cards = document.getElementById('work-cards');

let curr_width = 0;
const max_width = (cards.childElementCount - 2) * 360

left_button.addEventListener('click', function () {
    if (curr_width == 0) curr_width = 0;
    else curr_width -= 360;
    // curr_width -= 360;
    cards.style.left = `-${curr_width}px`;
})

right_button.addEventListener('click', function () {
    if (curr_width > max_width) curr_width = 0;
    else curr_width += 360;
    cards.style.left = `-${curr_width}px`;
})