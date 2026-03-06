const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

/*try*/

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContents => {
            tabContents.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        target.classList.add('active')
        tab.classList.add('active')
    })
})

document.querySelectorAll('.portfolio img').forEach(portfolio__img => {
    portfolio__img.onclick = () => {
        document.querySelector('.popup-image').style.display='block'
        document.querySelector('.popup-image img').src=portfolio__img.getAttribute('src')
    }
})

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display='none'
}


const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { // Show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

// function backToTop() {
//   window.scrollTo(0, 0);
// }

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 150;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};

document.addEventListener('DOMContentLoaded', () => {
  // Show the default main tab-group (Professional)
  const defaultGroup = document.querySelector('#prof');
  defaultGroup.style.display = 'block';

  // Make its first sub-tab active
  const firstTab = defaultGroup.querySelector('.tab');
  if (firstTab) firstTab.classList.add('active');

  // Optional: auto-click the first tab if it triggers more actions
  if (firstTab) firstTab.click();
});

// Existing click handler for main buttons
document.querySelectorAll('.projects-buttons a').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetGroup = document.querySelector(targetId);

    // hide all tab groups
    document.querySelectorAll('.tab-group').forEach(group => {
      group.style.display = 'none';
    });

    // remove active class from all tabs
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));

    // show selected tab group
    targetGroup.style.display = 'block';

    // auto click first tab
    const firstTab = targetGroup.querySelector('.tab');
    if (firstTab) firstTab.click();
  });
});
