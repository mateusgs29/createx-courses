const divTeam = document.getElementById("team-carousel");

const getDataTeam = () => {
  axios
    .get(url)
    .then((response) => response.data["Course"])
    .then((courses) => {
      courses.map((course) => {
        divTeam.insertAdjacentHTML(
          "beforeend",
          `
          <div class="team">
            <div class="team-image">
              <img src=${course.img[0].url} alt=${course.img[0].title}>
              <div class="team-social-medias">
                <div>
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <div class="team-info">
              ${course.name}
              <span>${course.job}</span>
            </div>
          </div>
        `
        );
      });

      $("#team-carousel").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $("#team-prev"),
        nextArrow: $("#team-next"),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    })
    .catch((err) => console.error(err));
};

getDataTeam();

$(".testimonials-carousel").slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:
    `<button class="btn rounded-circle btn-carousel testimonials-arrow prev-arrow">
      <i class="fas fa-long-arrow-alt-left"></i>
    </button>`,
  nextArrow:
    `<button class="btn rounded-circle btn-carousel testimonials-arrow next-arrow">
      <i class="fas fa-long-arrow-alt-right"></i>
    </button>`,
});
