



class DroppingElement {
    constructor(el) {
        this.el = el;
        this.interactElement = interact(this.el);
        this.initInteract();
    }
    initInteract() {
        this.interactElement.dropzone({
            listeners: {
                enter: (ev) => {
                    console.log(ev);
                },
                move: (ev) => {
                    console.log(ev);
                },
                leave: (ev) => {
                    console.log(ev);
                },
                drop: (ev) => {
                    console.log(ev);
                }
            }
        });
    }
};
let dr = Array.from(document.querySelectorAll('.droppable'));
let drElements = dr.map(dItem => new DroppingElement(dItem));



class DraggingElement {
    constructor(el) {
        this.el = el;
        this.x = 0;
        this.y = 0;
        this.interactElement = interact(this.el);
        this.initInteract();
    }

    initInteract() {
        this.interactElement.draggable({
            inertia: true,
            modifiers: [
                interact.modifiers.restrictRect({
                    restriction: 'parent',
                    endOnly: true
                }),
            ],
            listeners: {
                start: () => {
                    this.el.classList.add('started');
                    dElements.forEach(d => { d.el.style.zIndex = '1' });
                    this.el.style.zIndex = '2';

                },
                move: (ev) => {
                    this.x += ev.delta.x;
                    this.y += ev.delta.y;
                    this.el.style.transform = `translate(${this.x}px, ${this.y}px)`
                },
                end: () => {
                    this.el.classList.remove('started');
                }
            }
        });
    }
}
let d = Array.from(document.querySelectorAll('.draggable'));
let dElements = d.map(dItem => new DraggingElement(dItem));
