


class Draggable {
    constructor(element) {
        this.element = element;
        this.position = {
            x: 0,
            y: 0
        }
        this.initInteract();
    }

    initInteract() {
        const self = this;

        interact(this.element).draggable({
            // lockAxis: 'x',
            inertia: true,
            modifiers: [
                interact.modifiers.restrict({
                    restriction: 'parent',
                    endOnly: true
                })
            ],
            listeners: {
                start(event) {
                    draggableObjects.forEach(d => {
                        d.element.style.zIndex = 1;
                    });
                    event.target.style.zIndex = 2;
                },
                move(event) {
                    self.position.x += event.dx;
                    self.position.y += event.dy;
                    event.target.style.transform = `translate(${self.position.x}px, ${self.position.y}px)`;
                },
                end(event) {
                    console.log('dragged!')
                }
            }
        });
    }
}


let draggables = Array.from(document.querySelectorAll('.draggable'));
let draggableObjects = draggables.map(d => {
    return new Draggable(d);
});
