import './style.css'

const properties = [
  {
    id: 'ikoyi-penthouse',
    title: 'Skyline Penthouse',
    location: 'Ikoyi, Lagos',
    price: 850000000,
    type: 'Penthouse',
    beds: 5,
    baths: 6,
    area: 7200,
    yearBuilt: 2024,
    featured: true,
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1400&q=80',
    ],
    description:
      'A double-level penthouse designed for buyers who want dramatic skyline views, hotel-style finishes, and private entertaining spaces in one of Lagos most prestigious districts.',
    longDescription:
      'From the arrival experience to the final rooftop edge, every space in this penthouse is shaped around privacy, prestige, and luminous natural light. Sculpted stone surfaces, full-height glazing, and carefully zoned entertaining rooms create a home that feels equal parts residence and private members club.',
    amenities: ['Private cinema', 'Infinity terrace pool', 'Smart home controls', 'Wine lounge', '24/7 concierge'],
    tags: ['Waterfront skyline', 'Ultra-prime', 'Private lift access'],
    agent: {
      name: 'Amara Okafor',
      role: 'Senior Luxury Advisor',
      phone: '+234 803 555 0184',
      email: 'amara@primenest.com',
    },
  },
  {
    id: 'lekki-villa',
    title: 'Atlantic Garden Villa',
    location: 'Lekki Phase 1, Lagos',
    price: 425000000,
    type: 'Villa',
    beds: 4,
    baths: 5,
    area: 5100,
    yearBuilt: 2023,
    featured: true,
    image:
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600566752227-8f3b5f0af6cf?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80',
    ],
    description:
      'This modern villa blends calm coastal architecture with family-friendly flow, offering lush outdoor living, airy interiors, and quick access to top schools and dining.',
    longDescription:
      'The plan was designed for elegant family living, with layered indoor-outdoor zones, a statement staircase, and soft modern finishes that photograph beautifully while still feeling warm in person. It is the kind of home that sells aspiration without sacrificing functionality.',
    amenities: ['Garden court', 'Chef kitchen', 'Security post', 'Rooftop lounge', '2-car garage'],
    tags: ['Family-ready', 'Entertaining terrace', 'Prime Lekki'],
    agent: {
      name: 'Tobi Adebayo',
      role: 'Property Consultant',
      phone: '+234 803 555 0211',
      email: 'tobi@primenest.com',
    },
  },
  {
    id: 'asokoro-duplex',
    title: 'Embassy View Duplex',
    location: 'Asokoro, Abuja',
    price: 310000000,
    type: 'Duplex',
    beds: 4,
    baths: 4,
    area: 4300,
    yearBuilt: 2022,
    featured: false,
    image:
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600566753052-c5e3d6b422ef?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=80',
    ],
    description:
      'Set in a serene diplomatic enclave, this duplex delivers polished interiors, generous ensuite bedrooms, and the kind of privacy high-level buyers expect.',
    longDescription:
      'Asokoro buyers often balance status, security, and calm. This residence handles all three with refined simplicity, offering reception spaces that feel dignified, a private family wing, and an arrival sequence that immediately signals quality.',
    amenities: ['Home office', 'Backup power', 'Gym room', 'Water treatment', 'Guest suite'],
    tags: ['Diplomatic district', 'Quiet enclave', 'Executive residence'],
    agent: {
      name: 'Zainab Yusuf',
      role: 'Abuja Market Specialist',
      phone: '+234 803 555 0458',
      email: 'zainab@primenest.com',
    },
  },
  {
    id: 'victoria-island-apartment',
    title: 'Marina Edge Residence',
    location: 'Victoria Island, Lagos',
    price: 265000000,
    type: 'Apartment',
    beds: 3,
    baths: 3,
    area: 2900,
    yearBuilt: 2025,
    featured: true,
    image:
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80',
    ],
    description:
      'A premium apartment tailored for city professionals who want waterfront prestige, refined shared amenities, and an easy lock-up-and-leave lifestyle.',
    longDescription:
      'This residence feels tailored to internationally mobile buyers who value convenience as much as status. Strong amenities, efficient planning, and a sleek marina-facing identity make it compelling for both owner-occupiers and yield-focused investors.',
    amenities: ['Sea-facing balcony', 'Residents lounge', 'Valet service', 'Pool deck', 'Fitness studio'],
    tags: ['Investor appeal', 'Waterfront living', 'Turnkey luxury'],
    agent: {
      name: 'Dami Koleoso',
      role: 'Investment Advisor',
      phone: '+234 803 555 0190',
      email: 'dami@primenest.com',
    },
  },
  {
    id: 'maitama-townhouse',
    title: 'Crescent Park Townhouse',
    location: 'Maitama, Abuja',
    price: 210000000,
    type: 'Townhouse',
    beds: 3,
    baths: 4,
    area: 3400,
    yearBuilt: 2021,
    featured: false,
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600047509782-20d39509f26d?auto=format&fit=crop&w=1400&q=80',
    ],
    description:
      'An elegant townhouse in a gated enclave with quiet landscaping, layered textures, and the sort of thoughtful floor plan that works for both hosting and everyday living.',
    longDescription:
      'For buyers who want prestige without the maintenance footprint of a much larger home, this townhouse hits a rare sweet spot. The interior sequencing is refined, the exterior presence is understated, and the address carries long-term confidence.',
    amenities: ['Gated estate', 'Private patio', 'Study nook', 'Solar backup', 'Children play lawn'],
    tags: ['Low-maintenance luxury', 'Secure compound', 'Maitama address'],
    agent: {
      name: 'Kene Eze',
      role: 'Relationship Manager',
      phone: '+234 803 555 0286',
      email: 'kene@primenest.com',
    },
  },
  {
    id: 'banana-island-mansion',
    title: 'Lagoon Signature Mansion',
    location: 'Banana Island, Lagos',
    price: 1450000000,
    type: 'Mansion',
    beds: 7,
    baths: 8,
    area: 11000,
    yearBuilt: 2025,
    featured: true,
    image:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687645-c7171b42498f?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600047509784-20d39509f26d?auto=format&fit=crop&w=1400&q=80',
    ],
    description:
      'A trophy home for ultra-prime buyers, combining waterfront presence, resort-grade leisure spaces, and immaculate materials throughout every level.',
    longDescription:
      'This is a flagship asset built for the top end of the market. The architecture is unapologetically grand, yet every detail has been tuned for calm, privacy, and effortless hosting. For a portfolio site, it establishes instant credibility in a high-value niche.',
    amenities: ['Indoor spa', 'Private dock access', 'Elevator', '6-car garage', 'Entertainment pavilion'],
    tags: ['Trophy asset', 'Waterfront estate', 'Resort-grade'],
    agent: {
      name: 'Nneka Adeyemi',
      role: 'Director of Private Client Sales',
      phone: '+234 803 555 0072',
      email: 'nneka@primenest.com',
    },
  },
]

const priceRanges = [
  { label: 'Any budget', value: 'all' },
  { label: 'Under NGN 250M', value: '250000000' },
  { label: 'Under NGN 500M', value: '500000000' },
  { label: 'Under NGN 1B', value: '1000000000' },
]

const propertyTypes = ['All types', ...new Set(properties.map((property) => property.type))]

const app = document.querySelector('#app')
const themePreference = window.localStorage.getItem('primenest-theme') ?? 'dark'

const state = {
  search: '',
  price: 'all',
  type: 'all',
  theme: themePreference,
  selectedPropertyId: properties[0].id,
  activeGalleryIndex: 0,
  contactPropertyId: properties[0].id,
  contact: {
    fullName: '',
    email: '',
    phone: '',
    message: '',
    errors: {},
    success: '',
  },
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme
  window.localStorage.setItem('primenest-theme', state.theme)
}

function getRoute() {
  const hash = window.location.hash || '#/'

  if (hash.startsWith('#/property/')) {
    return {
      page: 'property',
      id: hash.replace('#/property/', ''),
    }
  }

  return { page: 'home' }
}

function navigateToProperty(propertyId) {
  state.selectedPropertyId = propertyId
  state.activeGalleryIndex = 0
  window.location.hash = `#/property/${propertyId}`
}

function navigateHome() {
  window.location.hash = '#/'
}

function getFilteredProperties() {
  return properties.filter((property) => {
    const matchesLocation =
      state.search === '' ||
      `${property.location} ${property.title} ${property.tags.join(' ')}`
        .toLowerCase()
        .includes(state.search.toLowerCase())

    const matchesPrice =
      state.price === 'all' || property.price <= Number.parseInt(state.price, 10)

    const matchesType = state.type === 'all' || property.type === state.type

    return matchesLocation && matchesPrice && matchesType
  })
}

function render() {
  applyTheme()

  const route = getRoute()
  const activeProperty =
    properties.find((property) => property.id === route.id) ??
    properties.find((property) => property.id === state.selectedPropertyId) ??
    properties[0]

  state.selectedPropertyId = activeProperty.id
  state.contactPropertyId ||= activeProperty.id

  app.innerHTML = route.page === 'property' ? createPropertyPage(activeProperty) : createHomePage(activeProperty)

  document.title =
    route.page === 'property'
      ? `${activeProperty.title} | PrimeNest`
      : 'PrimeNest | Premium Real Estate'

  bindGlobalEvents()

  if (route.page === 'home') {
    bindHomeEvents()
  } else {
    bindPropertyPageEvents(activeProperty)
  }
}

function createHomePage(activeProperty) {
  const filteredProperties = getFilteredProperties()
  const featuredProperty = properties.find((property) => property.featured) ?? properties[0]

  return `
    <div class="page-shell">
      <section class="hero-section hero-home">
        <div class="ambient ambient-one"></div>
        <div class="ambient ambient-two"></div>
        <header class="topbar">
          <button class="brand-button nav-home" type="button">
            <span class="eyebrow">PrimeNest Collection</span>
            <span class="brand">PrimeNest</span>
          </button>
          <nav class="topnav">
            <button type="button" class="nav-scroll" data-target="properties">Properties</button>
            <button type="button" class="nav-scroll" data-target="trust">Trust</button>
            <button type="button" class="nav-scroll" data-target="contact">Contact</button>
            <button type="button" class="theme-toggle" id="theme-toggle" aria-label="Toggle theme">
              ${state.theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
          </nav>
        </header>

        <div class="hero-grid hero-grid-home">
          <div class="hero-copy">
            <p class="hero-kicker">Luxury homes, curated with intention</p>
            <h1>Real estate presentation for buyers who expect editorial level polish.</h1>
            <p class="hero-text">
              PrimeNest blends premium storytelling, dynamic listing data, and clear conversion paths so high value properties feel desirable from the first scroll.
            </p>

            <form class="search panel" id="search-form" novalidate>
              <label>
                <span>Location</span>
                <input id="location-search" type="text" placeholder="Search by city, district, or address" value="${escapeHtml(state.search)}" />
              </label>
              <label>
                <span>Price</span>
                <select id="price-filter">
                  ${priceRanges
                    .map(
                      (range) =>
                        `<option value="${range.value}" ${state.price === range.value ? 'selected' : ''}>${range.label}</option>`,
                    )
                    .join('')}
                </select>
              </label>
              <label>
                <span>Type</span>
                <select id="type-filter">
                  ${propertyTypes
                    .map((type) => {
                      const value = type === 'All types' ? 'all' : type
                      return `<option value="${value}" ${state.type === value ? 'selected' : ''}>${type}</option>`
                    })
                    .join('')}
                </select>
              </label>
              <button type="submit">Search listings</button>
            </form>

            <div class="hero-stats">
              <div>
                <strong>120+</strong>
                <span>premium homes listed</span>
              </div>
              <div>
                <strong>NGN 12B+</strong>
                <span>property value managed</span>
              </div>
              <div>
                <strong>98%</strong>
                <span>client satisfaction</span>
              </div>
            </div>
          </div>

          <aside class="hero-showcase">
            <div class="hero-panel hero-panel-large">
              <img src="${featuredProperty.image}" alt="${featuredProperty.title}" class="hero-showcase-image" />
              <div class="hero-panel-copy">
                <p class="eyebrow">Signature Listing</p>
                <h2>${featuredProperty.title}</h2>
                <p>${featuredProperty.location}</p>
                <div class="hero-panel-meta">
                  <span>${formatPrice(featuredProperty.price)}</span>
                  <span>${featuredProperty.beds} beds</span>
                  <span>${featuredProperty.baths} baths</span>
                </div>
                <button class="primary-link" type="button" data-open-property="${featuredProperty.id}">
                  View full property page
                </button>
              </div>
            </div>

            <div class="hero-panel hero-panel-compact">
              <p class="eyebrow">Selected Preview</p>
              <div class="mini-preview-card">
                <div>
                  <h3>${activeProperty.title}</h3>
                  <p>${activeProperty.location}</p>
                </div>
                <strong>${formatPrice(activeProperty.price)}</strong>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <main class="main-content">
        <section class="section-head" id="properties">
          <div>
            <p class="eyebrow">Featured Properties</p>
            <h2>Browse homes with filters that feel instant and details that sell the dream.</h2>
          </div>
          <p class="section-copy">
            Dynamic cards, premium spacing, and sharp pricing context make the inventory feel trustworthy, valuable, and ready for serious buyers.
          </p>
        </section>

        <section class="results-toolbar">
          <div>
            <span class="results-label">Available listings</span>
            <strong id="results-count">${filteredProperties.length}</strong>
          </div>
          <div class="results-actions">
            <button id="clear-filters" class="ghost-button" type="button">Reset filters</button>
            <button type="button" class="ghost-button nav-scroll" data-target="contact">Talk to an agent</button>
          </div>
        </section>

        <section class="property-grid" id="property-grid">
          ${filteredProperties.length ? filteredProperties.map(createPropertyCard).join('') : createEmptyState()}
        </section>

        <section class="collection-section">
          <div class="collection-copy">
            <p class="eyebrow">High-Intent Detail View</p>
            <h2>Property pages that make premium inventory feel worth the inquiry.</h2>
            <p>
              This preview mirrors the quality of the dedicated property route: large imagery, high-signal specs, and direct contact prompts that move buyers toward action.
            </p>
          </div>
          <div class="inline-preview-card">
            ${createInlinePreview(activeProperty)}
          </div>
        </section>

        <section class="trust-section" id="trust">
          <div class="trust-intro">
            <p class="eyebrow">Why Buyers Trust PrimeNest</p>
            <h2>Trusted by 1,000+ buyers looking for certainty, speed, and premium service.</h2>
            <p>
              We position each listing with stronger story, better visual hierarchy, and conversion paths built for high-consideration purchases.
            </p>
          </div>

          <div class="testimonial-grid">
            <article class="testimonial-card">
              <p>"The shortlist felt curated from day one. We found our Ikoyi home in under two weeks."</p>
              <strong>Chioma & Tunde</strong>
              <span>Home buyers</span>
            </article>
            <article class="testimonial-card">
              <p>"Beautiful presentation, responsive agents, and a smoother process than we expected."</p>
              <strong>Fatima Bello</strong>
              <span>Investor</span>
            </article>
            <article class="testimonial-card">
              <p>"The property pages feel like something a top brokerage would launch for a flagship listing."</p>
              <strong>David Ojo</strong>
              <span>Relocation client</span>
            </article>
          </div>
        </section>

        ${createContactSection(activeProperty)}
      </main>
    </div>
  `
}

function createPropertyPage(property) {
  const related = properties.filter((item) => item.id !== property.id).slice(0, 3)
  const activeImage = property.gallery[state.activeGalleryIndex] ?? property.gallery[0]

  return `
    <div class="page-shell">
      <section class="hero-section hero-property">
        <div class="ambient ambient-one"></div>
        <div class="ambient ambient-three"></div>
        <header class="topbar">
          <button class="brand-button nav-home" type="button">
            <span class="eyebrow">PrimeNest Collection</span>
            <span class="brand">PrimeNest</span>
          </button>
          <nav class="topnav">
            <button type="button" class="ghost-button nav-home">All properties</button>
            <button type="button" class="theme-toggle" id="theme-toggle" aria-label="Toggle theme">
              ${state.theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
          </nav>
        </header>

        <div class="property-hero-grid">
          <div class="property-stage">
            <img class="property-stage-image" src="${activeImage}" alt="${property.title}" />
            <div class="property-stage-overlay">
              <span>${property.type}</span>
              <span>${property.yearBuilt}</span>
              <span>${property.area.toLocaleString()} sqft</span>
            </div>
          </div>

          <aside class="property-summary-card">
            <p class="eyebrow">Property Details</p>
            <h1>${property.title}</h1>
            <p class="property-subtitle">${property.location}</p>
            <strong class="property-price">${formatPrice(property.price)}</strong>
            <p class="property-summary-text">${property.longDescription}</p>

            <div class="details-highlights">
              <span>${property.beds} bedrooms</span>
              <span>${property.baths} bathrooms</span>
              <span>Built ${property.yearBuilt}</span>
            </div>

            <div class="tag-list">
              ${property.tags.map((tag) => `<span>${tag}</span>`).join('')}
            </div>

            <div class="details-actions">
              <button type="button" class="primary-link" data-scroll-contact="true">Contact agent</button>
              <button type="button" class="ghost-button nav-home">Back to collection</button>
            </div>
          </aside>
        </div>
      </section>

      <main class="main-content">
        <section class="property-gallery-section">
          <div class="gallery-header">
            <div>
              <p class="eyebrow">Visual Tour</p>
              <h2>Large imagery, editorial rhythm, and high-signal detail blocks.</h2>
            </div>
            <p class="section-copy">
              The route is designed as a standalone premium destination so each listing can hold attention longer and convert more confidently.
            </p>
          </div>

          <div class="gallery-layout">
            <div class="gallery-main-panel">
              <img src="${activeImage}" alt="${property.title} selected gallery view" class="gallery-focus-image" />
            </div>
            <div class="gallery-thumbnail-rail">
              ${property.gallery
                .map(
                  (image, index) => `
                    <button
                      type="button"
                      class="thumbnail-button ${index === state.activeGalleryIndex ? 'is-active' : ''}"
                      data-gallery-index="${index}"
                      aria-label="View image ${index + 1}"
                    >
                      <img src="${image}" alt="${property.title} gallery ${index + 1}" />
                    </button>
                  `,
                )
                .join('')}
            </div>
          </div>
        </section>

        <section class="property-content-grid">
          <article class="story-card">
            <p class="eyebrow">Residence Overview</p>
            <h2>An experience built for serious buyers, investors, and relocations.</h2>
            <p>${property.description}</p>
            <p>${property.longDescription}</p>
          </article>

          <article class="spec-card">
            <p class="eyebrow">Amenities</p>
            <div class="amenities-list">
              ${property.amenities.map((item) => `<span>${item}</span>`).join('')}
            </div>
            <div class="agent-card">
              <p class="eyebrow">Lead Agent</p>
              <h3>${property.agent.name}</h3>
              <p>${property.agent.role}</p>
              <a href="mailto:${property.agent.email}">${property.agent.email}</a>
              <a href="tel:${property.agent.phone.replace(/\s+/g, '')}">${property.agent.phone}</a>
            </div>
          </article>
        </section>

        <section class="related-section">
          <div class="section-head section-head-tight">
            <div>
              <p class="eyebrow">Related Listings</p>
              <h2>Keep buyers moving with high-quality alternatives.</h2>
            </div>
          </div>
          <div class="property-grid">
            ${related.map(createPropertyCard).join('')}
          </div>
        </section>

        ${createContactSection(property)}
      </main>
    </div>
  `
}

function createPropertyCard(property) {
  return `
    <article class="property-card">
      <div class="card-image-wrap">
        <img src="${property.image}" alt="${property.title}" class="card-image" />
        <span class="property-type">${property.type}</span>
      </div>
      <div class="card-body">
        <div class="card-price-row">
          <strong>${formatPrice(property.price)}</strong>
          <span>${property.area.toLocaleString()} sqft</span>
        </div>
        <h3>${property.title}</h3>
        <p class="card-location">${property.location}</p>
        <div class="card-meta">
          <span>${property.beds} beds</span>
          <span>${property.baths} baths</span>
          <span>${property.agent.name}</span>
        </div>
        <div class="card-actions">
          <button class="card-button" type="button" data-open-property="${property.id}">
            Open property page
          </button>
          <button class="ghost-button card-ghost" type="button" data-select-property="${property.id}">
            Quick preview
          </button>
        </div>
      </div>
    </article>
  `
}

function createInlinePreview(property) {
  return `
    <div class="inline-preview-media">
      <img src="${property.gallery[0]}" alt="${property.title}" class="inline-preview-image" />
    </div>
    <div class="inline-preview-copy">
      <p class="eyebrow">Selected Listing</p>
      <h3>${property.title}</h3>
      <p>${property.location}</p>
      <div class="details-highlights">
        <span>${formatPrice(property.price)}</span>
        <span>${property.beds} beds</span>
        <span>${property.baths} baths</span>
      </div>
      <p>${property.description}</p>
      <button class="primary-link" type="button" data-open-property="${property.id}">
        Explore this property
      </button>
    </div>
  `
}

function createContactSection(property) {
  const selectedProperty = properties.find((item) => item.id === state.contactPropertyId) ?? property
  const { errors, success } = state.contact

  return `
    <section class="contact-section" id="contact">
      <div class="contact-copy">
        <p class="eyebrow">Talk To An Agent</p>
        <h2>Ready to tour a home or discuss your ideal budget?</h2>
        <p>
          The form now validates user input, preserves context, and references the chosen listing so the inquiry feels tailored from the first follow-up.
        </p>
        <div class="contact-property-chip">
          <span>Selected property</span>
          <strong>${selectedProperty.title}</strong>
        </div>
      </div>

      <form class="contact-form" id="contact-form" novalidate>
        <label class="${errors.fullName ? 'has-error' : ''}">
          <span>Full name</span>
          <input name="fullName" type="text" placeholder="Your full name" value="${escapeHtml(state.contact.fullName)}" />
          ${errors.fullName ? `<small>${errors.fullName}</small>` : ''}
        </label>
        <label class="${errors.email ? 'has-error' : ''}">
          <span>Email address</span>
          <input name="email" type="email" placeholder="you@example.com" value="${escapeHtml(state.contact.email)}" />
          ${errors.email ? `<small>${errors.email}</small>` : ''}
        </label>
        <label class="${errors.phone ? 'has-error' : ''}">
          <span>Phone number</span>
          <input name="phone" type="tel" placeholder="+234 800 000 0000" value="${escapeHtml(state.contact.phone)}" />
          ${errors.phone ? `<small>${errors.phone}</small>` : ''}
        </label>
        <label class="${errors.message ? 'has-error' : ''}">
          <span>Message</span>
          <textarea name="message" rows="5" placeholder="Tell us what kind of property you want, your preferred location, and your budget.">${escapeHtml(state.contact.message)}</textarea>
          ${errors.message ? `<small>${errors.message}</small>` : ''}
        </label>
        <input type="hidden" name="propertyId" value="${selectedProperty.id}" />
        <button type="submit">Send inquiry</button>
        ${success ? `<p class="form-success">${success}</p>` : ''}
      </form>
    </section>
  `
}

function createEmptyState() {
  return `
    <article class="empty-state">
      <p class="eyebrow">No exact match</p>
      <h3>Try a wider location search or a higher price ceiling.</h3>
      <p>Your cards refresh instantly, so buyers can keep exploring without friction.</p>
    </article>
  `
}

function bindGlobalEvents() {
  document.querySelector('#theme-toggle')?.addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark'
    render()
  })

  document.querySelectorAll('.nav-home').forEach((button) => {
    button.addEventListener('click', () => {
      navigateHome()
    })
  })

  document.querySelectorAll('[data-open-property]').forEach((button) => {
    button.addEventListener('click', () => {
      const propertyId = button.dataset.openProperty
      state.contactPropertyId = propertyId
      navigateToProperty(propertyId)
    })
  })

  document.querySelectorAll('[data-select-property]').forEach((button) => {
    button.addEventListener('click', () => {
      state.selectedPropertyId = button.dataset.selectProperty
      state.contactPropertyId = button.dataset.selectProperty
      state.activeGalleryIndex = 0
      render()
      document.querySelector('.collection-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  })

  document.querySelectorAll('.nav-scroll').forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.target
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  })

  document.querySelector('#contact-form')?.addEventListener('submit', handleContactSubmit)
}

function bindHomeEvents() {
  const searchForm = document.querySelector('#search-form')
  const locationSearch = document.querySelector('#location-search')
  const priceFilter = document.querySelector('#price-filter')
  const typeFilter = document.querySelector('#type-filter')
  const clearFiltersButton = document.querySelector('#clear-filters')

  searchForm?.addEventListener('submit', (event) => {
    event.preventDefault()
    state.search = locationSearch.value.trim()
    state.price = priceFilter.value
    state.type = typeFilter.value
    render()
    document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })

  clearFiltersButton?.addEventListener('click', () => {
    state.search = ''
    state.price = 'all'
    state.type = 'all'
    render()
  })
}

function bindPropertyPageEvents(property) {
  document.querySelectorAll('[data-gallery-index]').forEach((button) => {
    button.addEventListener('click', () => {
      state.activeGalleryIndex = Number.parseInt(button.dataset.galleryIndex, 10)
      render()
      document.querySelector('.property-gallery-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  })

  document.querySelector('[data-scroll-contact="true"]')?.addEventListener('click', () => {
    state.contactPropertyId = property.id
    render()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

function handleContactSubmit(event) {
  event.preventDefault()

  const formData = new FormData(event.currentTarget)
  const values = {
    fullName: String(formData.get('fullName') ?? '').trim(),
    email: String(formData.get('email') ?? '').trim(),
    phone: String(formData.get('phone') ?? '').trim(),
    message: String(formData.get('message') ?? '').trim(),
    propertyId: String(formData.get('propertyId') ?? '').trim(),
  }

  const errors = validateContactForm(values)

  state.contact = {
    ...state.contact,
    ...values,
    errors,
    success: '',
  }
  state.contactPropertyId = values.propertyId || state.contactPropertyId

  if (Object.keys(errors).length > 0) {
    render()
    document.querySelector('.has-error input, .has-error textarea')?.focus()
    return
  }

  const selectedProperty = properties.find((property) => property.id === state.contactPropertyId) ?? properties[0]

  state.contact = {
    fullName: '',
    email: '',
    phone: '',
    message: '',
    errors: {},
    success: `Inquiry sent for ${selectedProperty.title}. An agent will reach out shortly with next steps.`,
  }

  render()
  document.querySelector('.form-success')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
}

function validateContactForm(values) {
  const errors = {}

  if (values.fullName.length < 3) {
    errors.fullName = 'Please enter your full name.'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!/^[+\d\s()-]{10,}$/.test(values.phone)) {
    errors.phone = 'Enter a valid phone number.'
  }

  if (values.message.length < 18) {
    errors.message = 'Please share a few more details so the agent can help well.'
  }

  return errors
}

function formatPrice(price) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(price)
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

window.addEventListener('hashchange', () => {
  const route = getRoute()

  if (route.page === 'property') {
    state.activeGalleryIndex = 0
    state.contactPropertyId = route.id
  }

  render()
})

render()
