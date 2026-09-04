const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.site-nav');

menuButton?.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.innerHTML = `MENU <span aria-hidden="true">${open ? '−' : '+'}</span>`;
});

document.querySelectorAll('.site-nav a').forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.innerHTML = 'MENU <span aria-hidden="true">+</span>';
}));

document.querySelectorAll('.work-trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.work-item');
    const detail = document.getElementById(trigger.getAttribute('aria-controls'));
    const willOpen = trigger.getAttribute('aria-expanded') !== 'true';
    document.querySelectorAll('.work-item').forEach((entry) => {
      entry.classList.remove('active');
      const button = entry.querySelector('.work-trigger');
      const panel = document.getElementById(button.getAttribute('aria-controls'));
      button.setAttribute('aria-expanded', 'false');
      panel.hidden = true;
    });
    if (willOpen) {
      item.classList.add('active');
      trigger.setAttribute('aria-expanded', 'true');
      detail.hidden = false;
    }
  });
});

const form = document.querySelector('.contact-form');
const success = document.querySelector('.form-success');
const error = document.querySelector('.form-error');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    error.hidden = false;
    form.reportValidity();
    return;
  }
  error.hidden = true;
  form.hidden = true;
  success.hidden = false;
});
document.querySelector('.reset-form')?.addEventListener('click', () => {
  form.reset();
  form.hidden = false;
  success.hidden = true;
});
