
let dr = interact('.draggable');
let position = {
    x: 0,
    y: 0
};

dr.draggable({
    startAxis: 'xy',
    lockAxis: 'xy',
    inertia: true,
    modifiers: [
        interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true
        }),
        // interact.modifiers.snap()
    ],
    listeners: {
        start(ev) { console.log(ev) },
        move(ev) {
            position.x = position.x + ev.dx;
            position.y = position.y + ev.dy;
            ev.currentTarget.style.transform = `translate(${position.x}px, ${position.y}px)`;
        },
        end(ev) { console.log(ev) }
    }
});
