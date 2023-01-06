---
layout: PageLayout
metaTitle: null
metaDescription: null
addTitleSuffix: true
socialImage: null
metaTags: []
title: Defensores Flow
sections:
  - type: HeroSection
    colors: colors-d
    title: We do fishing differently
    subtitle: Fresh. Better. Faster.
    actions:
      - type: Button
        label: Get Started
        url: /
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
    media: null
    backgroundImage:
      type: BackgroundImage
      url: /images/hero.webp
      backgroundSize: cover
      backgroundPosition: top
      opacity: 100
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-6
        padding:
          - pt-36
          - pb-96
          - pl-12
          - pr-12
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: QuoteSection
    colors: colors-d
    quote: >-
      "It’s great to see someone taking action while still maintaining a
      sustainable fish supply to home cooks."
    name: Isabelle Parks
    title: Head chef at Parks
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-28
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
      quote:
        textAlign: center
      name:
        textAlign: center
      title:
        textAlign: center
  - type: FeaturedPostsSection
    colors: colors-c
    variant: variant-a
    title: Seasonal adventures
    actions:
      - type: Link
        label: See all adventures
        url: /blog
        showIcon: true
        icon: arrowRight
        iconPosition: right
    showDate: true
    showAuthor: false
    showExcerpt: true
    showReadMoreLink: true
    readMoreLinkLabel: Saiba Mais
    posts:
      - content/pages/blog/post-two.md
      - content/pages/blog/post-three.md
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-28
          - pb-48
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: TextSection
    colors: colors-e
    variant: variant-a
    text: '## [Follow us on Instagram](https://www.stackbit.com/)'
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-28
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      text:
        textAlign: center
  - type: FeatureHighlightSection
    colors: colors-d
    backgroundSize: full
    title: Time to leave your desk. Let’s go flying
    text: 'We’re local, seasonal fisherman, supporting fishing restrictions.'
    actions:
      - type: Button
        label: Saiba Mais
        url: 'https://www.stackbit.com/'
        style: secondary
        showIcon: true
        icon: arrowRight
        iconPosition: right
    backgroundImage:
      type: BackgroundImage
      url: /images/hero-3.png
      backgroundSize: cover
      backgroundPosition: top
      opacity: 100
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-36
          - pb-72
          - pl-4
          - pr-4
        justifyContent: flex-start
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: ContactSection
    colors: colors-d
    title: Join our club
    text: >-
      We will notify you every time a shipment is heading to your neighborhood,
      and you could immediatly let us know if you want in or not
    form:
      type: FormBlock
      elementId: sign-up-form
      action: /.netlify/functions/submission_created
      destination: ''
      fields:
        - type: TextFormControl
          name: firstName
          label: First Name
          hideLabel: true
          placeholder: First Name
          isRequired: false
          width: 1/2
        - type: TextFormControl
          name: lastName
          label: Last Name
          hideLabel: true
          placeholder: Last Name
          isRequired: false
          width: 1/2
        - type: EmailFormControl
          name: email
          label: Email
          hideLabel: true
          placeholder: Email
          isRequired: true
          width: full
        - type: TextFormControl
          name: address
          label: Address
          hideLabel: true
          placeholder: Address
          isRequired: true
          width: full
        - type: CheckboxFormControl
          name: updatesConsent
          label: Sign me up to recieve updates
          isRequired: false
          width: full
      submitLabel: Submit form
      styles:
        submitLabel:
          textAlign: center
    media: null
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: center
      text:
        textAlign: center
---
