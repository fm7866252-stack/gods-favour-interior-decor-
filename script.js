const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('enquiry-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const data = new FormData(this);
  const message = [
    "Hello God's Favour Interior Decor,",
    `My name is ${data.get('name')}.`,
    `My phone number is ${data.get('phone')}.`,
    `Service needed: ${data.get('service')}.`,
    `Project details: ${data.get('message')}`
  ].join('\n');
  const whatsappNumber = '2348105776112';
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});