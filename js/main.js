/**
 * RestlessQuil — Global scripts & shared data
 */

/** Local image assets (sourced from Unsplash, bundled for reliability) */
const IMG = {
  smartWatch: 'images/smart-watch.jpg',
  wardrobe: 'images/wardrobe.jpg',
  espresso: 'images/espresso.jpg',
  plannerDesk: 'images/planner-desk.jpg',
  phoneApps: 'images/phone-apps.jpg',
  riceFood: 'images/rice-food.jpg',
  journalBooks: 'images/journal-books.jpg',
  fashionNeutral: 'images/fashion-neutral.jpg',
  standingDesk: 'images/standing-desk.jpg',
  writingDesk: 'images/writing-desk.jpg',
  handHealth: 'images/hand-health.jpg',
  chargingDock: 'images/charging-dock.jpg',
  kitchenCooking: 'images/kitchen-cooking.jpg',
  streetStyle: 'images/street-style.jpg',
  coffeeCup: 'images/coffee-cup.jpg',
  morningKitchen: 'images/morning-kitchen.jpg',
  coffeeMorning: 'images/coffee-morning.jpg',
  aboutTeam: 'images/about-team.jpg',
  authorAvatar: 'images/author-avatar.jpg',
  galleryWall: 'images/gallery-wall.jpg',
  murciFashion: 'images/murci-fashion.jpg',
  mintBoutique: 'images/mint-boutique.jpg',
  vekHome: 'images/21vek-home.jpg',
  mauiJim: 'images/maui-jim-sunglasses.jpg',
  lskdActivewear: 'images/lskd-activewear.jpg',
  feelGoodContacts: 'images/feelgood-contacts.jpg'
};

/**
 * Builds post detail URL — hash survives serve clean-URL redirects
 * @param {number} id
 * @returns {string}
 */
function getPostUrl(id) {
  return `post-detail.html?id=${id}#${id}`;
}

/**
 * Reads article id from URL hash or query string
 * @returns {number}
 */
function getPostIdFromUrl() {
  const hashId = parseInt(window.location.hash.replace(/^#/, ''), 10);
  if (hashId >= 1) return hashId;

  const queryId = parseInt(new URLSearchParams(window.location.search).get('id'), 10);
  if (queryId >= 1) return queryId;

  return 1;
}

/** @type {Array<Object>} Article metadata (newest → oldest) */
const ARTICLES = [
  {
    id: 17,
    date: '2026-08-04',
    category: 'product-recs',
    categoryLabel: 'Product Recs',
    title: 'Feel Good Contacts: Expert Advice from Qualified Optometrists',
    image: IMG.feelGoodContacts,
    excerpt: 'I put off switching contact lens suppliers for two years because I assumed online meant no real guidance. Feel Good Contacts changed that — qualified optometrists on hand, prescriptions verified properly, and prices that beat my high-street optician.',
    slug: 'feel-good-contacts-optometrist-advice'
  },
  {
    id: 16,
    date: '2026-07-29',
    category: 'fashion',
    categoryLabel: 'Fashion',
    title: 'LSKD: Functional Fitness Clothing That Moves from Gym to Street',
    image: IMG.lskdActivewear,
    excerpt: 'I used to pack a gym bag and a change of clothes for every workout — until I found activewear that actually looked good outside the studio. LSKD bridges training, running, and everyday wear without the usual compromise.',
    slug: 'lskd-functional-fitness-clothing'
  },
  {
    id: 15,
    date: '2026-07-20',
    category: 'reviews',
    categoryLabel: 'Reviews',
    title: 'Maui Jim: Born on the Beaches of Hawaii, Worn by the World',
    image: IMG.mauiJim,
    excerpt: 'I bought cheap sunglasses for years until a week in Hawaii left me squinting through glare that no dark lens could fix. A local suggested Maui Jim — and the difference in colour clarity was immediate. Born on Lahaina\'s beaches, now on my face daily.',
    slug: 'maui-jim-hawaii-sunglasses'
  },
  {
    id: 11,
    date: '2026-07-06',
    category: 'product-recs',
    categoryLabel: 'Product Recs',
    title: 'Shop Smart, Live Better with 21vek BY',
    image: IMG.vekHome,
    excerpt: 'I spent a weekend comparing prices on everything from a new kettle to a washing machine, and 21vek BY kept surfacing with deals I hadn\'t found elsewhere. The site isn\'t flashy, but the selection and delivery options made furnishing my apartment feel less overwhelming.',
    slug: 'shop-smart-21vek-by'
  },
  {
    id: 12,
    date: '2026-07-04',
    category: 'fashion',
    categoryLabel: 'Fashion',
    title: 'The Murci Woman: Confident, Stylish, Unique',
    image: IMG.murciFashion,
    excerpt: 'I stumbled on Murci while looking for a dress that didn\'t look like every other option on my feed. The brand leans into bold silhouettes and confident colour — the kind of pieces that make you stand taller without trying too hard.',
    slug: 'murci-woman-confident-stylish'
  },
  {
    id: 13,
    date: '2026-07-02',
    category: 'lifestyle',
    categoryLabel: 'Lifestyle',
    title: 'Create a Gallery Wall with Etsy Art Prints',
    image: IMG.galleryWall,
    excerpt: 'My living room had a blank wall that stared at me for months. I finally built a gallery wall using art prints from Etsy — affordable, personal, and way less intimidating than I expected. Here\'s the process that actually worked.',
    slug: 'gallery-wall-etsy-art-prints'
  },
  {
    id: 14,
    date: '2026-07-01',
    category: 'fashion',
    categoryLabel: 'Fashion',
    title: 'The Mint Julep Boutique: Effortless Style for Every Day',
    image: IMG.mintBoutique,
    excerpt: 'I used to overthink every outfit until I found The Mint Julep Boutique. Their everyday pieces — soft dresses, easy tops, relaxed denim — slot into my wardrobe without a styling degree. Effortless is the right word.',
    slug: 'mint-julep-boutique-effortless-style'
  },
  {
    id: 1,
    date: '2026-02-14',
    category: 'tech',
    categoryLabel: 'Tech / Review',
    title: 'I Wore a Smart Ring for 6 Months — Here\'s Why I\'m Not Going Back to a Watch',
    image: IMG.smartWatch,
    excerpt: 'I genuinely thought smart rings were a gimmick until I wore one for half a year. My Apple Watch now sits in a drawer collecting dust, and I\'m not even mad about the $299 I spent. The sleep tracking alone changed how I structure my mornings — though I still hate the charging dock design.',
    slug: 'smart-ring-review'
  },
  {
    id: 2,
    date: '2025-12-28',
    category: 'trends',
    categoryLabel: 'Fashion / Trends',
    title: 'The Slow Death of Fast Fashion: Why I\'m Buying Only 10 Pieces This Year',
    image: IMG.wardrobe,
    excerpt: 'Fast fashion lost its grip on me after I counted 47 unworn items in my closet. This year I\'m limiting myself to ten deliberate purchases, and honestly it feels liberating rather than restrictive. My wallet agrees, even if my impulse-buying brain is still adjusting.',
    slug: 'slow-death-fast-fashion'
  },
  {
    id: 3,
    date: '2025-11-19',
    category: 'food',
    categoryLabel: 'Food / Lifestyle',
    title: 'Honestly, This $500 Espresso Machine Saved My Sanity',
    image: IMG.espresso,
    excerpt: 'I used to spend $6 a day at the café downstairs until I did the math and felt physically ill. The Breville Barista Express wasn\'t cheap, but my morning ritual is now the one part of my day I actually look forward to. The latte art is still terrible, but the coffee is perfect.',
    slug: 'espresso-machine-sanity'
  },
  {
    id: 4,
    date: '2025-10-05',
    category: 'lifestyle',
    categoryLabel: 'Lifestyle',
    title: 'I Tracked Every Hour of My Day for 30 Days. Here\'s What Disgusted Me.',
    image: IMG.plannerDesk,
    excerpt: 'Thirty days of logging every hour revealed I spend nearly four hours daily on mindless scrolling. I wasn\'t shocked — I was embarrassed. The data was ugly, but seeing it written down forced me to confront habits I\'d been politely ignoring for years.',
    slug: 'tracked-every-hour'
  },
  {
    id: 5,
    date: '2025-09-12',
    category: 'platform-guides',
    categoryLabel: 'Tech / Platform Guide',
    title: 'The Only 3 Apps I Actually Paid For This Year (And Why)',
    image: IMG.phoneApps,
    excerpt: 'I deleted 23 subscription apps and kept only three. Not because I\'m frugal — I\'m actually terrible with money — but because most productivity apps solve problems I don\'t have. These three earned their monthly fees by actually changing my workflow.',
    slug: 'three-paid-apps'
  },
  {
    id: 6,
    date: '2025-08-01',
    category: 'food',
    categoryLabel: 'Food',
    title: 'A Weekend in Kyoto Taught Me That I\'ve Been Cooking Rice Wrong My Entire Life',
    image: IMG.riceFood,
    excerpt: 'A ryokan owner in Kyoto watched me rinse rice once and politely took the bowl from my hands. What she showed me in five minutes demolished everything I thought I knew about cooking rice. I\'ve been doing it wrong since college, and the difference is embarrassingly obvious.',
    slug: 'kyoto-rice-wrong'
  },
  {
    id: 7,
    date: '2025-07-17',
    category: 'product-recs',
    categoryLabel: 'Product Recs',
    title: '5 Things Under $50 That I Recommend to Everyone Who Asks',
    image: IMG.journalBooks,
    excerpt: 'People ask me for recommendations constantly, and I always point them to these five items first. None are flashy, but each one solved a specific annoyance in my daily life. The Muji notebook alone has outlasted every fancy planner I\'ve ever bought.',
    slug: 'five-things-under-50'
  },
  {
    id: 8,
    date: '2025-05-30',
    category: 'fashion',
    categoryLabel: 'Fashion',
    title: 'I Stopped Buying Trending Colors. Here\'s What I Wear Instead.',
    image: IMG.fashionNeutral,
    excerpt: 'Trending colors always look incredible on influencers and terrible on me in real lighting. I switched to a neutral palette — cream, olive, charcoal, rust — and my wardrobe finally feels cohesive. I miss wearing bright pink sometimes, but I look put-together more often now.',
    slug: 'stopped-trending-colors'
  },
  {
    id: 9,
    date: '2025-04-08',
    category: 'reviews',
    categoryLabel: 'Reviews',
    title: 'I Tried 4 Standing Desk Converters. Only One Didn\'t End Up on Marketplace.',
    image: IMG.standingDesk,
    excerpt: 'Four standing desk converters, four different disappointments — except one. Three ended up listed on Marketplace within a month because they wobbled, scratched my desk, or required a PhD to adjust. The winner surprised me because it wasn\'t the most expensive option.',
    slug: 'standing-desk-converters'
  },
  {
    id: 10,
    date: '2025-02-22',
    category: 'tech',
    categoryLabel: 'Tech',
    title: 'Why I Deleted Every Productivity App and Started Using Paper',
    image: IMG.writingDesk,
    excerpt: 'I had twelve productivity apps and completed zero tasks consistently. Deleting them all felt reckless, but switching to a single paper notebook was the most productive decision I\'ve made in years. My phone battery lasts longer too, which is a bonus I didn\'t expect.',
    slug: 'deleted-productivity-apps'
  }
];

/** @type {Array<Object>} Featured products for homepage widget */
const FEATURED_PRODUCTS = [
  {
    name: 'Oura Ring Gen 3',
    image: IMG.smartWatch,
    verdict: 'The only wearable I actually wear daily.',
    stars: 4,
    url: '#'
  },
  {
    name: 'Breville Barista Express',
    image: IMG.espresso,
    verdict: 'Worth every penny if you drink coffee daily.',
    stars: 5,
    url: '#'
  },
  {
    name: 'Fully Jarvis Converter',
    image: IMG.standingDesk,
    verdict: 'Stable, quiet, and didn\'t wobble once.',
    stars: 4,
    url: '#'
  }
];

/** @type {Array<Object>} Full product reviews for products page */
const PRODUCT_REVIEWS = [
  {
    brand: 'Oura',
    model: 'Ring Gen 3 — Horizon',
    image: IMG.smartWatch,
    verdict: 'Six months in, I genuinely forget I\'m wearing it — which is exactly what I wanted from a health tracker.',
    pros: ['Incredible sleep data', 'Battery lasts 5–7 days'],
    cons: ['Subscription required for full features', 'Sizing kit is annoying'],
    stars: 4,
    score: 8.4,
    url: '#'
  },
  {
    brand: 'Breville',
    model: 'Barista Express BES870',
    image: IMG.espresso,
    verdict: 'The machine that made me stop going to cafés — and I don\'t regret the $500 at all.',
    pros: ['Consistent espresso shots', 'Built-in grinder saves counter space'],
    cons: ['Learning curve on milk frothing', 'Needs regular cleaning'],
    stars: 5,
    score: 9.2,
    url: '#'
  },
  {
    brand: 'Fully',
    model: 'Jarvis Standing Desk Converter',
    image: IMG.standingDesk,
    verdict: 'After three failed converters, this one actually stayed on my desk.',
    pros: ['Rock-solid stability', 'Smooth height adjustment'],
    cons: ['Heavy to move', 'Premium price point'],
    stars: 4,
    score: 8.7,
    url: '#'
  },
  {
    brand: 'Muji',
    model: 'Recycled Paper Notebook A5',
    image: IMG.journalBooks,
    verdict: 'Twelve dollars for a notebook sounds absurd until you use one for a year.',
    pros: ['Paper feels incredible', 'Lays flat when open'],
    cons: ['No hardcover option in A5', 'Pages aren\'t numbered'],
    stars: 5,
    score: 9.0,
    url: '#'
  }
];

/**
 * Maps category slug to badge CSS class
 * @param {string} category
 * @returns {string}
 */
function getBadgeClass(category) {
  const map = {
    fashion: 'badge-fashion',
    trends: 'badge-trends',
    food: 'badge-food',
    lifestyle: 'badge-lifestyle',
    tech: 'badge-tech',
    reviews: 'badge-reviews',
    'product-recs': 'badge-product-recs',
    'platform-guides': 'badge-platform-guides'
  };
  return map[category] || 'badge-lifestyle';
}

/**
 * Generates star string from count
 * @param {number} count
 * @returns {string}
 */
function renderStars(count) {
  return '★'.repeat(count) + '☆'.repeat(5 - count);
}

/**
 * Loads HTML component via fetch into target element
 * @param {string} componentPath
 * @param {string} targetId
 * @returns {Promise<void>}
 */
async function loadComponent(componentPath, targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;
  try {
    const response = await fetch(componentPath);
    if (!response.ok) throw new Error(`Failed to load ${componentPath}`);
    target.innerHTML = await response.text();
  } catch (err) {
    console.error('Component load error:', err);
  }
}

/**
 * Initializes sticky header nav toggle and active page highlight
 */
function initNavigation() {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav-main');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  const page = document.body.dataset.page;
  if (page) {
    document.querySelectorAll('.nav-main a[data-page]').forEach((link) => {
      if (link.dataset.page === page) link.classList.add('active');
    });
  }
}

/**
 * Back-to-top button — appears after 400px scroll
 */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/**
 * Staggered page-load animation for cards and sections
 */
function initAnimations() {
  const elements = document.querySelectorAll('.animate-in');
  elements.forEach((el, i) => {
    el.style.animationDelay = `${i * 0.1}s`;
  });
}

/**
 * Renders homepage article feed
 */
function initHomeFeed() {
  const feed = document.getElementById('article-feed');
  if (!feed) return;

  const featuredRow = document.createElement('div');
  featuredRow.className = 'feed-featured-row';

  ARTICLES.forEach((article, index) => {
    const isFeatured = index < 2;
    const card = document.createElement('article');
    card.className = `article-card ${isFeatured ? 'featured' : 'compact'} animate-in`;
    card.dataset.category = article.category;
    card.dataset.title = article.title.toLowerCase();

    if (isFeatured) {
      card.innerHTML = `
        <a href="${getPostUrl(article.id)}" class="card-image">
          <img src="${article.image}" alt="${article.title}" width="640" height="400" loading="lazy">
        </a>
        <div class="card-body">
          <div class="card-meta">
            <span class="badge ${getBadgeClass(article.category)}">${article.categoryLabel}</span>
            <time class="card-date">${article.date}</time>
          </div>
          <h2 class="card-title"><a href="${getPostUrl(article.id)}">${article.title}</a></h2>
          <p class="card-excerpt">${article.excerpt}</p>
          <a href="${getPostUrl(article.id)}" class="card-link">Read More →</a>
        </div>`;
      featuredRow.appendChild(card);
    } else {
      card.innerHTML = `
        <a href="${getPostUrl(article.id)}" class="card-thumb">
          <img src="${article.image}" alt="${article.title}" width="120" height="80" loading="lazy">
        </a>
        <div class="card-body">
          <div class="card-meta">
            <span class="badge ${getBadgeClass(article.category)}">${article.categoryLabel}</span>
            <time class="card-date">${article.date}</time>
          </div>
          <h3 class="card-title"><a href="${getPostUrl(article.id)}">${article.title}</a></h3>
          <p class="card-excerpt">${article.excerpt.substring(0, 120)}…</p>
        </div>`;
      feed.appendChild(card);
    }
  });

  if (featuredRow.children.length) {
    feed.insertBefore(featuredRow, feed.firstChild);
  }
}

/**
 * Renders featured products masonry on homepage
 */
async function initFeaturedProducts() {
  const grid = document.getElementById('featured-products');
  if (!grid) return;

  const template = await fetchComponentTemplate('components/product-widget.html');

  FEATURED_PRODUCTS.forEach((product, i) => {
    const card = template ? template.cloneNode(true) : document.createElement('div');
    card.classList.add('product-card', 'animate-in');
    card.style.animationDelay = `${i * 0.1}s`;

    const img = card.querySelector('img');
    const title = card.querySelector('h3');
    const verdict = card.querySelector('.product-verdict');
    const stars = card.querySelector('.product-stars');
    const link = card.querySelector('.product-price-link');

    if (img) {
      img.src = product.image;
      img.alt = product.name;
    }
    if (title) title.textContent = product.name;
    if (verdict) verdict.textContent = product.verdict;
    if (stars) stars.textContent = renderStars(product.stars);
    if (link) {
      link.href = product.url;
      link.target = '_blank';
      link.rel = 'noopener';
    }

    grid.appendChild(card);
  });
}

/**
 * Fetches a component HTML file and returns the inner element
 * @param {string} path
 * @returns {Promise<Element|null>}
 */
async function fetchComponentTemplate(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) return null;
    const html = await response.text();
    const wrapper = document.createElement('div');
    wrapper.innerHTML = html.trim();
    return wrapper.querySelector('article, .product-card') || wrapper.firstElementChild;
  } catch {
    return null;
  }
}

/**
 * Blog page — renders grid and handles filter/search
 */
async function initBlogPage() {
  const grid = document.getElementById('blog-grid');
  if (!grid) return;

  const template = await fetchComponentTemplate('components/post-card.html');

  ARTICLES.forEach((article, i) => {
    const card = template ? template.cloneNode(true) : document.createElement('article');
    if (!template) card.className = 'blog-card';

    card.classList.add('blog-card', 'animate-in');
    card.dataset.category = article.category;
    card.dataset.date = article.date;
    card.dataset.title = article.title.toLowerCase();
    card.style.animationDelay = `${i * 0.1}s`;

    const imgLink = card.querySelector('.card-image') || card;
    const img = card.querySelector('.card-image img') || card.querySelector('img');
    const badge = card.querySelector('.badge');
    const dateEl = card.querySelector('.card-date');
    const titleEl = card.querySelector('.card-title');
    const excerptEl = card.querySelector('.card-excerpt');
    const readLink = card.querySelector('.card-link');

    const postUrl = getPostUrl(article.id);
    card.querySelectorAll('a').forEach((link) => {
      link.href = postUrl;
    });
    if (imgLink.tagName === 'A') imgLink.href = postUrl;
    if (img) {
      img.src = article.image;
      img.alt = article.title;
    }
    if (badge) {
      badge.className = `badge ${getBadgeClass(article.category)}`;
      badge.textContent = article.categoryLabel;
    }
    if (dateEl) dateEl.textContent = article.date;
    if (titleEl) {
      titleEl.innerHTML = `<a href="${postUrl}">${article.title}</a>`;
    }
    if (excerptEl) excerptEl.textContent = article.excerpt;
    if (readLink) readLink.href = postUrl;

    grid.appendChild(card);
  });

  const tabs = document.querySelectorAll('.category-tab');
  const searchInput = document.getElementById('blog-search');
  let activeCategory = 'all';

  /**
   * Filters blog cards by category and search keyword
   */
  function filterCards() {
    const query = (searchInput?.value || '').toLowerCase().trim();
    const cards = grid.querySelectorAll('.blog-card');

    cards.forEach((card) => {
      const matchCategory = activeCategory === 'all' || card.dataset.category === activeCategory;
      const matchSearch = !query || card.dataset.title.includes(query);
      const visible = matchCategory && matchSearch;

      if (!visible) {
        card.classList.add('fade-out');
        card.addEventListener('transitionend', function handler(e) {
          if (e.propertyName === 'opacity') {
            card.classList.add('hidden');
            card.removeEventListener('transitionend', handler);
          }
        });
      } else {
        card.classList.remove('hidden');
        requestAnimationFrame(() => {
          card.classList.remove('fade-out');
        });
      }
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.dataset.category;
      filterCards();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', filterCards);
  }
}

/**
 * Sidebar search filters homepage feed
 */
function initSidebarSearch() {
  const input = document.getElementById('sidebar-search');
  const feed = document.getElementById('article-feed');
  if (!input || !feed) return;

  input.addEventListener('input', () => {
    const query = input.value.toLowerCase().trim();
    feed.querySelectorAll('.article-card').forEach((card) => {
      const title = card.dataset.title || '';
      card.style.display = !query || title.includes(query) ? '' : 'none';
    });
  });
}

/**
 * Products page — renders full review panels
 */
function initProductsPage() {
  const list = document.getElementById('products-list');
  if (!list) return;

  PRODUCT_REVIEWS.forEach((product, i) => {
    const panel = document.createElement('article');
    panel.className = 'product-panel animate-in';
    panel.style.animationDelay = `${i * 0.1}s`;

    const prosHtml = product.pros.map((p) => `<li>${p}</li>`).join('');
    const consHtml = product.cons.map((c) => `<li>${c}</li>`).join('');
    const scorePercent = (product.score / 10) * 100;

    panel.innerHTML = `
      <div class="product-panel-image">
        <img src="${product.image}" alt="${product.brand} ${product.model}" width="800" height="450" loading="lazy">
      </div>
      <div class="product-panel-body">
        <h3>${product.brand} ${product.model}</h3>
        <p class="verdict">${product.verdict}</p>
        <div class="pros-cons-grid">
          <ul class="pros-list">${prosHtml}</ul>
          <ul class="cons-list">${consHtml}</ul>
        </div>
        <div class="score-section">
          <span class="score-stars">${renderStars(product.stars)}</span>
          <span class="score-numeric">${product.score} / 10</span>
          <div class="score-bar">
            <div class="score-bar-fill" style="width:${scorePercent}%"></div>
          </div>
        </div>
        <a href="${product.url}" class="btn btn-primary" target="_blank" rel="noopener">Check Verified Price →</a>
      </div>`;
    list.appendChild(panel);
  });
}

/**
 * Renders a single article on the post detail page
 */
function renderPostDetail() {
  const container = document.getElementById('post-content');
  if (!container) return;

  const id = getPostIdFromUrl();
  const article = ARTICLES.find((a) => a.id === id) || ARTICLES[0];
  const index = ARTICLES.findIndex((a) => a.id === article.id);
  const prevArticle = ARTICLES[index + 1];
  const nextArticle = ARTICLES[index - 1];

  document.title = `${article.title} — RestlessQuil`;

  container.innerHTML = getArticleBody(article.id);

  const headerEl = document.getElementById('post-header-content');
  if (headerEl) {
    headerEl.innerHTML = `
      <div class="post-meta">
        <span class="badge ${getBadgeClass(article.category)}">${article.categoryLabel}</span>
        <time class="card-date">${article.date}</time>
      </div>
      <h1>${article.title}</h1>`;
  }

  const heroImg = document.getElementById('post-hero-img');
  if (heroImg) {
    heroImg.src = article.image;
    heroImg.alt = article.title;
  }

  const navPrev = document.getElementById('nav-prev');
  const navNext = document.getElementById('nav-next');
  if (navPrev && prevArticle) {
    navPrev.style.display = '';
    navPrev.href = getPostUrl(prevArticle.id);
    navPrev.innerHTML = `
      <img src="${prevArticle.image}" alt="" width="64" height="64" loading="lazy">
      <div>
        <span class="nav-label">← Previous</span>
        <span class="nav-title">${prevArticle.title}</span>
      </div>`;
  } else if (navPrev) {
    navPrev.style.display = 'none';
  }

  if (navNext && nextArticle) {
    navNext.style.display = '';
    navNext.href = getPostUrl(nextArticle.id);
    navNext.innerHTML = `
      <div style="text-align:right;">
        <span class="nav-label">Next →</span>
        <span class="nav-title">${nextArticle.title}</span>
      </div>
      <img src="${nextArticle.image}" alt="" width="64" height="64" loading="lazy">`;
  } else if (navNext) {
    navNext.style.display = 'none';
  }

  renderPostRecommendations();
  renderPostSidebar(article);
}

/**
 * Renders sticky sidebar on post detail page
 * @param {Object} currentArticle
 */
function renderPostSidebar(currentArticle) {
  const sidebar = document.getElementById('post-sidebar');
  if (!sidebar) return;

  const related = ARTICLES.filter((a) => a.id !== currentArticle.id).slice(0, 4);

  const relatedHtml = related.map((a) => `
    <li>
      <a href="${getPostUrl(a.id)}">
        <img src="${a.image}" alt="" width="72" height="48" loading="lazy">
        <span class="sidebar-post-meta">
          <span class="badge ${getBadgeClass(a.category)}">${a.categoryLabel}</span>
          <span class="sidebar-post-title">${a.title}</span>
        </span>
      </a>
    </li>`).join('');

  sidebar.innerHTML = `
    <div class="sidebar-widget author-card">
      <img src="${IMG.authorAvatar}" alt="Elena Voss" class="author-avatar" width="72" height="72" loading="lazy">
      <h4 class="author-name">Elena Voss</h4>
      <p class="author-bio">Writer, skeptic, and person who actually tests things before recommending them.</p>
      <div class="social-icons">
        <a href="#" class="social-twitter" aria-label="Twitter">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="#" class="social-instagram" aria-label="Instagram">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        </a>
        <a href="#" class="social-linkedin" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.739v5.867H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11-.001-4.126 2.062 2.062 0 010 4.126zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
      </div>
    </div>
    <div class="sidebar-widget">
      <h3>Keep Reading</h3>
      <ul class="post-sidebar-list">${relatedHtml}</ul>
    </div>
    <div class="sidebar-widget">
      <h3>Popular Tags</h3>
      <div class="tag-cloud">
        <a href="blog.html" class="tag-md">minimalism</a>
        <a href="blog.html" class="tag-sm">espresso</a>
        <a href="blog.html" class="tag-md">tech</a>
        <a href="blog.html" class="tag-sm">fashion</a>
        <a href="blog.html" class="tag-md">productivity</a>
      </div>
    </div>
    <div class="sidebar-widget post-sidebar-cta">
      <h3>Questions?</h3>
      <p>Ask me about a product before you buy — I reply to every message.</p>
      <a href="about.html" class="btn btn-primary">Get in Touch</a>
    </div>
    <div class="sidebar-widget post-sidebar-share">
      <h3>Share This</h3>
      <div class="social-icons">
        <a href="#" class="social-twitter" aria-label="Share on Twitter">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="#" class="social-instagram" aria-label="Share on Instagram">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        </a>
        <a href="#" class="social-linkedin" aria-label="Share on LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.739v5.867H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11-.001-4.126 2.062 2.062 0 010 4.126zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
      </div>
    </div>`;
}

/**
 * Post detail — loads article by id from URL hash or query
 */
function initPostDetail() {
  if (!document.getElementById('post-content')) return;

  renderPostDetail();
  window.addEventListener('hashchange', renderPostDetail);
}

/**
 * Returns full HTML body content for article id
 * @param {number} id
 * @returns {string}
 */
function getArticleBody(id) {
  const bodies = {
    1: `
      <p>I bought the Oura Ring because I was tired of my Apple Watch buzzing me awake at 6 AM with a "time to stand" notification while I was still half asleep. A friend swore the ring was different — quieter, less demanding, more informative. I was skeptical but desperate enough to try anything that might help me sleep better.</p>
      <p>Within the first week, the sleep data alone justified the purchase. I learned I was waking up four to six times a night without realizing it. The ring tracked my heart rate variability, body temperature trends, and readiness scores with a level of detail my watch never offered. I started adjusting my evening routine based on what the data showed, not what some generic wellness article recommended.</p>
      <figure class="figure-float">
        <img src="images/hand-health.jpg" alt="Smart ring on hand" width="400" height="300" loading="lazy">
        <figcaption>The ring is subtle enough that most people don't notice it.</figcaption>
      </figure>
      <p>The activity tracking is less impressive than dedicated sports watches, and I'll admit that openly. If you're training for a marathon, this isn't your device. But for daily movement, step counts, and general activity awareness, it does the job without making me feel like I'm wearing a computer on my wrist.</p>
      <div class="sponsor-widget">
        <span class="sponsor-label">Partner</span>
        <div class="sponsor-logo">OURA</div>
        <div class="sponsor-text">
          <p>Oura offers a 45-day trial on their latest ring — longer than most competitors. Worth trying if you're on the fence.</p>
        </div>
        <a href="#" class="btn btn-primary" target="_blank" rel="noopener">Try Oura →</a>
      </div>
      <p>Charging is my biggest complaint. The ring needs its dock every five to seven days, and the dock itself is easy to lose. I've nearly thrown it out twice thinking it was a random plastic cap. The <a href="#" class="link-product">Oura Ring Gen 3</a> also requires a monthly subscription for full feature access, which still annoys me even after six months.</p>
      <div class="clearfix">
        <p>Would I go back to a watch? Honestly, no. The ring fits my life better. It doesn't compete with my outfits, doesn't buzz during meetings, and doesn't make me feel tethered to a screen. For someone who values data but hates being nagged by devices, it's the best compromise I've found.</p>
      </div>
      <figure class="figure-grid">
        <figure>
          <img src="images/smart-watch.jpg" alt="Ring closeup" width="400" height="300" loading="lazy">
          <figcaption>Close-up of the titanium finish.</figcaption>
        </figure>
        <figure>
          <img src="images/charging-dock.jpg" alt="Charging dock" width="400" height="300" loading="lazy">
          <figcaption>The charging dock — easy to misplace.</figcaption>
        </figure>
      </figure>
      <h2>What I'd Tell a Friend</h2>
      <p>If you care about sleep and hate wearing watches, try the ring. If you need GPS and workout metrics, skip it. And read the <a href="#" class="link-standard">full Oura comparison guide</a> before buying — the subscription model catches people off guard.</p>
      <div class="callout-platform">
        <strong>Platform note:</strong> I bought mine through <a href="#">Oura's official store</a> for the extended trial. Third-party sellers don't always include it.
      </div>`,
    2: `
      <p>I stood in my closet last December and counted 47 items I hadn't worn in over a year. Dresses from impulse purchases, jeans from a trend I never embraced, sweaters that felt right in the store and wrong at home. The pile of unworn clothes wasn't just wasteful — it was a record of every moment I let marketing convince me I needed something new.</p>
      <p>So I made a rule: ten pieces this year. Not ten outfits — ten individual items. A coat, a pair of boots, two shirts, whatever. Each purchase requires a week of consideration and a written justification in my notebook. It sounds extreme, but I've already broken the habit of opening shopping apps when I'm bored.</p>
      <figure class="figure-float right">
        <img src="images/wardrobe.jpg" alt="Minimal wardrobe" width="400" height="300" loading="lazy">
        <figcaption>My entire winter wardrobe fits on one rack now.</figcaption>
      </figure>
      <p>Fast fashion didn't die for me because of ethics alone — though the environmental argument matters. It died because I finally admitted that $25 tops don't make me feel good. They make me feel cheap. The fabrics pill after two washes, the seams twist, and I end up donating them within months anyway.</p>
      <div class="sponsor-widget">
        <span class="sponsor-label">Sponsored</span>
        <div class="sponsor-logo">EVER</div>
        <div class="sponsor-text">
          <p>Everlane's Choose What You Pay sale runs quarterly — I bought my only new coat there this year.</p>
        </div>
        <a href="#" class="btn btn-primary" target="_blank" rel="noopener">Shop Everlane →</a>
      </div>
      <p>What surprised me most was how much mental energy I recovered. Getting dressed takes five minutes now because every item in my closet actually works together. I used to spend twenty minutes trying combinations that never felt right.</p>
      <div class="clearfix">
        <p>I'm not preaching minimalism as a moral superiority thing. I'm saying it solved a problem I didn't know I had — the exhaustion of owning too much stuff I didn't like.</p>
      </div>
      <figure class="figure-grid">
        <figure>
          <img src="images/kitchen-cooking.jpg" alt="Fabric texture" width="400" height="300" loading="lazy">
          <figcaption>Quality fabric lasts — cheap fabric betrays you quickly.</figcaption>
        </figure>
        <figure>
          <img src="images/street-style.jpg" alt="Street style" width="400" height="300" loading="lazy">
          <figcaption>Less stuff, more intention.</figcaption>
        </figure>
      </figure>
      <h2>The Ten-Piece List So Far</h2>
      <p>Three items in, seven to go. A wool coat, leather boots, and a linen shirt. Each one cost more than I'd normally spend, but I wear them constantly. That's the math that actually works.</p>`,
    3: `
      <p>I used to leave my apartment every morning and walk to the café downstairs for a $6 latte. It felt like a small luxury — a ritual, a treat, a reason to leave the house. Then I multiplied $6 by 260 workdays and realized I was spending $1,560 a year on coffee I could make at home.</p>
      <p>The <a href="#" class="link-product">Breville Barista Express</a> wasn't an impulse buy. I researched for three months, read Reddit threads, watched YouTube reviews, and still felt nervous clicking purchase on a $500 machine. My partner thought I was insane. My barista friend thought I was betraying the craft.</p>
      <figure class="figure-float">
        <img src="images/coffee-cup.jpg" alt="Latte art" width="400" height="300" loading="lazy">
        <figcaption>My latte art is improving — slowly.</figcaption>
      </figure>
      <p>Three months later, I haven't been to that café once. The espresso is better than what they served — richer, more balanced, with crema that actually holds. The built-in grinder means I grind fresh beans every morning, and the difference from pre-ground supermarket coffee is not subtle. It's dramatic.</p>
      <div class="sponsor-widget">
        <span class="sponsor-label">Partner</span>
        <div class="sponsor-logo">BRV</div>
        <div class="sponsor-text">
          <p>Breville's refurbished program saved me $120 on my machine — same warranty, barely used.</p>
        </div>
        <a href="#" class="btn btn-primary" target="_blank" rel="noopener">See Refurb Deals →</a>
      </div>
      <p>Learning curve is real, though. My first twenty shots were either too bitter or too sour. Milk frothing took another month of practice before I stopped producing foam that looked like dish soap. I'm still not great at latte art, but the coffee itself is consistently excellent.</p>
      <div class="clearfix">
        <p>Maintenance is the hidden cost nobody mentions. Descaling, cleaning the group head, wiping the steam wand immediately — skip any of these and the machine punishes you. I spend about fifteen minutes a week on upkeep.</p>
      </div>
      <figure class="figure-grid">
        <figure>
          <img src="images/espresso.jpg" alt="Espresso machine" width="400" height="300" loading="lazy">
          <figcaption>The machine dominates my counter — worth the space.</figcaption>
        </figure>
        <figure>
          <img src="images/morning-kitchen.jpg" alt="Morning kitchen" width="400" height="300" loading="lazy">
          <figcaption>Morning ritual: beans, grind, pull, froth.</figcaption>
        </figure>
      </figure>
      <h2>Would I Buy It Again?</h2>
      <p>Absolutely. The machine paid for itself in four months. More importantly, my mornings have a anchor now — something I do with my hands that isn't scrolling. That alone saved my sanity during a stressful quarter at work.</p>
      <div class="callout-platform">
        <strong>Where I bought:</strong> Amazon had the best price, but <a href="#">Breville's site</a> included a free bean sampler that was genuinely good.
      </div>`,
    11: `
      <p>Moving into a new apartment always surfaces the same problem: you need a kettle, a lamp, maybe a vacuum, and suddenly you're juggling six browser tabs comparing prices you don't fully trust. A friend in Minsk mentioned <a href="https://www.linkbux.com/track/74539HiGqCajgt0oy6skDAkUMzy2rI9tQlaIYmA6zGqp_adWmhY_aSWZnwBJzFzab306lc?url=https%3A%2F%2Fwww.21vek.by%2F" class="link-product" target="_blank" rel="noopener">21vek BY</a>, and I spent an evening browsing out of curiosity. I wasn't expecting to actually buy anything — but the site earned a bookmark.</p>
      <p><a href="https://www.linkbux.com/track/74539HiGqCajgt0oy6skDAkUMzy2rI9tQlaIYmA6zGqp_adWmhY_aSWZnwBJzFzab306lc?url=https%3A%2F%2Fwww.21vek.by%2F" class="link-standard" target="_blank" rel="noopener">21vek BY</a> is one of Belarus's largest online retailers — home appliances, electronics, furniture, kitchenware, and even garden equipment under one roof. What impressed me wasn't flashy marketing. It was how straightforward the product pages are: clear specs, honest customer reviews, and delivery options that don't require decoding fine print.</p>
      <figure class="figure-float">
        <img src="images/21vek-home.jpg" alt="Modern kitchen with refrigerator and home appliances" width="400" height="300" loading="lazy">
        <figcaption>From kitchen appliances to living-room electronics — one stop at 21vek BY.</figcaption>
      </figure>
      <p>I started with small purchases to test the waters — a desk lamp, a set of storage boxes, a kettle I'd been putting off buying. Each order arrived on time, packaged properly, and matched the listing photos. That consistency matters more than any discount banner when you're furnishing a space from scratch. The <a href="https://www.linkbux.com/track/74539HiGqCajgt0oy6skDAkUMzy2rI9tQlaIYmA6zGqp_adWmhY_aSWZnwBJzFzab306lc?url=https%3A%2F%2Fwww.21vek.by%2F" class="link-standard" target="_blank" rel="noopener">21vek BY</a> checkout process was simple, and I received SMS updates at every delivery stage.</p>
      <div class="sponsor-widget">
        <span class="sponsor-label">Partner</span>
        <div class="sponsor-logo">21VEK</div>
        <div class="sponsor-text">
          <p>21vek BY runs seasonal promotions on home appliances and electronics — worth checking before a big purchase.</p>
        </div>
        <a href="https://www.linkbux.com/track/74539HiGqCajgt0oy6skDAkUMzy2rI9tQlaIYmA6zGqp_adWmhY_aSWZnwBJzFzab306lc?url=https%3A%2F%2Fwww.21vek.by%2F" class="btn btn-primary" target="_blank" rel="noopener">Shop 21vek BY →</a>
      </div>
      <p>For larger items — a washing machine, a TV, a vacuum cleaner — <a href="https://www.linkbux.com/track/74539HiGqCajgt0oy6skDAkUMzy2rI9tQlaIYmA6zGqp_adWmhY_aSWZnwBJzFzab306lc?url=https%3A%2F%2Fwww.21vek.by%2F" class="link-product" target="_blank" rel="noopener">21vek BY</a> offers installment plans and delivery scheduling that actually work. I compared a fridge across three retailers, and the total cost on 21vek — including delivery and setup — came in lower. Not by a huge margin, but enough to notice.</p>
      <p>The electronics section surprised me most. Laptops, smartphones, headphones, and smart-home devices are all listed with comparable specs and side-by-side brand filters. I spent an hour comparing robot vacuums without feeling lost — something I can't say about most marketplace sites. If you're upgrading your home tech, <a href="https://www.linkbux.com/track/74539HiGqCajgt0oy6skDAkUMzy2rI9tQlaIYmA6zGqp_adWmhY_aSWZnwBJzFzab306lc?url=https%3A%2F%2Fwww.21vek.by%2F" class="link-product" target="_blank" rel="noopener">21vek BY</a> makes the research part bearable.</p>
      <div class="clearfix">
        <p>The site isn't perfect. The search function can feel broad when you know exactly what you want, and some product descriptions read like they were written by engineers for engineers. But if you're patient and willing to read specs, the value is real. Customer support responded within a day when I had a question about warranty coverage on a blender.</p>
      </div>
      <figure class="figure-grid">
        <figure>
          <img src="images/21vek-appliances.jpg" alt="Washing machine and laundry appliances" width="400" height="300" loading="lazy">
          <figcaption>Large appliances with delivery and installation options.</figcaption>
        </figure>
        <figure>
          <img src="images/21vek-shopping.jpg" alt="Shopping for electronics and gadgets online" width="400" height="300" loading="lazy">
          <figcaption>Compare electronics and prices before you commit.</figcaption>
        </figure>
      </figure>
      <h2>Shop Smart, Not Impulsively</h2>
      <p>My rule now: add items to a wishlist, wait 48 hours, then check if <a href="https://www.linkbux.com/track/74539HiGqCajgt0oy6skDAkUMzy2rI9tQlaIYmA6zGqp_adWmhY_aSWZnwBJzFzab306lc?url=https%3A%2F%2Fwww.21vek.by%2F" class="link-standard" target="_blank" rel="noopener">21vek BY</a> has a better price or bundle. Living better doesn't mean buying more — it means buying once, correctly. This platform helped me do that.</p>
      <h2>What I'd Buy Next</h2>
      <p>I'm eyeing a cordless vacuum and a new coffee machine next — both sitting in my <a href="https://www.linkbux.com/track/74539HiGqCajgt0oy6skDAkUMzy2rI9tQlaIYmA6zGqp_adWmhY_aSWZnwBJzFzab306lc?url=https%3A%2F%2Fwww.21vek.by%2F" class="link-standard" target="_blank" rel="noopener">21vek BY</a> wishlist while I wait for a seasonal sale. The point isn't to fill every corner of the apartment immediately. It's to build a home thoughtfully, one reliable purchase at a time.</p>
      <div class="callout-platform">
        <strong>Platform note:</strong> Delivery times vary by region. Check the estimated date on <a href="https://www.linkbux.com/track/74539HiGqCajgt0oy6skDAkUMzy2rI9tQlaIYmA6zGqp_adWmhY_aSWZnwBJzFzab306lc?url=https%3A%2F%2Fwww.21vek.by%2F" target="_blank" rel="noopener">21vek BY</a> before ordering time-sensitive items. Warranty terms are listed on each product page — worth reading before checkout.
      </div>`,
    12: `
      <p>I have a specific frustration with fashion right now: everything looks the same. Scroll through any feed and you'll see the same midi dress, the same neutral palette, the same "effortless" pose in a beige apartment. I wanted something with actual personality — and a friend pointed me toward <a href="https://www.linkbux.com/track/d5991jkCQa3DhnbIeMIkluG7p5FKhR4OZ3fVNX1_aoh7UZ_bHb4SsiGz3V78fZQ3OmuWvkngpL?url=https%3A%2F%2Fwww.murci.co.uk%2F" class="link-product" target="_blank" rel="noopener">Murci</a>.</p>
      <p><a href="https://www.linkbux.com/track/d5991jkCQa3DhnbIeMIkluG7p5FKhR4OZ3fVNX1_aoh7UZ_bHb4SsiGz3V78fZQ3OmuWvkngpL?url=https%3A%2F%2Fwww.murci.co.uk%2F" class="link-standard" target="_blank" rel="noopener">Murci</a> is a UK-based womenswear brand built for women who want to feel confident without dressing like everyone else. Think bold cuts, statement sleeves, rich colours, and silhouettes that photograph well but also work in real life — at dinner, at the office, walking to the tube in the rain.</p>
      <figure class="figure-float right">
        <img src="images/murci-fashion.jpg" alt="Woman in bold Murci-style fashion editorial outfit" width="400" height="300" loading="lazy">
        <figcaption>The Murci aesthetic: polished, bold, and unapologetically feminine.</figcaption>
      </figure>
      <p>I ordered a midi dress first — deep burgundy, structured shoulders, a slit that felt daring without being impractical. The fabric had weight to it. It didn't cling in weird places or billow when the wind picked up. I wore it to a work event and three people asked where it was from. That never happens with my usual online purchases. Browsing the <a href="https://www.linkbux.com/track/d5991jkCQa3DhnbIeMIkluG7p5FKhR4OZ3fVNX1_aoh7UZ_bHb4SsiGz3V78fZQ3OmuWvkngpL?url=https%3A%2F%2Fwww.murci.co.uk%2F" class="link-standard" target="_blank" rel="noopener">Murci</a> new-arrivals page felt like scrolling through a mood board rather than a warehouse sale.</p>
      <div class="sponsor-widget">
        <span class="sponsor-label">Partner</span>
        <div class="sponsor-logo">MURCI</div>
        <div class="sponsor-text">
          <p>Murci releases limited drops regularly — new arrivals sell out fast on popular sizes.</p>
        </div>
        <a href="https://www.linkbux.com/track/d5991jkCQa3DhnbIeMIkluG7p5FKhR4OZ3fVNX1_aoh7UZ_bHb4SsiGz3V78fZQ3OmuWvkngpL?url=https%3A%2F%2Fwww.murci.co.uk%2F" class="btn btn-primary" target="_blank" rel="noopener">Shop Murci →</a>
      </div>
      <p>What defines the <a href="https://www.linkbux.com/track/d5991jkCQa3DhnbIeMIkluG7p5FKhR4OZ3fVNX1_aoh7UZ_bHb4SsiGz3V78fZQ3OmuWvkngpL?url=https%3A%2F%2Fwww.murci.co.uk%2F" class="link-product" target="_blank" rel="noopener">Murci</a> woman? She's not chasing trends — she's choosing pieces that reflect how she wants to feel. Confident. Stylish. Unique. The brand's co-ords and occasion wear are particularly strong: matching sets that look intentional without requiring a stylist.</p>
      <p>My second order was a two-piece co-ord — wide-leg trousers and a cropped blazer in the same jewel-tone fabric. I wore the blazer with jeans the following week and the trousers with a simple white tee. That's the kind of versatility <a href="https://www.linkbux.com/track/d5991jkCQa3DhnbIeMIkluG7p5FKhR4OZ3fVNX1_aoh7UZ_bHb4SsiGz3V78fZQ3OmuWvkngpL?url=https%3A%2F%2Fwww.murci.co.uk%2F" class="link-product" target="_blank" rel="noopener">Murci</a> nails: pieces that feel special but don't demand a single way to wear them.</p>
      <div class="clearfix">
        <p>Sizing runs slightly small on some styles — I learned this the hard way with a fitted blazer. Check the size guide and read reviews from people with a similar build. Returns are straightforward, which gave me confidence to try pieces outside my usual comfort zone. The packaging is clean and minimal, which I appreciate — no excess tissue paper or plastic hangers to throw away.</p>
      </div>
      <figure class="figure-grid">
        <figure>
          <img src="images/murci-dress.jpg" alt="Elegant Murci-style midi dress for occasion wear" width="400" height="300" loading="lazy">
          <figcaption>Occasion dresses with structure and personality.</figcaption>
        </figure>
        <figure>
          <img src="images/murci-style.jpg" alt="Confident woman in bold street style outfit" width="400" height="300" loading="lazy">
          <figcaption>Statement pieces that work beyond the photo shoot.</figcaption>
        </figure>
      </figure>
      <h2>Building a Murci-Inspired Wardrobe</h2>
      <p>If you're new to the brand, start with one hero piece — a dress or a co-ord — and build around it. <a href="https://www.linkbux.com/track/d5991jkCQa3DhnbIeMIkluG7p5FKhR4OZ3fVNX1_aoh7UZ_bHb4SsiGz3V78fZQ3OmuWvkngpL?url=https%3A%2F%2Fwww.murci.co.uk%2F" class="link-standard" target="_blank" rel="noopener">Murci</a> designs tend to carry the outfit, so you don't need much else. A neutral heel, simple jewellery, and you're done.</p>
      <h2>Would I Shop Murci Again?</h2>
      <p>Absolutely. <a href="https://www.linkbux.com/track/d5991jkCQa3DhnbIeMIkluG7p5FKhR4OZ3fVNX1_aoh7UZ_bHb4SsiGz3V78fZQ3OmuWvkngpL?url=https%3A%2F%2Fwww.murci.co.uk%2F" class="link-standard" target="_blank" rel="noopener">Murci</a> isn't the cheapest option on the market, but the pieces earn their place in my wardrobe. I reach for them when I want to feel like the best version of myself — not a copy of someone else's Pinterest board.</p>
      <div class="callout-platform">
        <strong>Shipping note:</strong> International delivery from <a href="https://www.linkbux.com/track/d5991jkCQa3DhnbIeMIkluG7p5FKhR4OZ3fVNX1_aoh7UZ_bHb4SsiGz3V78fZQ3OmuWvkngpL?url=https%3A%2F%2Fwww.murci.co.uk%2F" target="_blank" rel="noopener">Murci</a> typically takes 5–10 business days. Plan ahead for events and check the returns policy before ordering multiple sizes.
      </div>`,
    13: `
      <p>For eight months, the largest wall in my living room stayed blank. Not intentionally — I just couldn't commit to a single piece of art expensive enough to anchor the room. Then I saw a friend's gallery wall on Instagram: mismatched frames, different sizes, art that clearly came from different places. It looked collected over time, not bought in one afternoon. She told me most of it came from <a href="https://www.linkbux.com/track/aac5dkehnPV1yVv_bShbS3KYjhmv2JkVHYHFRUY6SrWV46xbiNwlZVXaozHhkPEfAlCT6KS0b?url=https%3A%2F%2Fwww.etsy.com%2F" class="link-product" target="_blank" rel="noopener">Etsy</a>.</p>
      <p><a href="https://www.linkbux.com/track/aac5dkehnPV1yVv_bShbS3KYjhmv2JkVHYHFRUY6SrWV46xbiNwlZVXaozHhkPEfAlCT6KS0b?url=https%3A%2F%2Fwww.etsy.com%2F" class="link-standard" target="_blank" rel="noopener">Etsy</a> is genuinely the best marketplace I've found for affordable, unique art prints. Independent artists sell digital downloads and physical prints at prices that don't require a gallery budget. You can build an entire gallery wall for less than the cost of one framed poster from a department store.</p>
      <figure class="figure-float">
        <img src="images/gallery-wall.jpg" alt="Living room gallery wall with framed Etsy art prints" width="400" height="300" loading="lazy">
        <figcaption>A gallery wall built with affordable art prints from Etsy sellers.</figcaption>
      </figure>
      <p>My approach was simple. I picked a colour palette first — warm terracotta, sage green, cream, and black line art — then searched <a href="https://www.linkbux.com/track/aac5dkehnPV1yVv_bShbS3KYjhmv2JkVHYHFRUY6SrWV46xbiNwlZVXaozHhkPEfAlCT6KS0b?url=https%3A%2F%2Fwww.etsy.com%2F" class="link-product" target="_blank" rel="noopener">Etsy</a> for art prints that fit. I mixed botanical illustrations, abstract shapes, and one typography piece with a quote I actually liked. Total spent on prints: under $80. Shopping on <a href="https://www.linkbux.com/track/aac5dkehnPV1yVv_bShbS3KYjhmv2JkVHYHFRUY6SrWV46xbiNwlZVXaozHhkPEfAlCT6KS0b?url=https%3A%2F%2Fwww.etsy.com%2F" class="link-standard" target="_blank" rel="noopener">Etsy</a> felt personal — each print came from a real artist with a shop page and reviews, not a faceless warehouse.</p>
      <div class="sponsor-widget">
        <span class="sponsor-label">Partner</span>
        <div class="sponsor-logo">ETSY</div>
        <div class="sponsor-text">
          <p>Etsy art prints are available as instant digital downloads or shipped physical prints — choose based on your timeline and budget.</p>
        </div>
        <a href="https://www.linkbux.com/track/b984KLdeVbMNdyImCEL90823_aKTVfd4Z9fikha8RZvx7_blDmqFW1E7fOc4pF8ftoD3n1Jgpu_abQ_c?url=https%3A%2F%2Fwww.etsy.com%2F" class="btn btn-primary" target="_blank" rel="noopener">Browse Etsy Art →</a>
      </div>
      <p>Framing is where people overspend. I bought inexpensive frames from a home goods store — mixed black, natural wood, and thin brass — in three sizes: 8×10, 11×14, and 16×20. The variety in frame sizes is what makes a gallery wall look intentional rather than uniform. Lay everything on the floor first. Rearrange until it feels balanced, then hang. I used painter's tape to outline each frame position on the wall before touching a nail — a tip I wish I'd known for my first attempt.</p>
      <p>One mistake I made early: buying too many prints in the same size. A gallery wall needs visual rhythm — one large anchor piece, a few medium prints, and smaller fillers to connect them. Once I adjusted my <a href="https://www.linkbux.com/track/aac5dkehnPV1yVv_bShbS3KYjhmv2JkVHYHFRUY6SrWV46xbiNwlZVXaozHhkPEfAlCT6KS0b?url=https%3A%2F%2Fwww.etsy.com%2F" class="link-product" target="_blank" rel="noopener">Etsy</a> cart to include more size variety, the layout came together in one afternoon.</p>
      <div class="clearfix">
        <p>Digital downloads from <a href="https://www.linkbux.com/track/aac5dkehnPV1yVv_bShbS3KYjhmv2JkVHYHFRUY6SrWV46xbiNwlZVXaozHhkPEfAlCT6KS0b?url=https%3A%2F%2Fwww.etsy.com%2F" class="link-standard" target="_blank" rel="noopener">Etsy</a> let you print locally at whatever size you need. I used a print shop for two larger pieces and a decent home printer for smaller ones. Quality was better than I expected on both. Most sellers include multiple file sizes in the download — A4, A3, and sometimes oversized formats for statement pieces.</p>
      </div>
      <figure class="figure-grid">
        <figure>
          <img src="images/gallery-art-prints.jpg" alt="Collection of botanical and abstract art prints" width="400" height="300" loading="lazy">
          <figcaption>Mix botanical, abstract, and typography prints for depth.</figcaption>
        </figure>
        <figure>
          <img src="images/gallery-layout.jpg" alt="Styled living room with curated wall art arrangement" width="400" height="300" loading="lazy">
          <figcaption>A cohesive palette ties mismatched Etsy prints together.</figcaption>
        </figure>
      </figure>
      <h2>My Step-by-Step Process</h2>
      <p>Step one: choose your palette and stick to it. Step two: buy five to seven prints from <a href="https://www.linkbux.com/track/aac5dkehnPV1yVv_bShbS3KYjhmv2JkVHYHFRUY6SrWV46xbiNwlZVXaozHhkPEfAlCT6KS0b?url=https%3A%2F%2Fwww.etsy.com%2F" class="link-product" target="_blank" rel="noopener">Etsy</a>, not fifteen. Step three: lay them out on the floor and photograph the arrangement. Step four: hang the centre piece first, then work outward. It's not complicated — but having a process stops you from overbuying.</p>
      <h2>What I'd Tell a Friend</h2>
      <p>Start small and build over time — that's the whole point of a gallery wall. Search <a href="https://www.linkbux.com/track/aac5dkehnPV1yVv_bShbS3KYjhmv2JkVHYHFRUY6SrWV46xbiNwlZVXaozHhkPEfAlCT6KS0b?url=https%3A%2F%2Fwww.etsy.com%2F" class="link-product" target="_blank" rel="noopener">Etsy</a> by style ("botanical art print," "abstract line art," "vintage landscape") and filter by colour. Read reviews for print quality. And don't match frames perfectly — contrast is your friend.</p>
      <div class="callout-platform">
        <strong>Tip:</strong> Many <a href="https://www.linkbux.com/track/aac5dkehnPV1yVv_bShbS3KYjhmv2JkVHYHFRUY6SrWV46xbiNwlZVXaozHhkPEfAlCT6KS0b?url=https%3A%2F%2Fwww.etsy.com%2F" target="_blank" rel="noopener">Etsy</a> sellers offer bundled art print sets at a discount — a good starting point if you're unsure where to begin. Favourite a few shops and revisit them when you're ready to expand the wall.
      </div>`,
    14: `
      <p>My morning routine used to include standing in front of my closet for ten minutes, pulling out three outfits, and settling for whatever required the fewest decisions. I wanted clothes that looked put-together without a styling session — and a colleague mentioned <a href="https://shopthemint.com/" class="link-product" target="_blank" rel="noopener">The Mint Julep Boutique</a>.</p>
      <p><a href="https://shopthemint.com/" class="link-standard" target="_blank" rel="noopener">The Mint Julep Boutique</a> is an online boutique built around everyday wear that actually feels special. Soft fabrics, flattering cuts, and a colour palette that mixes easily. It's the kind of store where you can buy a dress, a top, and a pair of jeans and know they'll all work together — the Southern-inspired, relaxed elegance the brand is known for.</p>
      <figure class="figure-float right">
        <img src="images/mint-boutique.jpg" alt="Woman in floral midi dress from boutique everyday collection" width="400" height="300" loading="lazy">
        <figcaption>Effortless boutique style — floral dresses and easy everyday pieces.</figcaption>
      </figure>
      <p>I started with a floral midi dress — lightweight, comfortable, with a waist that sits in the right place. I wore it to brunch, to work on a casual Friday, and once with a denim jacket to an outdoor concert. Three occasions, one dress, zero styling stress. That's the promise of <a href="https://shopthemint.com/" class="link-product" target="_blank" rel="noopener">The Mint Julep Boutique</a>, and in my experience, they deliver. The site is easy to navigate by category — dresses, tops, new arrivals — which matters when you're shopping on a lunch break.</p>
      <div class="sponsor-widget">
        <span class="sponsor-label">Partner</span>
        <div class="sponsor-logo">MINT</div>
        <div class="sponsor-text">
          <p>The Mint Julep Boutique adds new arrivals weekly — dresses, tops, and accessories for everyday wear.</p>
        </div>
        <a href="https://shopthemint.com/" class="btn btn-primary" target="_blank" rel="noopener">Shop The Mint →</a>
      </div>
      <p>What sets <a href="https://shopthemint.com/" class="link-standard" target="_blank" rel="noopener">The Mint Julep Boutique</a> apart from fast fashion is consistency. The fabrics feel better. The stitching holds up after multiple washes. The sizing is more predictable — I ordered my usual size in three items and all three fit without alterations. That reliability is worth paying slightly more. I also appreciate that product photos show how pieces actually drape on a real body, not just on a hanger.</p>
      <p>My second order focused on tops — a soft striped tee, a flowy blouse with balloon sleeves, and a casual knit I now wear twice a week. Each piece paired with jeans I already owned, which is exactly what I wanted from <a href="https://shopthemint.com/" class="link-product" target="_blank" rel="noopener">The Mint Julep Boutique</a>: clothes that integrate into an existing wardrobe instead of demanding a full reset.</p>
      <div class="clearfix">
        <p>Their casual range is the real strength: relaxed tees, flowy blouses, easy shorts, and denim that doesn't lose shape after a month. These are clothes for real days — school runs, coffee meetings, grocery trips, date nights — not just photoshoots. The accessories section is worth a browse too — simple earrings and layered necklaces that match the same easy aesthetic.</p>
      </div>
      <figure class="figure-grid">
        <figure>
          <img src="images/mint-outfit.jpg" alt="Casual boutique outfit with relaxed blouse and jeans" width="400" height="300" loading="lazy">
          <figcaption>Everyday tops and blouses that pair with anything.</figcaption>
        </figure>
        <figure>
          <img src="images/mint-casual.jpg" alt="Relaxed everyday summer dress and casual style" width="400" height="300" loading="lazy">
          <figcaption>Comfortable dresses for brunch, work, and weekends.</figcaption>
        </figure>
      </figure>
      <h2>How I Build Outfits Now</h2>
      <p>One dress, one pair of sandals, done. Or a blouse, jeans, and the same earrings every time. <a href="https://shopthemint.com/" class="link-standard" target="_blank" rel="noopener">The Mint Julep Boutique</a> pieces don't need complicated styling — that's the point. I keep a short list of go-to combinations on my phone so I'm not reinventing the wheel at 7 AM.</p>
      <h2>Effortless Style, Honestly</h2>
      <p>I don't believe in wardrobes that require a planning session every morning. <a href="https://shopthemint.com/" class="link-product" target="_blank" rel="noopener">The Mint Julep Boutique</a> gets that. Their pieces slot into what I already own, and I've cut my getting-dressed time in half. If you want style that feels easy — not lazy, but genuinely effortless — this is where I'd start.</p>
      <div class="callout-platform">
        <strong>Shipping note:</strong> <a href="https://shopthemint.com/" target="_blank" rel="noopener">The Mint Julep Boutique</a> offers free shipping on orders over a set threshold — check the site for current promotions before checkout. Sale sections rotate frequently, so it's worth bookmarking if you're waiting for a specific dress.
      </div>`,
    15: `
      <p>I used to treat sunglasses as a seasonal afterthought — grab whatever was on sale at the airport, lose them within a month, repeat. That changed during a trip to Hawaii, where the light hits differently. The ocean glare on Maui's west coast was so intense that my cheap lenses turned everything flat and grey. A snorkel guide noticed me squinting and said, simply, "You need <a href="https://www.linkbux.com/track/df61z_bqN2mVG9C7t9VdytLTjVbAAS_a5vOX_bUijfNp_be7wVm_agk4uuW2KxolvzeKT_bKDBUUnf?url=https%3A%2F%2Fwww.mauijim.com" class="link-product" target="_blank" rel="noopener">Maui Jim</a>."</p>
      <p><a href="https://www.linkbux.com/track/df61z_bqN2mVG9C7t9VdytLTjVbAAS_a5vOX_bUijfNp_be7wVm_agk4uuW2KxolvzeKT_bKDBUUnf?url=https%3A%2F%2Fwww.mauijim.com" class="link-standard" target="_blank" rel="noopener">Maui Jim</a> started in 1980 on the beaches of Lahaina, Maui — born from a simple frustration with sunglasses that dimmed the world without actually protecting it. The brand's PolarizedPlus2 lens technology became the foundation: glare reduction, colour enhancement, and full UV protection in one lens. Today, <a href="https://www.linkbux.com/track/df61z_bqN2mVG9C7t9VdytLTjVbAAS_a5vOX_bUijfNp_be7wVm_agk4uuW2KxolvzeKT_bKDBUUnf?url=https%3A%2F%2Fwww.mauijim.com" class="link-standard" target="_blank" rel="noopener">Maui Jim</a> is worn everywhere from Pacific coastlines to European city streets — but the Hawaiian origin still shows in how the lenses handle bright, reflective light.</p>
      <figure class="figure-float">
        <img src="images/maui-jim-beach.jpg" alt="Hawaiian beach with bright ocean sunlight" width="400" height="300" loading="lazy">
        <figcaption>Born on Hawaii's beaches — where glare demands better lens technology.</figcaption>
      </figure>
      <p>I tried a pair of Ho'okipa readers first — lightweight, rimless, designed for active wear. The moment I put them on, the ocean changed. Blues looked deeper. Greens on the shoreline looked sharper. It wasn't a darker view — it was a clearer one. That's the difference polarized lenses make when they're engineered properly, not just tinted dark.</p>
      <div class="sponsor-widget">
        <span class="sponsor-label">Partner</span>
        <div class="sponsor-logo">MJ</div>
        <div class="sponsor-text">
          <p>Maui Jim offers a two-year warranty against defects and free shipping on orders — worth considering before buying cheaper alternatives.</p>
        </div>
        <a href="https://www.linkbux.com/track/df61z_bqN2mVG9C7t9VdztLTjVbAAS_a5vOX_bUijfNp_be7wVm_agk4uuW2KxolvzeKT_bKDBUUnf?url=https%3A%2F%2Fwww.mauijim.com" class="btn btn-primary" target="_blank" rel="noopener">Shop Maui Jim →</a>
      </div>
      <p>What surprised me was how well <a href="https://www.linkbux.com/track/df61z_bqN2mVG9C7t9VdytLTjVbAAS_a5vOX_bUijfNp_be7wVm_agk4uuW2KxolvzeKT_bKDBUUnf?url=https%3A%2F%2Fwww.mauijim.com" class="link-product" target="_blank" rel="noopener">Maui Jim</a> performed outside Hawaii. Back home, I wore them driving, walking city streets, and sitting on a café patio. The glare off wet pavement and car windshields — the kind that gives me headaches by noon — was cut dramatically. I stopped reaching for my backup pair entirely.</p>
      <p>The frame selection on <a href="https://www.linkbux.com/track/df61z_bqN2mVG9C7t9VdytLTjVbAAS_a5vOX_bUijfNp_be7wVm_agk4uuW2KxolvzeKT_bKDBUUnf?url=https%3A%2F%2Fwww.mauijim.com" class="link-standard" target="_blank" rel="noopener">Maui Jim</a> is broader than I expected. Sport styles like Ho'okipa and Peahi for active days. Classic aviators and wayfarers for everyday. Prescription-ready options if you need them. I browsed by face shape on the site — a small detail, but it saved me from ordering a frame that would have looked wrong on me.</p>
      <div class="clearfix">
        <p>Price is the honest objection. <a href="https://www.linkbux.com/track/df61z_bqN2mVG9C7t9VdytLTjVbAAS_a5vOX_bUijfNp_be7wVm_agk4uuW2KxolvzeKT_bKDBUUnf?url=https%3A%2F%2Fwww.mauijim.com" class="link-product" target="_blank" rel="noopener">Maui Jim</a> isn't cheap. A quality pair runs well above what you'd spend on impulse airport sunglasses. But I've replaced three cheap pairs in two years. One solid pair with proper lenses and a real warranty costs less over time — and my eyes feel noticeably less strained after long days outside.</p>
      </div>
      <figure class="figure-grid">
        <figure>
          <img src="images/maui-jim-sunglasses.jpg" alt="Stylish polarized sunglasses for outdoor wear" width="400" height="300" loading="lazy">
          <figcaption>Polarized lenses that enhance colour instead of flattening it.</figcaption>
        </figure>
        <figure>
          <img src="images/maui-jim-lenses.jpg" alt="Close-up of premium sunglasses lenses" width="400" height="300" loading="lazy">
          <figcaption>Frame styles from sport to classic — all built around the same lens tech.</figcaption>
        </figure>
      </figure>
      <h2>What I'd Tell a Friend</h2>
      <p>If you spend real time outdoors — driving, hiking, near water — don't buy sunglasses based on darkness alone. Look for proper polarization and UV protection. <a href="https://www.linkbux.com/track/df61z_bqN2mVG9C7t9VdytLTjVbAAS_a5vOX_bUijfNp_be7wVm_agk4uuW2KxolvzeKT_bKDBUUnf?url=https%3A%2F%2Fwww.mauijim.com" class="link-standard" target="_blank" rel="noopener">Maui Jim</a> built its reputation on exactly that, starting on Hawaiian beaches where anything less simply didn't work.</p>
      <h2>Would I Buy Again?</h2>
      <p>Without hesitation. Born on the beaches of Hawaii, worn by the world — that tagline sounded like marketing until I tested the lenses myself. Now I understand why people treat <a href="https://www.linkbux.com/track/df61z_bqN2mVG9C7t9VdytLTjVbAAS_a5vOX_bUijfNp_be7wVm_agk4uuW2KxolvzeKT_bKDBUUnf?url=https%3A%2F%2Fwww.mauijim.com" class="link-product" target="_blank" rel="noopener">Maui Jim</a> as a long-term purchase rather than a vacation souvenir.</p>
      <div class="callout-platform">
        <strong>Fit tip:</strong> Use the virtual try-on tool on <a href="https://www.linkbux.com/track/df61z_bqN2mVG9C7t9VdytLTjVbAAS_a5vOX_bUijfNp_be7wVm_agk4uuW2KxolvzeKT_bKDBUUnf?url=https%3A%2F%2Fwww.mauijim.com" target="_blank" rel="noopener">Maui Jim</a> before ordering — frame width matters more than most people realize. Returns are accepted within 30 days if the fit isn't right.
      </div>`,
    16: `
      <p>For years my gym routine included a ritual I didn't question: train in one outfit, shower, change into something presentable, then carry a sweaty bundle to the nearest café. It was inefficient and, honestly, a little embarrassing when I ran into colleagues still in my oversized university gym tee. A trainer mentioned <a href="https://www.linkbux.com/track/afb2m1iuK_bUbugUtpF0f0NbOPEM17y6ocbZHNnBekZZTWS0qF5Fxq1kVuFw0vI3e?url=https%3A%2F%2Fwww.lskd.co%2F" class="link-product" target="_blank" rel="noopener">LSKD</a> — an Australian activewear brand built around the idea that fitness clothing should work as hard in the street as it does in the gym.</p>
      <p><a href="https://www.linkbux.com/track/afb2m1iuK_bUbugUtpF0f0NbOPEM17y6ocbZHNnBekZZTWS0qF5Fxq1kVuFw0vI3e?url=https%3A%2F%2Fwww.lskd.co%2F" class="link-standard" target="_blank" rel="noopener">LSKD</a> organises its collections around three activities — Training, Running, and All Day Active — which sounds like marketing until you actually wear the pieces across all three. The leggings hold up during squats without going sheer. The running shorts don't ride up on a 5K. And the All Day Active range genuinely passes for casual streetwear when you add a jacket and clean trainers.</p>
      <figure class="figure-float right">
        <img src="images/lskd-gym.jpg" alt="Woman training in functional activewear at the gym" width="400" height="300" loading="lazy">
        <figcaption>Built for training — squat-proof leggings and supportive sports bras.</figcaption>
      </figure>
      <p>I started with a pair of black leggings and a medium-support sports bra from the <a href="https://www.linkbux.com/track/afb2m1iuK_bUbugUtpF0f0NbOPEM17y6ocbZHNnBekZZTWS0qF5Fxq1kVuFw0vI3e?url=https%3A%2F%2Fwww.lskd.co%2F" class="link-product" target="_blank" rel="noopener">LSKD</a> womens range. The fabric has enough compression to feel secure without cutting off circulation. No awkward waistband roll during deadlifts. After the gym, I wore the same leggings to grab coffee — and nobody looked at me like I'd forgotten to change. That's the gym-to-street test, and <a href="https://www.linkbux.com/track/afb2m1iuK_bUbugUtpF0f0NbOPEM17y6ocbZHNnBekZZTWS0qF5Fxq1kVuFw0vI3e?url=https%3A%2F%2Fwww.lskd.co%2F" class="link-standard" target="_blank" rel="noopener">LSKD</a> passed it on day one.</p>
      <div class="sponsor-widget">
        <span class="sponsor-label">Partner</span>
        <div class="sponsor-logo">LSKD</div>
        <div class="sponsor-text">
          <p>LSKD runs bundle offers on tees, shorts, and fleece — worth checking before building your first order.</p>
        </div>
        <a href="https://www.linkbux.com/track/afb2m1iuK_bUbugUtpF0f0NbOPEM17y6ocbZHNnBekZZTWS0qF5Fxq1kVuFw0vI3e?url=https%3A%2F%2Fwww.lskd.co%2F" class="btn btn-primary" target="_blank" rel="noopener">Shop LSKD →</a>
      </div>
      <p>The mens range surprised me too — I bought my partner a pair of training shorts and a base tee. He wears the shorts for gym sessions and weekend errands without thinking about it. The fabric wicks sweat properly, which sounds basic but isn't guaranteed at this price point. <a href="https://www.linkbux.com/track/afb2m1iuK_bUbugUtpF0f0NbOPEM17y6ocbZHNnBekZZTWS0qF5Fxq1kVuFw0vI3e?url=https%3A%2F%2Fwww.lskd.co%2F" class="link-product" target="_blank" rel="noopener">LSKD</a> also publishes fabric and fit guides on the site, which helped us both order the right sizes without the usual exchange hassle.</p>
      <p>What I appreciate about the brand philosophy — "1% better every day" — is that it shows up in product details, not just slogans. Seams that don't chafe on long runs. Pockets that actually hold a phone without bouncing. Hoodies warm enough for a post-workout walk home. These are small things, but they're the difference between activewear you tolerate and activewear you reach for.</p>
      <div class="clearfix">
        <p>The site ships internationally with localised pricing for Australia, the US, UK, and other regions. Browse by activity if you're unsure where to start — Training for gym days, Running for cardio, All Day Active for pieces you'll live in outside workouts. The <a href="https://www.linkbux.com/track/afb2m1iuK_bUbugUtpF0f0NbOPEM17y6ocbZHNnBekZZTWS0qF5Fxq1kVuFw0vI3e?url=https%3A%2F%2Fwww.lskd.co%2F" class="link-standard" target="_blank" rel="noopener">LSKD</a> leggings guide alone saved me from ordering the wrong rise.</p>
      </div>
      <figure class="figure-grid">
        <figure>
          <img src="images/lskd-activewear.jpg" alt="Fitness woman in stylish gym and street activewear" width="400" height="300" loading="lazy">
          <figcaption>Functional fitness clothing that transitions from studio to street.</figcaption>
        </figure>
        <figure>
          <img src="images/lskd-street.jpg" alt="Athleisure outfit worn outside the gym" width="400" height="300" loading="lazy">
          <figcaption>All Day Active pieces that work beyond the workout.</figcaption>
        </figure>
      </figure>
      <h2>What I'd Tell a Friend</h2>
      <p>Start with one bottom and one top from the activity you do most. Don't buy a full wardrobe on day one. <a href="https://www.linkbux.com/track/afb2m1iuK_bUbugUtpF0f0NbOPEM17y6ocbZHNnBekZZTWS0qF5Fxq1kVuFw0vI3e?url=https%3A%2F%2Fwww.lskd.co%2F" class="link-product" target="_blank" rel="noopener">LSKD</a> quality is consistent enough that one good set will tell you everything you need to know. Check the bundle offers if you're building a capsule — the 2-for deals on tees and shorts are genuinely useful.</p>
      <h2>Would I Buy Again?</h2>
      <p>Already have. I've added running shorts, a zip hoodie, and a second pair of leggings to my rotation. <a href="https://www.linkbux.com/track/afb2m1iuK_bUbugUtpF0f0NbOPEM17y6ocbZHNnBekZZTWS0qF5Fxq1kVuFw0vI3e?url=https%3A%2F%2Fwww.lskd.co%2F" class="link-standard" target="_blank" rel="noopener">LSKD</a> solved the problem I didn't know how to articulate: I wanted functional fitness clothing that didn't announce "I just left the gym" every time I walked into a coffee shop.</p>
      <div class="callout-platform">
        <strong>Sizing tip:</strong> Use the fit guides on <a href="https://www.linkbux.com/track/afb2m1iuK_bUbugUtpF0f0NbOPEM17y6ocbZHNnBekZZTWS0qF5Fxq1kVuFw0vI3e?url=https%3A%2F%2Fwww.lskd.co%2F" target="_blank" rel="noopener">LSKD</a> for leggings and sports bras — support level and rise height matter more than the size label. Returns are straightforward if something doesn't fit.
      </div>`,
    17: `
      <p>I wore the same brand of daily contact lenses for six years because my high-street optician made switching feel complicated. Reorder in person, wait for a callback, collect from the desk — it was never terrible, just inconvenient enough that I kept putting off price comparisons. A colleague who works in healthcare mentioned <a href="https://www.linkbux.com/track/baccLGTfVYJl75_bf_aF0DCuD9_bgbkgCnprtEjpB5G0CyWtrp3jC_beBL5B5NMt1AI_bx1Gj6pzdJQ_bWUApv?url=https%3A%2F%2Fwww.feelgoodcontacts.com%2F" class="link-product" target="_blank" rel="noopener">Feel Good Contacts</a>, and I was sceptical that an online supplier could match the guidance I got in a physical store.</p>
      <p><a href="https://www.linkbux.com/track/baccLGTfVYJl75_bf_aF0DCuD9_bgbkgCnprtEjpB5G0CyWtrp3jC_beBL5B5NMt1AI_bx1Gj6pzdJQ_bWUApv?url=https%3A%2F%2Fwww.feelgoodcontacts.com%2F" class="link-standard" target="_blank" rel="noopener">Feel Good Contacts</a> is a UK-based online retailer for contact lenses, prescription glasses, and eye care products — staffed by qualified optometrists who verify prescriptions before dispatch. That last detail mattered to me. I didn't want a warehouse shipping lenses from an unverified script. The site checks your prescription against your optician's records, and their team is available for advice if you're unsure about lens type, wearing schedule, or switching brands.</p>
      <figure class="figure-float">
        <img src="images/feelgood-optometrist.jpg" alt="Optometrist providing professional eye care advice" width="400" height="300" loading="lazy">
        <figcaption>Qualified optometrists — not just a checkout page with no support.</figcaption>
      </figure>
      <p>My first order was straightforward. I entered my prescription details, selected my usual daily disposables, and the verification process took a day. An optometrist confirmed everything matched my records before the lenses shipped. The price was noticeably lower than my local optician — roughly 30% less on a three-month supply — without any compromise on brand or expiry dates.</p>
      <div class="sponsor-widget">
        <span class="sponsor-label">Partner</span>
        <div class="sponsor-logo">FGC</div>
        <div class="sponsor-text">
          <p>Feel Good Contacts offers next-day delivery on many lens brands — useful when you realise you're down to your last pair.</p>
        </div>
        <a href="https://www.linkbux.com/track/baccLGTfVYJl75_bf_aF0DCuD9_bgbkgCnprtEjpB5G0CyWtrp3jC_beBL5B5NMt1AI_bx1Gj6pzdJQ_bWUApv?url=https%3A%2F%2Fwww.feelgoodcontacts.com%2F" class="btn btn-primary" target="_blank" rel="noopener">Shop Feel Good Contacts →</a>
      </div>
      <p>What sets <a href="https://www.linkbux.com/track/baccLGTfVYJl75_bf_aF0DCuD9_bgbkgCnprtEjpB5G0CyWtrp3jC_beBL5B5NMt1AI_bx1Gj6pzdJQ_bWUApv?url=https%3A%2F%2Fwww.feelgoodcontacts.com%2F" class="link-product" target="_blank" rel="noopener">Feel Good Contacts</a> apart from generic online pharmacies is the optometrist-led advice. I had questions about switching from monthly to daily lenses — specifically whether my prescription needed adjusting. I used the live chat and got a clear, practical answer within minutes. No upselling. No vague "consult your doctor" deflection. Actual guidance from someone qualified to give it.</p>
      <p>The site also stocks prescription glasses and sunglasses, which I didn't expect to browse but ended up exploring. Virtual try-on tools, frame size guides, and the same optometrist verification on prescriptions. If you wear both contacts and glasses, having one supplier with consistent professional oversight is genuinely convenient.</p>
      <div class="clearfix">
        <p>Subscription reordering is available for contact lenses — set your frequency, get a reminder before you run out, and skip or adjust anytime. I set mine to every 90 days and haven't thought about running out since. The <a href="https://www.linkbux.com/track/baccLGTfVYJl75_bf_aF0DCuD9_bgbkgCnprtEjpB5G0CyWtrp3jC_beBL5B5NMt1AI_bx1Gj6pzdJQ_bWUApv?url=https%3A%2F%2Fwww.feelgoodcontacts.com%2F" class="link-standard" target="_blank" rel="noopener">Feel Good Contacts</a> app makes tracking orders and updating prescriptions easy from a phone.</p>
      </div>
      <figure class="figure-grid">
        <figure>
          <img src="images/feelgood-lenses.jpg" alt="Contact lens case and eye care essentials" width="400" height="300" loading="lazy">
          <figcaption>Daily, monthly, and toric lenses — all prescription-verified.</figcaption>
        </figure>
        <figure>
          <img src="images/feelgood-contacts.jpg" alt="Prescription glasses and eye health products" width="400" height="300" loading="lazy">
          <figcaption>Contact lenses, glasses, and eye care under one roof.</figcaption>
        </figure>
      </figure>
      <h2>What I'd Tell a Friend</h2>
      <p>Don't assume online means unsupported. If your prescription is current and your optician's details are on file, switching to <a href="https://www.linkbux.com/track/baccLGTfVYJl75_bf_aF0DCuD9_bgbkgCnprtEjpB5G0CyWtrp3jC_beBL5B5NMt1AI_bx1Gj6pzdJQ_bWUApv?url=https%3A%2F%2Fwww.feelgoodcontacts.com%2F" class="link-product" target="_blank" rel="noopener">Feel Good Contacts</a> takes about ten minutes. Compare prices on your current brand first — the savings are usually significant. And use the optometrist chat if you're considering any change to lens type or wearing schedule.</p>
      <h2>Would I Reorder?</h2>
      <p>I'm on my fourth order now. Same lenses, same quality, lower cost, and I still have access to qualified optometrists when I need advice. For something as personal as eye care, that combination is exactly what I wanted from an online supplier. <a href="https://www.linkbux.com/track/baccLGTfVYJl75_bf_aF0DCuD9_bgbkgCnprtEjpB5G0CyWtrp3jC_beBL5B5NMt1AI_bx1Gj6pzdJQ_bWUApv?url=https%3A%2F%2Fwww.feelgoodcontacts.com%2F" class="link-standard" target="_blank" rel="noopener">Feel Good Contacts</a> earned my trust by treating prescriptions seriously — not as a formality.</p>
      <div class="callout-platform">
        <strong>Prescription note:</strong> You'll need a valid, in-date prescription to order from <a href="https://www.linkbux.com/track/baccLGTfVYJl75_bf_aF0DCuD9_bgbkgCnprtEjpB5G0CyWtrp3jC_beBL5B5NMt1AI_bx1Gj6pzdJQ_bWUApv?url=https%3A%2F%2Fwww.feelgoodcontacts.com%2F" target="_blank" rel="noopener">Feel Good Contacts</a>. If yours has expired, book an eye test first — the site won't dispatch without verified details, and that's a feature, not a bug.
      </div>`
  };

  const defaultBody = `
    <p>This is one of those stories I didn't expect to write. I started experimenting with something small — a habit, a product, a routine — and it changed how I think about the bigger picture. I'm sharing this because friends keep asking, and I'd rather write it once than repeat myself at every dinner.</p>
    <p>What I learned wasn't revolutionary. It was embarrassingly simple once I saw it clearly. The hard part was paying attention long enough to notice the pattern. Most of us are too busy reacting to stop and observe.</p>
    <figure class="figure-float">
      <img src="images/journal-books.jpg" alt="Lifestyle detail" width="400" height="300" loading="lazy">
      <figcaption>Small details matter more than big gestures.</figcaption>
    </figure>
    <p>I tried the obvious solutions first — apps, gadgets, systems recommended by people with more followers than sense. None of them stuck. What worked was boring, repeatable, and didn't require a subscription.</p>
    <div class="sponsor-widget">
      <span class="sponsor-label">Sponsored</span>
      <div class="sponsor-logo">BRAND</div>
      <div class="sponsor-text">
        <p>A partner I actually use — not just one I'm paid to mention.</p>
      </div>
      <a href="#" class="btn btn-primary" target="_blank" rel="noopener">Learn More →</a>
    </div>
    <p>The <a href="#" class="link-product">product I recommend</a> isn't perfect, but it's the one that survived my skepticism. I still use it daily, which is the only metric that matters to me.</p>
    <div class="clearfix">
      <p>If you're considering a similar change, start smaller than you think. I wasted months trying to overhaul everything when adjusting one habit would have been enough.</p>
    </div>
    <figure class="figure-grid">
      <figure>
        <img src="images/planner-desk.jpg" alt="Detail one" width="400" height="300" loading="lazy">
        <figcaption>The setup that finally worked.</figcaption>
      </figure>
      <figure>
        <img src="images/coffee-morning.jpg" alt="Detail two" width="400" height="300" loading="lazy">
        <figcaption>Context matters more than tools.</figcaption>
      </figure>
    </figure>
    <h2>What I'd Do Differently</h2>
    <p>I'd start sooner and trust my instincts over trending advice. The <a href="#" class="link-standard">resources that helped me</a> were almost all from people who'd actually done the thing — not influencers who'd read about it.</p>
    <div class="callout-platform">
      <strong>Platform tip:</strong> Check <a href="#">this guide</a> before spending money on gear you might not need.
    </div>`;

  return bodies[id] || defaultBody;
}

/**
 * Renders post recommendation cards at article end
 */
function renderPostRecommendations() {
  const container = document.getElementById('post-recommendations');
  if (!container) return;

  container.innerHTML = '';

  const recs = [
    {
      name: 'Oura Ring Gen 3',
      image: IMG.smartWatch,
      stars: 4,
      pros: ['Best sleep tracking', 'Comfortable 24/7 wear'],
      cons: ['Subscription required'],
      url: '#'
    },
    {
      name: 'Breville Barista Express',
      image: IMG.espresso,
      stars: 5,
      pros: ['Built-in grinder', 'Consistent shots'],
      cons: ['Needs regular cleaning'],
      url: '#'
    }
  ];

  recs.forEach((rec) => {
    const card = document.createElement('div');
    card.className = 'rec-card';
    const prosHtml = rec.pros.map((p) => `<li>${p}</li>`).join('');
    const consHtml = rec.cons.map((c) => `<li>${c}</li>`).join('');
    card.innerHTML = `
      <img src="${rec.image}" alt="${rec.name}" width="88" height="88" loading="lazy">
      <div class="rec-card-body">
        <h4>${rec.name}</h4>
        <div class="rec-stars">${renderStars(rec.stars)}</div>
        <div class="rec-pros-cons">
          <ul class="rec-pros">${prosHtml}</ul>
          <ul class="rec-cons">${consHtml}</ul>
        </div>
        <a href="${rec.url}" class="btn btn-outline" target="_blank" rel="noopener">Check Price →</a>
      </div>`;
    container.appendChild(card);
  });
}

/**
 * Contact form floating labels
 */
function initFloatingLabels() {
  const groups = document.querySelectorAll('.form-group');
  groups.forEach((group) => {
    const input = group.querySelector('input, textarea');
    if (!input) return;

    const checkFilled = () => {
      if (input.value.trim()) {
        input.classList.add('filled');
      } else {
        input.classList.remove('filled');
      }
    };

    input.addEventListener('input', checkFilled);
    input.addEventListener('blur', checkFilled);
    checkFilled();
  });

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thanks for reaching out! I\'ll get back to you soon.');
      form.reset();
    });
  }
}

/**
 * Main initialization on DOM ready
 */
async function init() {
  await loadComponent('components/header.html', 'header-placeholder');
  await loadComponent('components/footer.html', 'footer-placeholder');

  if (document.getElementById('sidebar-placeholder')) {
    await loadComponent('components/sidebar.html', 'sidebar-placeholder');
  }

  initNavigation();
  initBackToTop();
  initAnimations();
  initHomeFeed();
  await initFeaturedProducts();
  await initBlogPage();
  initSidebarSearch();
  initProductsPage();
  initPostDetail();
  initFloatingLabels();
}

document.addEventListener('DOMContentLoaded', init);
