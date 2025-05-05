document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
      if (link.hostname === window.location.hostname) {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          const href = this.getAttribute('href');

          document.body.classList.add('fade');
          setTimeout(() => {
            window.location.href = href;
          }, 100);
        });
      }
    });
  });