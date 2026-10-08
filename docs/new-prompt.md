# COMPLETE UI/UX REDESIGN — CATERING WEBSITE

You are working on an existing catering website built with Next.js and Tailwind CSS.

The website functionality/content already exists. Your task is to **completely redesign the visual UI/UX of the entire website** and make it feel like a modern, premium, highly polished food-ordering/discovery application.

## DESIGN REFERENCE

Use the overall UX philosophy of **Toing**, the affordable food-ordering app from Swiggy, as inspiration.

IMPORTANT:

Do NOT copy Toing's branding, logo, exact colors, assets, layouts, or proprietary design.

Instead, take inspiration from the qualities that make modern food-ordering apps engaging:

* Visual-first food discovery
* Large appetizing food photography
* Clean, highly scannable layouts
* Category-based browsing
* Horizontal scrolling food sections
* Compact modern food cards
* Strong CTAs
* Playful but polished interactions
* Clear pricing
* Minimal unnecessary text
* Fast-feeling navigation
* Mobile-first experience
* Strong visual hierarchy
* Smooth micro-interactions
* Modern rounded UI
* Premium but approachable aesthetic

The final result should feel like:

**"A premium catering brand designed with the UX quality of a modern food-ordering app."**

It should NOT feel like a generic restaurant template.

---

# CORE DESIGN GOAL

Transform the current website into a website that looks:

* Premium
* Modern
* Young
* App-like
* Food-focused
* Visually rich
* Trustworthy
* Elegant
* Interactive
* Fast
* Mobile-friendly

Avoid making it overly corporate or overly traditional.

The website should immediately make users want to explore the food.

---

# FIRST: ANALYZE THE EXISTING PROJECT

Before changing anything:

1. Inspect the entire existing codebase.
2. Understand the current:

   * pages
   * components
   * routes
   * data
   * menu structure
   * images
   * forms
   * CTAs
   * navigation
   * responsive behavior
   * existing animations
3. Preserve all existing functionality.
4. Preserve existing business information and menu data.
5. Do not remove important features simply because the UI is changing.
6. Reuse existing components/data where practical, but refactor them when necessary.
7. Identify all visually outdated sections and replace their UI.

Do NOT blindly rewrite backend/business logic.

This task is primarily a **complete UI/UX transformation**.

---

# VISUAL DIRECTION

## Overall aesthetic

Create a custom visual identity inspired by modern food apps.

Use:

* warm off-white / cream backgrounds
* deep charcoal text
* one strong brand accent color
* subtle secondary accent colors
* large food photography
* rounded cards
* soft shadows
* generous whitespace
* bold typography
* subtle borders
* modern pill-shaped controls

Do NOT use excessive gradients.

Do NOT make everything colorful.

Use color strategically.

The food photography should be the visual hero.

---

# COLOR SYSTEM

Create a proper design token system.

Suggested starting direction:

Background:
#FFF9F2

Primary text:
#171717

Secondary text:
#6B6B6B

Card:
#FFFFFF

Border:
#EDE7DF

Primary accent:
Use a warm food-related brand color such as orange/red, but adjust it to complement the actual catering brand.

Secondary accent:
Use a subtle green/yellow accent where appropriate.

IMPORTANT:

Before finalizing colors, inspect the existing branding/logo and existing assets.

The website should feel like ONE cohesive brand.

Do not randomly introduce multiple unrelated colors.

---

# TYPOGRAPHY

Use a modern sans-serif font.

Typography should have strong hierarchy:

Hero heading:
Very large
Bold
Tight line-height

Section headings:
Bold
Large
Highly readable

Card titles:
Medium/Bold

Supporting text:
Muted
Comfortable line-height

Pricing:
Bold and visually prominent

Buttons:
Medium/Bold

Avoid excessive uppercase text.

Do not use more than 2 font families.

---

# NAVBAR

Completely redesign the navbar.

Desktop:

LEFT:
Brand logo

CENTER:

* Home
* Menu
* Catering
* Occasions
* About

RIGHT:

* Search/menu icon where useful
* Primary CTA: "Get a Quote"

Navbar should be:

* clean
* minimal
* sticky
* slightly transparent/blurred when appropriate
* elegant
* responsive

On scroll:

Add a subtle backdrop blur and shadow/border.

Do not create a huge navbar.

---

# HERO SECTION

The hero should be visually impressive.

Do NOT use the typical:

"Welcome to XYZ Catering"

Instead create a bold food-focused composition.

Example structure:

Small eyebrow:
"MADE FOR MOMENTS"

Large heading:

"Food that makes
people gather."

Supporting text:

"Delicious catering for weddings, celebrations, corporate events and everything in between."

CTA buttons:

[ Explore Menu ]
[ Get a Catering Quote ]

On the right / surrounding the hero:

Use beautiful food imagery.

Create a composition with:

* large primary food image
* smaller floating food image/card
* subtle decorative elements
* price/tag/category badges where appropriate

The hero should feel dynamic without becoming visually chaotic.

Add subtle entrance animations.

---

# HERO ANIMATION

On initial page load:

1. Background/content fades in.
2. Heading slides upward slightly.
3. Food imagery scales from approximately 0.96 → 1.
4. Floating elements enter with slight stagger.
5. CTA buttons animate in last.

Keep animations subtle and premium.

Do NOT use excessive bouncing.

---

# QUICK CATEGORY NAVIGATION

Immediately below the hero, create a horizontally scrollable category section.

Example:

Wedding
Birthday
Corporate
House Party
Engagement
Festivals

Each category should have:

* small icon/image
* category name
* rounded container
* hover interaction

On mobile:

Make this horizontally scrollable.

Use smooth scrolling.

---

# POPULAR / FEATURED FOOD SECTION

Create a visually rich section such as:

"People are loving these"

or

"Popular from our kitchen"

Display food cards in a horizontal carousel on smaller screens and responsive grid/row on desktop.

Each card should include:

* food image
* vegetarian/non-vegetarian indicator if applicable
* food name
* short description
* serving information if available
* price
* category/tag
* CTA

Example:

[ FOOD IMAGE ]

Chef's Pick

Butter Chicken

Rich creamy tomato gravy

Serves 2

₹399

[ View Dish ]

Cards should have:

* 18–24px border radius
* subtle shadow
* image hover zoom
* clean spacing
* smooth hover transformation

---

# MENU EXPERIENCE

This is one of the MOST IMPORTANT sections.

Do NOT present the menu as a boring table.

Create a food-ordering-app-inspired browsing experience.

Heading:

"Explore the Menu"

Add:

SEARCH BAR

"Search dishes, cuisines..."

Then category tabs:

All
Starters
Main Course
Breads
Rice
Biryani
Chinese
Desserts
Beverages

Use the categories that actually exist in the current menu.

Make category tabs horizontally scrollable on mobile.

---

# MENU CARDS

Redesign every menu item into a premium food card.

Card structure:

IMAGE

Optional badge:
Popular / Bestseller / Chef's Pick / New

Dish Name

Short description

Serving information

Price

CTA

Example:

---

|                              |
|        FOOD IMAGE             |
|                              |
--------------------------------

POPULAR

Paneer Tikka

Smoky grilled cottage cheese

Serves 2

₹349

[ View ]

Do not overcrowd cards.

---

# MENU FILTERING

If menu filtering already exists:

Keep it.

Improve the animation.

When users switch categories:

* cards should animate smoothly
* avoid harsh page refreshes
* use subtle fade/slide transitions

If search already exists:

Make it visually prominent and easy to use.

If there is no search functionality but menu data supports it, implement client-side search.

---

# OCCASIONS SECTION

Create a visually rich section:

"Catering for every occasion"

Use large cards:

Wedding
Birthday
Corporate
Engagement
House Party
Private Events

Each card should have:

* large image
* dark/soft overlay if needed
* title
* short description
* arrow interaction

On hover:

* image zooms slightly
* arrow moves
* card subtly lifts

---

# WHY CHOOSE US

Do NOT make this a boring four-column icon section.

Create a more premium layout.

Example:

Large heading:

"More than catering.
We take care of the experience."

Then visually display benefits:

Fresh ingredients
Professional service
Custom menus
On-time delivery
Hygienic preparation
Experienced team

Use small icons and elegant typography.

---

# HOW IT WORKS

Create a clean 4-step visual timeline:

01
Choose your menu

02
Tell us about your event

03
We prepare everything

04
Enjoy your celebration

Use connecting lines / subtle animations.

On mobile stack vertically.

---

# SOCIAL PROOF

Create a modern testimonial section.

Do not make huge quote blocks.

Use compact cards.

Each testimonial:

★★★★★

"Short realistic customer quote."

Customer name

Event type

Example:

Rahul Sharma
Wedding Catering

Add subtle horizontal scrolling on mobile.

---

# GALLERY

If the existing website has food/event images, create a premium gallery.

Use a masonry-style or asymmetric grid.

Mix image sizes.

Add subtle hover zoom.

On click:

Open a polished lightbox.

Do not make the gallery feel like a basic photo grid.

---

# CTA SECTION

Create a visually powerful final CTA.

Example:

"Planning something special?"

"Tell us what you're celebrating.
We'll take care of the food."

Buttons:

[ Get a Catering Quote ]
[ Call Us ]

Use a large food/event background image with a tasteful overlay.

---

# FOOTER

Create a premium modern footer.

Include:

Logo

Short brand description

Navigation

Menu

Occasions

Contact

Phone

Email

Address

Social media

Copyright

Avoid a giant complicated footer.

---

# MICRO-INTERACTIONS

Add high-quality micro-interactions throughout the website.

Examples:

Buttons:

* subtle scale on hover
* arrow movement
* smooth background transition

Cards:

* translateY(-4px)
* image scale(1.03)
* subtle shadow increase

Images:

* smooth zoom

Navigation:

* active underline/pill animation

Category pills:

* active state animation

Scroll:

* section reveal animations

CTA:

* subtle hover movement

Use Framer Motion if it is already installed.

If it isn't installed and animation complexity justifies it, install/use it appropriately.

Do NOT animate every element.

Animations should make the interface feel polished, not distracting.

---

# PAGE TRANSITIONS / SCROLL REVEALS

Use subtle scroll-triggered animations.

Recommended:

opacity:
0 → 1

transform:
translateY(20px) → translateY(0)

Duration:
approximately 400–700ms

Use staggered animations for:

* cards
* categories
* menu items
* feature blocks

Respect:

prefers-reduced-motion

Users who disable animations should still have a fully functional website.

---

# MOBILE EXPERIENCE

This is extremely important.

The website must feel like a high-quality mobile food-ordering app.

On mobile:

* sticky compact navbar
* horizontal category scrolling
* horizontal food card carousels
* large tap targets
* bottom CTA where appropriate
* readable typography
* no horizontal overflow
* optimized images
* smooth touch interactions

The mobile website should NOT simply be the desktop layout stacked vertically.

Design mobile intentionally.

---

# RESPONSIVE BREAKPOINTS

Ensure excellent behavior across:

320px
375px
390px
430px
768px
1024px
1280px
1440px+

Test all major sections at each breakpoint.

---

# PERFORMANCE

Do not sacrifice performance for animations.

Use:

* Next.js Image
* proper image sizing
* lazy loading
* optimized assets
* minimal client-side JavaScript
* CSS transitions where sufficient
* code splitting where appropriate

Avoid unnecessary dependencies.

---

# ACCESSIBILITY

Maintain:

* semantic HTML
* keyboard navigation
* visible focus states
* sufficient color contrast
* alt text
* proper button labels
* accessible navigation
* reduced-motion support

Do not sacrifice accessibility for visual effects.

---

# UX PRINCIPLES

Every section should answer one of these questions:

1. What food do you offer?
2. Why should I choose you?
3. Can you cater my event?
4. How much does it cost?
5. How can I contact/order/book you?

Remove visual clutter that doesn't help the user.

The user should never feel lost.

---

# IMPORTANT: DO NOT DO THESE THINGS

Do NOT:

* copy Toing exactly
* copy Swiggy branding
* use Swiggy/Toing logos
* copy proprietary assets
* create a generic restaurant template
* use excessive gradients
* use excessive glassmorphism
* use huge amounts of text
* use random animations
* make every card look identical
* use giant shadows
* use outdated Bootstrap-style layouts
* create unnecessarily complex navigation
* make the website look like an admin dashboard
* sacrifice loading speed
* break existing functionality

---

# COMPONENT ARCHITECTURE

Refactor the UI into reusable components where appropriate.

Suggested structure:

components/
Navbar
Hero
CategoryScroller
FoodCard
FoodCarousel
MenuSection
MenuFilters
OccasionCard
OccasionsSection
WhyChooseUs
HowItWorks
Testimonials
Gallery
CTASection
Footer

Use reusable data-driven components rather than duplicating markup.

---

# DESIGN SYSTEM

Create consistent:

* spacing scale
* border radius
* typography
* shadows
* buttons
* badges
* cards
* inputs
* category pills
* icons

Use Tailwind utility classes consistently.

If useful, define CSS variables/design tokens.

---

# ICONS

Use a consistent icon library such as Lucide if already available.

Do not mix random icon styles.

Icons should be subtle and supportive rather than decorative clutter.

---

# IMAGES

Prioritize high-quality food photography.

If the project already has suitable food images:

USE THEM.

Do not unnecessarily replace existing brand assets.

If placeholder images are absolutely necessary during development, use high-quality food imagery and structure the code so images can easily be replaced later.

Never use obviously fake or low-quality placeholder imagery in the final design.

---

# COPY

Keep copy concise.

Instead of:

"We provide high-quality catering services for all types of events..."

Prefer:

"Great food for memorable gatherings."

Make headings emotionally engaging but clear.

Do not invent business claims, awards, statistics, reviews, certifications, or guarantees that aren't present in the existing website/data.

---

# CTA STRATEGY

Use consistent CTA hierarchy.

Primary:
"Get a Quote"

Secondary:
"Explore Menu"

Contextual:
"View Menu"
"View Dish"
"Plan Your Event"
"Contact Us"

Do not create 10 different CTA labels unnecessarily.

---

# FINAL QUALITY BAR

When finished, the website should look like it was designed by a professional product/UI team.

The experience should feel closer to:

**Modern food-ordering app × premium catering brand**

rather than:

**traditional catering business website**

The first 5 seconds of the website should communicate:

FOOD + QUALITY + OCCASIONS + EASY CONTACT

---

# IMPLEMENTATION PROCESS

Follow this process:

STEP 1:
Audit the existing project.

STEP 2:
Identify every page and major section.

STEP 3:
Create the new visual design system.

STEP 4:
Redesign the navbar and hero.

STEP 5:
Redesign food discovery/category sections.

STEP 6:
Completely redesign the menu UI.

STEP 7:
Redesign occasions, benefits, testimonials, gallery and CTA.

STEP 8:
Implement responsive mobile UI.

STEP 9:
Add polished micro-interactions and scroll animations.

STEP 10:
Test all existing functionality.

STEP 11:
Fix visual inconsistencies.

STEP 12:
Test desktop + tablet + mobile.

STEP 13:
Remove unused styles/components created by the old UI.

STEP 14:
Ensure there are no console errors.

STEP 15:
Ensure there are no broken links, buttons, images, routes or forms.

---

# MOST IMPORTANT REQUIREMENT

Do NOT just make small cosmetic changes to the existing website.

I want a **FULL UI/UX TRANSFORMATION**.

The website should look substantially different from the current version.

However, preserve the actual business content, functionality, routes and important data.

Think deeply about the hierarchy and user journey before implementing.

Make the final result feel:

**premium + modern + food-first + playful + fast + polished.**

Do not stop after redesigning the homepage.

Redesign **the entire website consistently**.

After implementation, review every page visually and fix anything that feels inconsistent with the new design system.
