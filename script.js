const whatsappNumber = '62881022140519';
const whatsappBase = 'http://wa.me/62881022140519';

function contactWhatsApp(productName) {
  const message = `Halo DANISH MOTOR WORKSHOP, saya ingin menanyakan ketersediaan ${productName}.`;
  const url = `${whatsappBase}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function bookService(serviceName) {
  const message = `Halo DANISH MOTOR WORKSHOP, saya ingin melakukan booking jasa ${serviceName}.`;
  const url = `${whatsappBase}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', function () {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const navToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  if (navToggler && navbarCollapse) {
    navToggler.addEventListener('click', function () {
      navbarCollapse.classList.toggle('show');
    });

    navbarCollapse.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth < 992) {
          navbarCollapse.classList.remove('show');
          navToggler.classList.add('collapsed');
        }
      });
    });
  }

  const reviews = [
    {
      name: 'Rizky',
      rating: 5,
      text: 'Bengkel yang ramah dan cepat tanggap. Spare partnya lengkap dan mekaniknya jelas menjelaskan masalah motor saya.'
    },
    {
      name: 'Asep',
      rating: 5,
      text: 'Servis motor di sini terasa profesional. Saya juga suka karena ada layanan panggilan ke rumah, sangat membantu untuk jadwal yang padat.'
    },
    {
      name: 'Nanda',
      rating: 5,
      text: 'Lokasinya mudah dijangkau dan prosesnya cepat. Saya datang untuk beli oli dan perlengkapan motor, hasilnya memuaskan.'
    }
  ];

  const reviewGrid = document.getElementById('reviewGrid');
  if (reviewGrid) {
    reviewGrid.innerHTML = reviews.map(function (review) {
      const stars = Array.from({ length: review.rating }, function () {
        return '<i class="bi bi-star-fill"></i>';
      }).join('');

      return `
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="review-card h-100">
            <div class="review-top">
              <div class="review-user">
                <div class="review-avatar">${review.name.charAt(0).toUpperCase()}</div>
                <strong>${review.name}</strong>
              </div>
              <div class="review-rating" aria-label="${review.rating} dari 5 bintang">${stars}</div>
            </div>
            <p>${review.text}</p>
          </div>
        </div>
      `;
    }).join('');
  }
});
