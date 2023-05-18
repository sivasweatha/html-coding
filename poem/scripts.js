const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

const leftElements = document.querySelectorAll('.left');
leftElements.forEach((el) => observer.observe(el));

const rightElements = document.querySelectorAll('.right');
rightElements.forEach((el) => observer.observe(el));

const centerElements = document.querySelectorAll('.center');
centerElements.forEach((el) => observer.observe(el));