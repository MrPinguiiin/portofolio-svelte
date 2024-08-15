<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import Links from "$lib/components/Links.svelte";
  
  import Aboutme from "$lib/components/about/Aboutme.svelte";
  import Count from "$lib/components/about/Count.svelte";
  import Skills from "$lib/components/about/Skills.svelte";
  import Sertificate from "$lib/components/about/Sertificate.svelte";
  
  import Resume from "$lib/components/resume/Resume.svelte";
  
  import Contact from "$lib/components/contact/Contact.svelte";

</script>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Hi! Welcome </title>
  <meta content="" name="description">
  <meta content="" name="keywords">
</head>

<body>
  
  
  <!-- ======= Header ======= -->
  <header id="header">
    <div class="container">

      <h1><a href="/">Muhammad Norshahlan</a></h1>
      <h2>I'm a passionate <span>Fullstack Developer & Graphic Designer</span> from Indonesian</h2>

      <Navbar />
      <Links />

    </div>
  </header>
  
  <!-- End Header -->

  <!-- ======= About Section ======= -->
  <section id="about" class="about">

    <!-- ======= About Me ======= -->
    <Aboutme />
    <!-- End About Me -->

    <!-- ======= Counts ======= -->
    <Count />
    <!-- End Counts -->

    <!-- ======= Skills  ======= -->
    <Skills />
    <!-- End Skills -->

    <!-- ======= Testimonials ======= -->
    <div class="testimonials container">

      <div class="section-title">
        <h2>Sertificates</h2>
      </div>

      <Sertificate />

      <div class="owl-carousel testimonials-carousel">

      </div>

    </div>
    <!-- End Testimonials  -->

  </section>
  <!-- End About Section -->

  <!-- ======= Resume Section ======= -->
  <section id="resume" class="resume">
    
    <Resume />

  </section><!-- End Resume Section -->

  <!-- ======= Portfolio Section ======= -->
  <section id="portfolio" class="portfolio">
    <div class="container">

      <div class="section-title">
        <h2>Portfolio</h2>
        <p>My Works</p>
      </div>

      <div class="row">
        <div class="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter="*" class="filter-active">Web Applications</li>
            <!-- <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-card">Card</li>
            <li data-filter=".filter-web">Web</li> -->
          </ul>
        </div>
      </div>

      <div class="row portfolio-container">

        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-wrap">
            <img src="assets/img/portfolio/rentcar.png" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Rent Car</h4>
              <p>Fullstack Laravel with Filament</p>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/rentcar.png" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
                <a href="../rentcar-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Portfolio Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-wrap">
            <img src="assets/img/portfolio/blog.png" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Website Blog</h4>
              <p>Fullstack Laravel</p>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/blog.png" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                <a href="blog-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Portfolio Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-wrap">
            <img src="assets/img/portfolio/medic.png" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Medic</h4>
              <p>Fullstack Laravel</p>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/medic.png" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                <a href="medic-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Portfolio Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-wrap">
            <img src="assets/img/design/Haircut Diagram.png" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Design Graphic - Haircut Diagram</h4>
              <p>Using Canva</p>
            </div>
          </div>
        </div>
        
        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-wrap">
            <img src="assets/img/design/Untitled design.png" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Design Graphic - Ramadhan</h4>
              <p>Using Canva</p>
            </div>
          </div>
        </div>
        
        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-wrap">
            <img src="assets/img/design/Happy Graduations.png" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Design Graphic - Graduations</h4>
              <p>Using Coreldraw</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section><!-- End Portfolio Section -->

  <!-- ======= Contact Section ======= -->
  <section id="contact" class="contact">
    <Contact />
  </section>
  <!-- End Contact Section -->

  <!-- <div class="credits">
    Designed by <a href="https://bootstrapmade.com/">Muhammad Norshah</a>
  </div> -->

  <!-- Vendor JS Files -->
  <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>

</body>

</html>