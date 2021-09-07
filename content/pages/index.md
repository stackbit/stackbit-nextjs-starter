---
title: Home
layout: AdvancedLayout
sections:
  - type: HeroSection
    variant: variant-c
    colors: colors-c
    width: wide
    height: tall
    alignHoriz: left
    topGap: none
    bottomGap: none
    title: We do fishing differently
    text: |-
      A group of local fisherman, working to deliver sustainable fish to your table. <br />
      Each fish you buy, helps support fishing reg  ulations and laws, to help sustain a better future for our waters, our food, and our globe.
    actions:
      - type: Button
        label: Get Started
        url: https://www.stackbit.com/
        style: "primary"
    backgroundImage:
      type: ImageBlock
      url: /images/hero-bc.jpg
      opacity: 70
  - type: TestimonialsSection
    variant: variant-a
    colors: colors-f
    width: wide
    topGap: none
    height: short
    alignHoriz: left
    testimonials:
      - quote: |-
          “It’s great to see someone taking action while still maintaining a sustainable fish supply to home cooks.”
        name: Isabelle Parks
        title: Head chef at Parks
  - type: FeaturedPeopleSection
    variant: variant-c
    colors: colors-a
    width: wide
    alignHoriz: center
    title: Our Team
    topGap: large
    bottomGap: large
    people:
      - content/data/team/dianne-ameter.json
      - content/data/team/hilary-ouse.json
      - content/data/team/gustav-purpleson.json
      - content/data/team/hugh-saturation.json
  - type: FeaturedPostsSection
    variant: variant-a
    colors: colors-a
    width: wide
    alignHoriz: center
    title: Day adventures
    topGap: large
    bottomGap: large
    posts:
      - content/pages/blog/as-fresh-as-it-gets.md
      - content/pages/blog/kayak-fishing-5-advantages-and-benefits.md
      - content/pages/blog/sustainability-at-its-purest.md
  - type: QuoteSection
    colors: colors-f
    width: wide
    height: short
    topGap: large
    bottomGap: large
    alignHoriz: left
    quote: “In every species of fish I’ve angled for, it is the ones that have got away that thrill me the most, the ones that keep fresh in my memory. So I say it is good to lose fish. If we didn’t, much of the thrill of angling would be gone.”
    name: Ray Bergman
    backgroundImage:
      type: ImageBlock
      url: "/images/quote.jpg"
      opacity: 20
  - type: ContactSection
    variant: variant-b
    colors: colors-f
    width: wide
    height: short
    topGap: large
    bottomGap: large
    alignHoriz: left
    title: Join our club
    text: |-
      We will notify you every time a shipment is heading to your neighborhood, and you could immediatly let us know if you want in or not.
    feature:
      type: ImageBlock
      url: "/images/lobster.jpg"
      altText: Fisherman holding lobster
    form:
      type: FormBlock
      idAttr: contact-form
      fields:
        - type: TextFormControl
          name: name
          label: Name
          placeholder: Your name
          isRequired: true
          width: 1/2
        - type: EmailFormControl
          name: email
          label: Email
          placeholder: Your email
          isRequired: true
          width: 1/2
        - type: TextFormControl
          name: home-address
          label: Home address
          placeholder: Your home address
          isRequired: true
          width: full
        - type: CheckboxFormControl
          name: updates
          label: Sign me up to receive updates
          width: full
      submitLabel: Send Message
  - type: CtaSection
    variant: variant-a
    colors: colors-h
    width: wide
    height: short
    topGap: large
    bottomGap: large
    alignHoriz: left
    title: Let's go kayak fishing!
    text: |-
      That kayak fishing community is special, the connection and support the anglers share is unlike anything I have seen before. River Catch has seen this firsthand by participating in events and they’re always spending time with anglers.
    backgroundImage:
      type: ImageBlock
      url: "/images/cta.jpg"
      opacity: 20
    actions:
      - type: Button
        label: Get Started
        url: "https://www.stackbit.com/"
        style: primary
---
