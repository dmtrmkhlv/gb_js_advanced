<template>
    <!-- <header>
      <Search v-bind:seacrhShow="1"/>
    </header> -->
    <main class="wrapper">
      <div class="wrapper__top">
        <Header />
        <Nav />
        <section class="fashion content">
          <div class="container fashion__wrapper">
            <div class="fashion__left">
              <div class="fashion__left__line"></div>
              <div class="fashion__left__wrapper">
                <h1 class="h1">THE BRAND</h1>
                <p class="fashion__text">OF LUXURIOUS <span class="pink__letter">FASHION</span></p>
              </div>
            </div>
            <div class="fashion__right"></div>
          </div>
        </section>
        <section class="offer">
          <div class="container offer__wrapper content">
            <div class="offer__left">
              <a href="#" class="offer__card__big offer__hot">
                <div class="offer__card__text">
                  <h3>HOT DEAL</h3>
                  <span class="pink__letter">FORE MEN</span>
                </div>
              </a>
              <a href="#" class="offer__card__small offer__lux">
                <div class="offer__card__text">
                  <h3>LUXURIOUS & TRENDY</h3>
                  <span class="pink__letter">ACCESSORIES</span>
                </div>
              </a>
            </div>
            <div class="offer__right">
              <a href="#" class="offer__card__small offer__sale">
                <div class="offer__card__text">
                  <h3>30% OFFER</h3>
                  <span class="pink__letter">WOMEN</span>
                </div>
              </a>
              <a href="#" class="offer__card__big offer__new">
                <div class="offer__card__text">
                  <h3>NEW ARRIVALS</h3>
                  <span class="pink__letter">FORE KIDS</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section class="items content">
          <h2 class="h2">Featured Items</h2>
          <p class="items__p">Shop for items based on what we featured in this week</p>
          <ShowCase />
          <div class="container">
            <a href="#" class="button">Brows All Product</a>
          </div>
        </section>
        <section class="container banner">
          <a href="#" class="banner__wrapper ">
            <div class="banner__poster">
              <img src="../assets/img/banner_img.jpg" alt="banner" class="banner_img">
              <h2 class="banner__poster__title">30% <span class="pink__letter">OFFER</span></h2>
              <p class="banner__poster__text">FOR WOMAN</p>
            </div>
            <div class="banner__info content">
              <div class="banner__items">
                <div class="banner__item">
                  <img src="../assets/img/auto_icon.png" alt="icon" class="banner__icon">
                  <div class="banner__item__info">
                    <p class="banner__item__info__title">Free Delivery</p>
                    <p class="banner__item__info__about">Worldwide delivery on all. Authorit tively
                      morph
                      next-generation innov tion with extensive models.</p>
                  </div>
                </div>
                <div class="banner__item">
                  <img src="../assets/img/sale_icon.png" alt="icon" class="banner__icon">
                  <div class="banner__item__info">
                    <p class="banner__item__info__title">Sales & discounts</p>
                    <p class="banner__item__info__about">Worldwide delivery on all. Authorit tively
                      morph
                      next-generation innov tion with extensive models.</p>
                  </div>
                </div>
                <div class="banner__item">
                  <img src="../assets/img/crown_icon.png" alt="icon" class="banner__icon">
                  <div class="banner__item__info">
                    <p class="banner__item__info__title">Quality assurance</p>
                    <p class="banner__item__info__about">Worldwide delivery on all. Authorit tively
                      morph
                      next-generation innov tion with extensive models.</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </section>
        <section class="subscribe content">
          <h6>Subscribe</h6>
          <div class="container subscribe__wrapper">
            <div class="subscribe__side subscribe__tabs">
              <input type="radio" name="subscribe__tab" id="subscribe__tab-one">
              <label for="subscribe__tab-one"></label>
              <input type="radio" name="subscribe__tab" id="subscribe__tab-two" checked>
              <label for="subscribe__tab-two"></label>
              <input type="radio" name="subscribe__tab" id="subscribe__tab-three">
              <label for="subscribe__tab-three"></label>
              <div class="subscribe__content">
                <figure class="subscribe__post subscribe__tab-one">
                  <img src="../assets/img/subscribe_photo.jpg" alt="image" class="subscribe__post__img">
                  <div class="subscribe__post__info">
                    <p class="subscribe__post__text">“Lorem ipsum dolor sit amet consectetur adipisicing
                      elit.”
                    </p>
                    <h5 class="subscribe__post__name pink__letter">Bin Burhan</h5>
                    <p class="subscribe__post__about">Dhaka, Bd</p>
                  </div>
                </figure>
                <figure class="subscribe__post subscribe__tab-two">
                  <img src="../assets/img/subscribe_photo.jpg" alt="image" class="subscribe__post__img">
                  <div class="subscribe__post__info">
                    <p class="subscribe__post__text">“Vestibulum quis porttitor dui! Quisque viverra
                      nunc mi,
                      a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”
                    </p>
                    <h5 class="subscribe__post__name pink__letter">Bin Burhan</h5>
                    <p class="subscribe__post__about">Dhaka, Bd</p>
                  </div>
                </figure>
                <figure class="subscribe__post subscribe__tab-three">
                  <img src="../assets/img/subscribe_photo.jpg" alt="image" class="subscribe__post__img">
                  <div class="subscribe__post__info">
                    <p class="subscribe__post__text">“Lorem ipsum dolor sit amet consectetur adipisicing
                      elit.
                      Nam quos sint ad magni, nemo cum!”</p>
                    <h5 class="subscribe__post__name pink__letter">Bin Burhan</h5>
                    <p class="subscribe__post__about">Dhaka, Bd</p>
                  </div>
                </figure>
              </div>
            </div>
            <div class="subscribe__side">
              <form action="#" method="post" class="subscribe__form">
                <h3 class="subscribe__form__title">SUBSCRIBE</h3>
                <p class="subscribe__form__text">FOR OUR NEWSLETTER AND PROMOTION</p>
                <div class="subscribe__form__inputs">
                  <input type="email" name="email" id="email" placeholder="Enter Your Email">
                  <button type="submit" class="subscribe__button">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <div class="wrapper__bottom">
        <Footer />
      </div>
    </main>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  import Header from '@/components/Header.vue'
  import Nav from '@/components/Nav.vue'
  import Footer from '@/components/Footer.vue'
  import Search from '@/components/Search.vue'
  import ShowCase from '@/components/ShowCase.vue'

  export default {
    name: 'Home',
    components: {
      Search,
      ShowCase,
      Header,
      Footer,
      Nav
    }
  }
</script>