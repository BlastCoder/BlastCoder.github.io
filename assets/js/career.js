// Links work as ordinary section anchors when JavaScript is unavailable.
const sectionLinks = [...document.querySelectorAll('[data-section-link]')];
const sections = [...document.querySelectorAll('.career-section')];
const sectionAliases = { publications: 'research', achievements: 'education' };

function showSection() {
  const requested = window.location.hash.slice(1);
  const sectionId = sectionAliases[requested] || requested || 'experience';
  const activeSection = sections.find((section) => section.id === sectionId)
    || sections.find((section) => !section.hidden)
    || sections[0];
  if (!activeSection) return;

  sections.forEach((section) => {
    section.hidden = section !== activeSection;
  });
  sectionLinks.forEach((link) => {
    if (link.dataset.sectionLink === activeSection.id) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  });
  document.body.classList.add('has-section-navigation');

  if (requested) {
    requestAnimationFrame(() => {
      document.getElementById(requested)?.scrollIntoView({ block: 'start' });
    });
  }
}

sectionLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (window.location.hash !== link.hash) {
      window.history.pushState(null, '', link.hash);
    }
    showSection();
  });
});
window.addEventListener('hashchange', showSection);
window.addEventListener('popstate', showSection);
showSection();

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
