function toggleClick(button) {
  button.classList.toggle("clicked");
}


function downloadPDF_1st_Card() {
  const pdfUrl = "https://drive.google.com/file/d/10wjz8tUUN8ZEaqyvYxAMtm6rDQpMPXwP/view?usp=sharing";
  window.open(pdfUrl, "_blank");
}
function downloadPDF_2st_Card() {
  const pdfUrl = "https://drive.google.com/file/d/1CTP2ZXqApq-wyCyCP8OBRlFGumoQRFUM/view?usp=drive_link";
  window.open(pdfUrl, "_blank");
}

$('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });
