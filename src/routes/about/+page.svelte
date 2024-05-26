<script>

  import Count from "$lib/components/about/Count.svelte";
  import Skills from "$lib/components/about/Skills.svelte";
  import Navbar from "$lib/components/Navbar.svelte"

  </script>

    <!-- <section id="about" class="about"> -->
      <Navbar />
        <!-- ======= About Me ======= -->
        <div class="about-me container">
    
          <div class="section-title">
            <h2>About</h2>
            <p>Learn more about me</p>
          </div>
    
          <div class="row">
            <div class="col-lg-4" data-aos="fade-right">
              <img src="assets/img/me.jpg" class="img-fluid" alt="">
            </div>
            <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Fullstack Web Developer &amp; Graphic Designer</h3>
              <p class="fst-italic">
                I am a passionate and creative professional specializing in web development
                and graphic design. With a keen eye for detail and a love for innovative
                solutions, I strive to create visually stunning and highly functional digital
                experiences.
              </p>
              <div class="row">
                <div class="col-lg-6">
                  <ul>
                    <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>mrpinguiiin.github,io</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+62 858 3635 0018</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Whatsapp:</strong> <span>+62 858 3635 0018</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Medan, Indonesian</span></li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>24</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>S1- Information System</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>alansnulien@gmail.com</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>
              <p>
                A Fullstack Web Developer will use their frontend and backend development understanding to create dynamic web applications. 
                Using programming languages such as HTML, CSS and javascript to create the way the user interface looks. 
                On the other hand, a Graphic designer focuses on creating excellent visual designs for branding and marketing. 
                They use software like Adobe Photoshop, Illustrator to create Graphics, Logos and the layout of a page etc. 
                Combining their technical know-how with a creative spin-churn out dynamic digital experiences.
              </p>
            </div>
          </div>
    
        </div>
        <!-- End About Me -->
    
        <!-- ======= Counts ======= -->
        <Count />
        <!-- End Counts -->
        
        <!-- ======= Skills ======= -->
        <Skills />
        <!-- End Skills -->
    
      <!-- </section> -->
      <!-- End About Section -->


