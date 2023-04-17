/* MICAELA OSTERLUND
================================================================== */




// Moon phases
(function moonPhases() {
  if (document.querySelector('.wax-and-wane')) {
    let phases = document.querySelectorAll('.wax-and-wane img')
    let moon = document.querySelector('.wax-and-wane')
    moon.addEventListener('click', () => {
      for (let i = 0; i < phases.length; i++) {
        let next;
        if (phases[i].classList.contains('active-phase')) {
          phases[i].classList.remove('active-phase')
          i < phases.length - 1 ? next = ++i : next = 0;
          phases[next].classList.add('active-phase')
        }

      }
    })
  }
})();


// Navigation 
(function navigation () {
  if (document.querySelector('.nav-toggle')) {
    let toggle = document.querySelector('.nav-toggle')
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('nav-active')
    })
  }
})();