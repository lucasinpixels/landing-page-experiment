const components = {
  Header: () => `
    <header class="header">
      <div class="logo-pill">
        <span class="logo-icon">📖</span>
        <span class="logo-text">MindMates</span>
      </div>
      <nav class="nav">
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <a href="#">Community</a>
        <a href="#">About Us</a>
        <a href="#">Blog</a>
      </nav>
      <button class="btn btn-primary">Get Started</button>
    </header>
  `,

  Hero: () => `
    <section class="hero section-light pattern-bg">
      ${components.Header()}
      <div class="floating-card orange top-left">🧑‍🍳</div>
      <div class="floating-card teal top-right">🧘</div>
      <div class="floating-card pink left-mid">👩‍💻</div>
      <div class="floating-card blue right-mid">📷</div>
      <div class="floating-card violet left-bottom">🌿</div>
      <div class="floating-card yellow right-bottom">🗣️</div>

      <div class="hero-content">
        <h1>Learn skills<br />that builds<br />futures</h1>
        <p>
          From painting to public speaking, master new abilities and join a network of
          learners making an impact in their communities.
        </p>
        <div class="hero-actions">
          <button class="btn btn-primary">Start Learning Today</button>
          <button class="btn btn-muted">Browse All Courses</button>
        </div>
      </div>
    </section>
  `,

  SectionTitle: (title, subtitle, bodyClass = "") => `
    <div class="section-title ${bodyClass}">
      <h2>${title}</h2>
      <p>${subtitle}</p>
    </div>
  `,

  ExploreSkills: () => `
    <section class="section-dark explore">
      <div class="blob blue-blob"></div>
      <div class="blob pink-side"></div>
      ${components.SectionTitle(
        "Explore skills you<br />can learn",
        "Whether you're picking up a paintbrush for the first time or fine-tuning your coding abilities, our platform offers hands-on courses taught by passionate experts.<br /><br />You can now discover skills that inspire creativity, build confidence, and open doors."
      )}
      ${components.ImageCards()}
    </section>
  `,

  ImageCards: () => `
    <div class="image-cards">
      <div class="sticker s1">📸</div>
      <div class="sticker s2">💻</div>
      <div class="sticker s3">🎸</div>
      <article class="img-card tilt-left"></article>
      <article class="img-card center"></article>
      <article class="img-card tilt-right"></article>
    </div>
  `,

  StepsSection: () => `
    <section class="section-dark steps">
      <div class="blob orange-left"></div>
      ${components.SectionTitle(
        "Built for real people<br />with busy lives",
        "Our approach is built for real people with busy lives. Pick a skill that excites you, follow guided lessons at your own pace, and join a supportive community that keeps you motivated from day one."
      )}
      <div class="steps-flow">
        <div class="step">
          <div class="icon-wrap">🔎</div>
          <p>Pick your skill</p>
        </div>
        <span class="arrow">➜</span>
        <div class="step">
          <div class="icon-wrap">💻</div>
          <p>Learn your way</p>
        </div>
        <span class="arrow">➜</span>
        <div class="step">
          <div class="icon-wrap">🙂</div>
          <p>Grow together</p>
        </div>
      </div>
    </section>
  `,

  CommunitySection: () => `
    <section class="section-light community-wrap">
      <div class="corner-shape pink"></div>
      <div class="corner-shape aqua"></div>
      <div class="community-card">
        <div class="community-text">
          <h3>Learning Is<br />Better Together</h3>
          <p>
            Connect with learners in your city and around the world. Share your progress,
            collaborate on projects, and join live events that turn learning into a social,
            inspiring experience.
          </p>
          <button class="btn btn-primary">See communities</button>
        </div>
        <div class="community-illustration">👥👤👤👤👥</div>
      </div>
    </section>
  `,

  PartnersSection: () => `
    <section class="section-light partners">
      <div class="leaf"></div>
      <div class="partners-left">
        <h3>Powered by<br />people who care</h3>
        <p>
          We work hand-in-hand with educational institutions, community groups, and
          industry leaders to provide high-quality learning experiences that make a
          difference in real lives.
        </p>
        <div class="arrow-line">➿⟶</div>
      </div>
      <div class="partners-right">
        <div class="partner-card magenta">KFC</div>
        <div class="partner-card cobalt">Swapfiets</div>
        <div class="partner-card orange">dnwb</div>
      </div>
    </section>
  `,

  Testimonials: () => `
    <section class="section-dark testimonials">
      ${components.SectionTitle(
        "What Our<br />Learners Say",
        "From career changes to personal milestones, our learners have stories worth sharing. Hear from people who started right where you are and have gone on to achieve incredible things."
      )}
      <div class="ghost-word">Testimonials</div>
      <div class="notes-grid">
        <article class="note blue">⭐⭐⭐⭐⭐<p>This platform helped me turn my hobby into a real skill in just 3 months!</p><span>-Amara.O.</span></article>
        <article class="note coral">⭐⭐⭐⭐⭐<p>The lessons are clear, engaging, and fit perfectly into my busy schedule.</p><span>-Daniel K</span></article>
        <article class="note gray">⭐⭐⭐⭐⭐<p>I joined to learn coding, but ended up building a network of amazing friends too.</p><span>-Fatima S.</span></article>
        <article class="note yellow">⭐⭐⭐⭐⭐<p>Every course feels practical — I apply what I learn immediately at work.</p><span>-James T.</span></article>
      </div>
    </section>
  `,

  CTASection: () => `
    <section class="section-light cta-wrap">
      <div class="cta-card">
        <div class="cta-left">
          <h3>Ready to<br />Start Learning?</h3>
          <p>
            Join thousands of learners already transforming their lives. Choose your first
            course, meet your community, and take your next big step today.
          </p>
          <button class="btn btn-primary">Start Learning Now</button>
        </div>
        <div class="cta-right">✏️🏃🏃</div>
      </div>
    </section>
  `,

  Footer: () => `
    <footer class="footer section-light">
      <div class="footer-top">
        <div>
          <div class="brand">
            <span class="logo-icon">📖</span>
            <div>
              <h4>MindMates</h4>
              <small>Learning made human</small>
            </div>
          </div>
          <p class="social-title">Follow us on</p>
          <p class="socials">▶️  in  🦋  𝕏</p>
        </div>

        <div class="footer-col">
          <h5>Learn</h5>
          <a href="#">Courses</a><a href="#">How it works</a><a href="#">Community</a><a href="#">Events</a>
        </div>

        <div class="footer-col">
          <h5>Help & Legal</h5>
          <a href="#">FAQs</a><a href="#">Contact</a><a href="#">Privacy Policy</a><a href="#">Terms of Use</a><a href="#">Accessibility</a>
        </div>
      </div>

      <div class="footer-mid">
        <span>Crafted with 💚 for learners everywhere.</span>
        <span>© 2025 MindMates. All rights reserved</span>
      </div>

      <div class="footer-illustration">
        <span class="bg-word">MindMates</span>
        <div class="characters">📚 👧👦 🎨 💻 ☂️ ⭐</div>
      </div>
    </footer>
  `,
};

document.querySelector("#app").innerHTML = `
  <main class="page-frame">
    ${components.Hero()}
    ${components.ExploreSkills()}
    ${components.StepsSection()}
    ${components.CommunitySection()}
    ${components.PartnersSection()}
    ${components.Testimonials()}
    ${components.CTASection()}
    ${components.Footer()}
  </main>
`;
