<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import Links from "$lib/components/Links.svelte";
  import Aboutme from "$lib/components/about/Aboutme.svelte";
  import Count from "$lib/components/about/Count.svelte";
  import Skills from "$lib/components/about/Skills.svelte";
  import Sertificate from "$lib/components/about/Sertificate.svelte";
  import Resume from "$lib/components/resume/Resume.svelte";
  import Contact from "$lib/components/contact/Contact.svelte";
    import Paticles from "$lib/components/ui/Paticles.svelte";


  const projects = [
    { image: "assets/img/portfolio/rentcar.png", title: "Rent Car", description: "Fullstack Laravel with Filament", link: "../rentcar-details.html" },
    { image: "assets/img/portfolio/blog.png", title: "Website Blog", description: "Fullstack Laravel", link: "blog-details.html" },
    { image: "assets/img/portfolio/medic.png", title: "Medic", description: "Fullstack Laravel", link: "medic-details.html" },
    { image: "assets/img/design/Haircut Diagram.png", title: "Design Graphic - Haircut Diagram", description: "Using Canva" },
    { image: "assets/img/design/Untitled design.png", title: "Design Graphic - Ramadhan", description: "Using Canva" },
    { image: "assets/img/design/Happy Graduations.png", title: "Design Graphic - Graduations", description: "Using Coreldraw" }
  ]

</script>

<!-- <head>
  <title>Hi! Welcome </title>
</head> -->
<div>
  
  <div
    class="fixed flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background"
    >
    <Paticles className="fixed inset-0" refresh={true} />
  </div>
  <div class="bg-black">
    <header id="header" class="text-white">
      <div class="container mx-auto px-4 ">
        <h1 class="text-3xl font-bold mb-2"><a href="/" class="text-white hover:text-gray-300">Muhammad Norshahlan</a></h1>
        <h2 class="text-xl">
          I'm a passionate <span class="text-yellow-400">Fullstack Developer & Graphic Designer</span> from
          Indonesian
        </h2>

        <Navbar />
        <Links />
      </div>
    </header>
    <section id="about" class="about py-12">
      <div class="container mx-auto px-4 rounded-xl bg-red">
        <Aboutme />
        <Count />
        <Skills />
        <div class="testimonials container mx-auto px-4 py-12">
          <div class="section-title text-center mb-8">
            <h2 class="text-3xl font-bold">Sertificates</h2>
          </div>

          <Sertificate />
        </div>
        </div>
    </section>
    <section id="resume" class="resume py-12">
      <div class="container mx-auto px-4 rounded-xl">
      <Resume />
      </div>
    </section>
    <section id="portfolio" class="portfolio py-12">
      <div class="container mx-auto px-4 rounded-xl">
        <div class="section-title text-center mb-8">
          <h2 class="text-3xl font-bold">Portfolio</h2>
          <p class="text-lg">My Works</p>
        </div>

        <div class="flex justify-center mb-8">
          <ul id="portfolio-flters" class="flex space-x-4">
            <li data-filter="*" class="filter-active cursor-pointer px-4 py-2 rounded">Web Applications</li>
            <li data-filter=".filter-app" class="cursor-pointer px-4 py-2 rounded">App</li>
            <li data-filter=".filter-card" class="cursor-pointer px-4 py-2 rounded">Card</li>
            <li data-filter=".filter-web" class="cursor-pointer px-4 py-2 rounded">Web</li>
          </ul>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {#each projects as item}
            <div class="portfolio-item filter-app">
              <div class="portfolio-wrap relative">
                <img src={item.image} class="img-fluid w-full" alt={item.title} />
                <div class="portfolio-info absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                  <h4 class="text-white text-xl font-bold mb-2">{item.title}</h4>
                  <p class="text-white">{item.description}</p>
                   {#if item.link}
                  <div class="flex space-x-2 mt-2">
                    <a aria-label="Open image in new tab"
                      href={item.image}
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title={item.title}><i class="bx bx-plus text-white"></i></a
                    >
                    <a aria-label="Open details in new tab"
                      href={item.link}
                      data-gallery="portfolioDetailsGallery"
                      data-glightbox="type: external"
                      class="portfolio-details-lightbox"
                      title="Portfolio Details"><i class="bx bx-link text-white"></i></a
                    >
                  </div>
                  {/if}
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>
    <section id="contact" class="contact py-12">
      <div class="container mx-auto px-4 rounded-xl">
      <Contact />
      </div>
    </section>
    <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
    <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
    <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
    <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
    <script src="assets/vendor/php-email-form/validate.js"></script>

    <script src="assets/js/main.js"></script>
  </div>
</div>