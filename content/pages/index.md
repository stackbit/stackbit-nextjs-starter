---
title: Home
sections:
  - type: hero_section
    variant: variant-b
    title: A different kind of fish market
    text: |-
      A group of local fisherman, working to deliver sustainable fish to your table. Each fish you buy, helps support fishing regulations and laws, to help sustain a better future for our waters, our food, and our globe.
    actions:
      - label: Get Started
        url: https://www.stackbit.com/
        style: button
  - type: testimonials_section
    variant: variant-a
    testimonials:
      - quote: |-
          “It’s great to see someone taking action while still maintaining a sustainable fish supply to home cooks.”
        name: Isabelle Parks
        title: Head chef at Parks
        imageUrl: images/isabelle-parks.jpg
        imageAltText: Isabelle Parks
  - type: posts_section
    variant: variant-a
    posts:
      - content/pages/blog/sustainability-at-its-purest.md
      - content/pages/blog/as-fresh-as-it-gets.md
      - content/pages/blog/bi-weekly-subscription.md
  - type: contact_section
    variant: variant-a
    title: Join our club
    text: >-
      We will notify you every time a shipment is heading to your neighborhood, and you could immediatly let us know if you want in or not.
    imageUrl: images/lobster.jpg
    imageAltText: Fisherman holding lobster
    form:
      formId: contact-form
      formFields:
        - inputType: text
          name: name
          label: Name
          defaultValue: Name
          isRequired: true
          width: w-1/2
        - inputType: email
          name: email
          label: Email
          defaultValue: Email
          isRequired: true
          width: w-1/2
        - inputType: text
          name: home-address
          label: Home address
          defaultValue: Home address
        - inputType: checkbox
          name: updates
          label: Sign me up to recieve updates
      submitLabel: Send Message
layout: advanced
---
