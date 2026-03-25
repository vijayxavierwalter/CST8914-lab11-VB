'use strict';

class Accordion {
  constructor(headingEl) {
    this.headingEl = headingEl;
    this.buttonEl = headingEl.querySelector('button[aria-expanded]');

    const controlsId = this.buttonEl.getAttribute('aria-controls');
    this.contentEl = document.getElementById(controlsId);

    this.isOpen = this.buttonEl.getAttribute('aria-expanded') === 'true';

    this.buttonEl.addEventListener('click', () => {
      this.toggle(!this.isOpen);
    });
  }

  toggle(open) {
    if (open === this.isOpen) {
      return;
    }

    this.isOpen = open;
    this.buttonEl.setAttribute('aria-expanded', String(open));

    if (open) {
      this.contentEl.removeAttribute('hidden');
    } else {
      this.contentEl.setAttribute('hidden', '');
    }
  }

  focus() {
    this.buttonEl.focus();
  }
}

const accordionObjects = Array.from(
  document.querySelectorAll('.accordion h3')
).map((headingEl) => new Accordion(headingEl));

accordionObjects.forEach((accordion, index) => {
  accordion.buttonEl.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
      case 'Spacebar':
        event.preventDefault();
        accordion.toggle(!accordion.isOpen);
        break;

      case 'ArrowDown':
        event.preventDefault();
        accordionObjects[(index + 1) % accordionObjects.length].focus();
        break;

      case 'ArrowUp':
        event.preventDefault();
        accordionObjects[
          (index - 1 + accordionObjects.length) % accordionObjects.length
        ].focus();
        break;

      case 'Home':
        event.preventDefault();
        accordionObjects[0].focus();
        break;

      case 'End':
        event.preventDefault();
        accordionObjects[accordionObjects.length - 1].focus();
        break;

      default:
        break;
    }
  });
});