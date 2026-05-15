# CLAUDE.md — SDG 12 Website Project Brief
## "CONSUMED" — You Are What You Buy

> **For the AI building this:** This is not an SDG information page.
> This is a psychological experience designed to make people feel seen, exposed,
> and ultimately — changed. The visitor should finish this website feeling like
> someone just held a mirror to their face and didn't look away.
> UI/UX excellence and gut-punch relatability are the two things that matter most.

---

## 🎯 Priority Hierarchy

```
1. UI/UX Excellence           → If it doesn't feel extraordinary to navigate, nothing else matters
2. Creativity & Originality   → Zero templates. Zero AI clichés. Be unforgettable.
3. Relatability & Punch       → Every line, every visual must make the user think: "...that's me."
4. SDG 12 Alignment           → Every creative choice must serve the message
```

---

## 🛍️ Concept: "CONSUMED"

**Tagline:** *"You are what you buy."*

**The Central Idea:**
We don't have a waste problem. We have a desire problem.
The website doesn't lecture — it seduces, then confronts, then holds a mirror.
The visitor isn't an observer of overconsumption. They ARE the overconsumer.
By the end, they don't just know the facts — they feel implicated, then empowered.

**The Emotional Arc:**
```
GUILT → AWARENESS → HOPE → ACTION
```
Each section is a different emotional temperature. The visitor is taken on a journey
that feels personal, not political. Uncomfortable, not preachy. Human, not academic.

---

## 🎨 Visual Identity

### Dual Visual Personality
This site has TWO distinct visual modes that switch between sections:

**MODE A — WARM & ORGANIC (Hope, Seduction, Action sections)**
```
Palette:       Warm cream #F5ECD7, soft sand #E8D5B0, deep forest #1a2e1a
Accent:        Living green #2D8A4E, leaf green #4CAF72
Texture:       Paper grain, ink bleeds, torn edge effects, linen overlays
Typography:    Expressive, editorial — collage energy
Feel:          A beautiful magazine that loves the earth
```

**MODE B — DARK CINEMATIC (Guilt, Shock, Confrontation sections)**
```
Palette:       Near-black #080808, charcoal #111, deep shadow #0c0c0c
Accent:        Burning amber #FF8C00, ember orange #FF4500
Texture:       Film grain, scanlines, harsh spotlight gradients
Typography:    Brutal, oversized, hard-hitting
Feel:          A documentary that refuses to look away
```

### Color System
```
--cream:        #F5ECD7   (warm organic bg)
--sand:         #E8D5B0   (secondary organic)
--forest:       #1a2e1a   (dark organic)
--green:        #2D8A4E   (primary accent — life, hope, circular)
--green-light:  #4CAF72   (lighter green for highlights)
--black:        #080808   (cinematic bg)
--charcoal:     #111111   (secondary dark)
--amber:        #FF8C00   (urgency, crisis, alarm)
--ember:        #FF4500   (extreme urgency moments)
--text-dark:    #1a1a1a   (on light backgrounds)
--text-light:   #F0EDE8   (on dark backgrounds)
--muted-warm:   #8a7a6a   (muted on warm bg)
--muted-dark:   #444444   (muted on dark bg)
```

### Typography System
- **Display font:** `Playfair Display` — elegant, editorial, slightly decadent. Perfect for seduction.
- **Impact font:** `Bebas Neue` — brutal, confrontational. For shock moments.
- **Body font:** `DM Serif Text` or `Lora` — warm, readable, journalistic. Feels human.
- **Data/Label font:** `JetBrains Mono` — cold, clinical. For stats and data moments.
- **Rule:** Mix these intentionally. Playfair for beauty. Bebas for horror. Never use them interchangeably.

### Texture & Atmosphere
- **Paper grain SVG filter** over all warm sections — feels printed, handmade, real
- **Film grain overlay** on dark sections — cinematic, documentary-grade
- **Ink bleed effects** on section transitions — like a thought bleeding through paper
- **Torn paper edges** between section mode switches (warm ↔ dark)
- **Collage layering:** overlapping text, rotated elements, misaligned grids — controlled chaos
- **Spotlight radial gradients** on dark sections — single product or fact illuminated in amber

---

## 🗂️ Page Structure & Sections

### SECTION 1 — HERO: "The Seduction"
**Mode:** Warm & Organic → cracks into Dark
**Emotion:** Desire → Guilt

**Visual concept:**
- Full-viewport warm cream background with a maximalist collage layout
- Overlapping decorative elements: a perfume bottle silhouette, a shopping bag outline,
  a clothing tag, a coffee cup — all rendered in CSS/SVG, beautifully arranged
- Soft amber lighting, warm and inviting — looks like a luxury editorial spread
- The hero text appears beautiful at first: `"You deserve the best."`
- Then — a beat — the text **glitches, cracks**, and transforms:
  `"You deserve the truth."`
- Subtext fades in, personal and quiet:
  *"The average person buys 60% more clothes than 15 years ago. And keeps them half as long. This site is about you."*
- Background slowly desaturates and darkens as you read — the seduction fades
- A subtle animated shopping cart icon fills up with items, then tips over, spilling

**Typography treatment:**
- "You deserve" in elegant Playfair Display, oversized, warm cream
- "the best." in green, beautiful
- After glitch: "the truth." in amber, slightly misaligned — like it slipped

**UX goal:** Within 8 seconds, the visitor feels: *"Wait... is this about me?"*

---

### SECTION 2 — THE MIRROR: "Why You Can't Stop"
**Mode:** Transition — warm paper with dark ink bleeds
**Emotion:** Guilt → Awareness

**Concept:** Consumer psychology exposed. No judgment — just truth.

- Section opens with a large cracked mirror illustration (CSS/SVG)
- Inside the mirror: the visitor sees "themselves" — represented by a rotating set of
  consumer archetype labels that cycle: *"The Impulse Buyer. The Trend Chaser.
  The Guilt Purchaser. The Retail Therapist. The Hoarder. The Minimalist Wannabe."*
- Each label rotates every 2 seconds — users recognize themselves

**Three psychology pillars** animate in as cards with collage styling:

```
01 — THE DOPAMINE LOOP
    Your brain releases dopamine at the ANTICIPATION of buying,
    not the purchase itself. That's why unboxing feels better than owning.
    That's why the cart is more exciting than the closet.

02 — MANUFACTURED SCARCITY
    "Only 3 left." "Sale ends tonight." "Trending now."
    These aren't warnings. They're weapons. Designed by psychologists.
    Deployed against you. Every. Single. Day.

03 — IDENTITY CONSUMPTION
    You don't buy products. You buy versions of yourself.
    The athletic you. The sophisticated you. The sustainable you.
    Each purchase is a vote for who you wish you were.
```

- Cards have a collage treatment: slightly rotated, paper texture, ink stamp aesthetic
- Each card has a small, brutally honest stat at the bottom in Bebas Neue + amber

**UX goal:** The user reads this and feels *seen*. Not attacked — seen. A quiet, unsettling recognition.

---

### SECTION 3 — THE NUMBERS: "The Pile We Built"
**Mode:** Full Dark Cinematic
**Emotion:** Awareness → Horror

- Hard mode switch: warm paper tears away (CSS clip-path animation) revealing black underneath
- Amber spotlight effect — single facts illuminated in darkness, one at a time
- Scroll-triggered stat reveals — numbers animate in with a typewriter/counter effect

**Stats (real SDG 12 data):**
```
$5,000        — What the average person spends on impulse purchases per year
1 GARBAGE     — Truck of textiles wasted every second globally
33%           — Of all food produced globally is wasted — 1.3 billion tonnes
$1 TRILLION   — In food wasted annually while 820M people go hungry
2,700 LITRES  — Of water to make one cotton t-shirt. You wore it twice.
73%           — Of clothing ends up in landfill or incinerated
10%           — Of global carbon emissions come from fashion alone
```

- Each stat has a brutal one-line human translation below it in Sora/DM Serif
- Between stats: a visual "pile" of CSS-illustrated items grows taller — a literal mountain
  of discarded products building up as you scroll
- Background: faint amber grid/scanlines — feels like a surveillance monitor

**The Pile visual:**
- CSS/SVG illustration of accumulating waste — clothing items, plastic bottles,
  electronics, food — stacking frame by frame as the user scrolls
- At the peak: the pile is taller than the viewport. Overwhelming. Intentional.

**UX goal:** The user feels the *physical weight* of these numbers. Not just informed — disturbed.

---

### SECTION 4 — THE QUIZ: "Who Are You, Really?"
**Mode:** Dark with amber accents → reveals warm at result
**Emotion:** Horror → Reflection

**Concept:** 6 questions. Brutally honest. Reveals a "Consumer Archetype."

**Visual design:**
- Full dark background, single amber spotlight on each question
- Questions appear one at a time with a smooth transition
- Answer options styled as tactile buttons — slight 3D press effect on click
- Progress shown as a fill bar, not dots — feels like time running out

**The 6 Questions:**
```
Q1: Your favourite jacket has a hole. You...
    A) Sew it up yourself or take it to a tailor
    B) Buy a replacement — it was old anyway
    C) Buy a replacement AND keep the old one "just in case"
    D) Own 11 jackets, so this is fine

Q2: A sale notification pops up. Your first feeling is...
    A) Mild curiosity — I'll check if I actually need something
    B) Excitement — I deserve a treat
    C) Anxiety — what if I miss out?
    D) Already opened the app before finishing this question

Q3: The last thing you threw away was...
    A) Genuinely broken beyond repair
    B) Replaced by something newer/better
    C) Honestly, still worked fine
    D) I don't really track that

Q4: How many items of clothing do you own that still have tags on?
    A) Zero — I only buy what I need
    B) 1–2 — good intentions, different sizes
    C) 3–5 — a sale situation
    D) More than 5 and I'd rather not think about it

Q5: When you feel stressed or sad, you...
    A) Call a friend, exercise, sleep
    B) Treat myself — I earned it
    C) Browse online stores. Just browse.
    D) Wake up to three packages I don't remember ordering

Q6: Right now, you could name exactly how many pieces of clothing you own.
    A) Yes, roughly — I'm intentional about it
    B) Ballpark — somewhere between 40–80?
    C) No idea — probably more than I think
    D) This question is making me uncomfortable
```

**The 5 Consumer Archetypes (quiz results):**
```
THE CONSCIOUS CONSUMER
Mostly A's. You're rare. You think before you buy. Share this.

THE COMFORT BUYER
Mostly B's. Shopping is self-care for you. That dopamine loop has you.
The good news: you can break it.

THE FOMO SHOPPER
Mostly C's. Manufactured scarcity owns you. You buy to avoid missing out,
not because you need it. The "just in case" pile is real.

THE UNCONSCIOUS ACCUMULATOR
Mostly D's. You've lost track — and that's by design. The system was
built to make you lose track. You're not broken. But something needs to change.

THE RETAIL THERAPIST
Mixed. You shop to feel things — better, calmer, more in control. 
The purchase is never really about the product.
```

- Result card: warm organic mode switches back in — feels like relief, like breathing
- Result includes: your archetype name, a one-paragraph honest description,
  one single behaviour change tailored to your type
- Shareable archetype card (CSS-styled, copy-able text)

**UX goal:** The user laughs uncomfortably at least once. Then sits with it.

---

### SECTION 5 — THE LIFECYCLE: "Where Does It Actually Go?"
**Mode:** Warm organic with amber crisis moments
**Emotion:** Reflection → Understanding

**Concept:** An interactive product lifecycle explorer.

**The mechanic:**
- User picks one of 4 everyday items: 👕 T-Shirt | 🍔 Burger | 📱 Smartphone | ☕ Coffee Cup
- A beautiful illustrated timeline unfolds horizontally (scroll or click to advance)
- Each stage of the product's life is revealed with:
  - A CSS/SVG illustration of that stage
  - A short punchy fact
  - An emotional temperature indicator (warm = natural/good, amber = concerning, dark = crisis)

**T-Shirt Lifecycle example:**
```
STAGE 1 — GROWN         🌱 Cotton field. 2,700L of water per shirt.
STAGE 2 — MADE          🏭 Factory. Average worker earns $3/day.
STAGE 3 — SHIPPED       🚢 15,000km by cargo ship. Diesel burning.
STAGE 4 — BOUGHT        🛍️ You wore it. Average: 7 times.
STAGE 5 — FORGOTTEN     📦 Back of the wardrobe. 2.5 years.
STAGE 6 — DISCARDED     🗑️ 73% chance it goes to landfill.
STAGE 7 — PERSISTS      ♾️ Synthetic fibres: 200 years to decompose.

BUT WHAT IF → Circular path revealed in green:
STAGE 6B — REPAIRED     🧵 Worn 30+ times instead of 7.
STAGE 7B — DONATED      🤝 Second life. Someone else's favourite.
STAGE 8B — RECYCLED     ♻️ Broken down. Reborn as something new.
```

- The circular path glows green — visually the warmest, most hopeful moment on the page
- A dramatic contrast: the linear path (grey → amber → dark) vs. circular path (green, warm)
- Each product tells a different story but ends with the same structure: linear death vs circular life

**UX goal:** The user finishes this section and thinks differently about the next thing they almost buy.

---

### SECTION 6 — THE SHIFT: "What Enough Looks Like"
**Mode:** Full warm organic — maximalist collage at its peak
**Emotion:** Hope → Inspiration

- The darkest sections are behind us. This is the exhale.
- Full cream/sand background, maximalist collage layout — the most visually rich section
- Overlapping botanical illustrations (CSS), handwritten-style type (Google Fonts),
  torn paper elements, ink stamps saying "REPAIRED" "REUSED" "RETHOUGHT"
- Three principles of SDG 12 circular economy, styled as editorial magazine spreads:

```
REDUCE     — Buy less. Choose well. Make it last.
            The most sustainable product is one never made.

REPAIR     — A torn seam isn't the end. It's a story.
            The repair economy creates 5x more jobs than manufacturing.

RETHINK    — Ownership vs. access. Stuff vs. experience.
            The happiest consumers own the least.
```

- Real-world circular economy examples woven in as collage cards:
  Patagonia's repair program, Fairphone, Too Good To Go, library of things

- A gentle animated loop: items being repaired, reused, cycling — not discarded
- The typography here is beautiful — Playfair Display at its most expressive,
  large pull quotes floating amid the collage

**UX goal:** The user feels genuinely hopeful — not in a naive way, but in a *"this is actually possible"* way.

---

### SECTION 7 — THE PLEDGE: "One Thing"
**Mode:** Clean, stripped back — quiet after the maximalism
**Emotion:** Action → Resolve

**Concept:** Not a donation button. Not a newsletter signup. One commitment.

- The section deliberately strips everything back after the maximalist collage —
  sudden negative space feels powerful, intentional
- Single centred layout. Dark background. One green glow.
- Large text: *"You've seen it. You felt it. Now — one thing."*
- Three commitment options (user picks ONE):

```
  🧵  I will repair before I replace.
  🛍️  I will wait 48 hours before any non-essential purchase.
  👕  I will not buy new clothes for 30 days.
```

- Clicking a commitment: the text expands into a short, beautiful pledge statement
  styled like a personal letter — warm, human, not corporate
- A subtle animation: the picked commitment glows green, the others fade
- Final message appears: *"That's enough. You're enough."*
- SDG 12 badge + link to UN resources

**UX goal:** The user leaves with ONE concrete action. Not overwhelmed. Not preached at. Just — changed.

---

## ⚙️ Technical Architecture

### Stack
```
- AstroJS 
- TypeScript
- CSS custom properties for dual-mode theming
- SVG for illustrations, icons, collage elements
- Intersection Observer for scroll-triggered reveals
- CSS clip-path for section mode transitions
- Google Fonts (preloaded)
- CSS filters for grain/paper texture effects
```

### Dual-Mode Transition System
```
Section mode switching uses:
- CSS clip-path: polygon() animation — torn paper effect
- Background color transition with cubic-bezier easing
- Typography color swap via CSS custom property reassignment
- Grain filter opacity crossfade
```

### Animation Philosophy
- **Scroll = revelation.** Scrolling reveals truth, layer by layer.
- **Warm sections breathe** — slow, gentle animations (3–5s cycles)
- **Dark sections are sharp** — fast, abrupt reveals (0.3–0.5s)
- **The quiz is tactile** — buttons have physical weight, press feedback
- **The lifecycle is deliberate** — each stage waits for the user, never rushes
- Transitions: `cubic-bezier(0.16, 1, 0.3, 1)` for premium feel throughout
- Stagger delays on grouped elements: 80ms increments

### Custom Cursor
- Warm sections: soft cream circle with green ring
- Dark sections: amber dot, amber ring
- Morphs between modes with a smooth transition
- Expands on interactive elements

---

## 🚫 What To NEVER Do

- ❌ No stock photo placeholders or broken image references
- ❌ No generic green "eco" aesthetic (leaf logos, green waves, recycling symbols as decoration)
- ❌ No moralising, preaching, or finger-wagging tone
- ❌ No "Did You Know?" boxes — that's a school project, not an experience
- ❌ No purple gradients, no Inter font, no rounded card grids
- ❌ No auto-playing carousels with dot navigation
- ❌ No corporate sustainability speak ("synergistic circular solutions")
- ❌ No "share on social media" buttons that break the mood
- ❌ No confetti on quiz results — this isn't a game, it's a reckoning
- ❌ No walls of text — every paragraph must earn its place
- ❌ Never break the emotional arc — don't put hope before horror

---

## 🥊 THE PUNCH TEST

Before finalising any section, ask:
> *"If a 25-year-old online shopper read this at midnight after a late-night impulse buy — would they feel something real?"*

If the answer is yes — keep it.
If the answer is maybe — rewrite it.
If the answer is no — delete it and start again.

Every line of copy, every visual choice, every interaction must pass this test.
The goal is not to inform. The goal is to make the visitor feel:

**"That's me. Oh no, that's me. But... I can change that."**

---

## ✅ The Standard of Excellence

The bar is not "good for an SDG website."
The bar is not even "good for a competition entry."

The bar is: **"Would this stop someone mid-scroll at 1am and make them put down their phone?"**

If yes — ship it.

---

## 📐 SDG 12 Alignment Checklist

| SDG 12 Target | Where It Appears in CONSUMED |
|---|---|
| 12.1 Sustainable consumption frameworks | The Shift section — circular economy principles |
| 12.2 Sustainable management of resources | The Lifecycle — resource cost per product |
| 12.3 Halve global food waste by 2030 | The Numbers — food waste statistics |
| 12.5 Reduce waste through prevention & recycling | The Lifecycle circular path + The Pledge |
| 12.6 Sustainable practices in companies | The Shift — Patagonia, Fairphone examples |
| 12.8 Awareness of sustainable lifestyles | The entire site — specifically The Quiz |

---

## 🎭 Tone of Voice Guide

| Moment | Tone | Example |
|---|---|---|
| Hero | Seductive, then honest | *"You deserve the best. You deserve the truth."* |
| Psychology | Empathetic, knowing | *"Your brain was designed to want. Theirs was designed to exploit that."* |
| Stats | Blunt, no softening | *"2,700 litres of water. You wore it twice."* |
| Quiz | Wry, uncomfortably funny | *"Already opened the app before finishing this question."* |
| Lifecycle | Factual, then emotional | *"15,000km to get here. 7 wears. 200 years to disappear."* |
| The Shift | Warm, genuinely hopeful | *"A torn seam isn't the end. It's a story."* |
| The Pledge | Quiet, personal, final | *"That's enough. You're enough."* |

---

*"We don't have a waste problem. We have a desire problem. And desire — unlike landfill — can change."*