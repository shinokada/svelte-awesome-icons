<script>
  import '../app.postcss';
  import { page } from '$app/stores';
  import DarkMode from 'flowbite-svelte/DarkMode.svelte';
  import Navbar from 'flowbite-svelte/Navbar.svelte';
  import NavBrand from 'flowbite-svelte/NavBrand.svelte';
  import NavLi from 'flowbite-svelte/NavLi.svelte';
  import NavUl from 'flowbite-svelte/NavUl.svelte';
  import NavHamburger from 'flowbite-svelte/NavHamburger.svelte';
  import Footer from 'flowbite-svelte/Footer.svelte'
  import FooterBrand from 'flowbite-svelte/FooterBrand.svelte'
  import FooterLinkGroup from 'flowbite-svelte/FooterLinkGroup.svelte'
  import FooterLink from 'flowbite-svelte/FooterLink.svelte'
  import { MetaTags } from 'svelte-meta-tags';

  $: activeUrl = $page.url.pathname;
</script>

<MetaTags
  title="Svelte Awesome Icons"
  description="svelte-awesome-icons icon set for Svelte"
  openGraph={{
    type: 'website',
    url: 'https://svelte-awesome-icons.vercel.app/',
    title: "Svelte Awesome Icons",
    description: "Awesome icon set for Svelte",
    images: [{ url: 'https://open-graph-vercel.vercel.app/api/svelte-awesome-icons', width: 1200, height: 630, alt: "Svelte Awesome Icons" }],
    site_name: 'Svelte Awesome Icons'
  }}
  twitter={{
    handle: '@shinokada',
    cardType: 'summary_large_image',
    title: "Svelte Awesome Icons",
    description: "Awesome icon set for Svelte",
    image:'https://open-graph-vercel.vercel.app/api/svelte-awesome-icons',
    imageAlt: "Svelte Awesome Icons"
  }} />
  
<Navbar let:hidden let:toggle class="dark:bg-teal-950">
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-xl font-semibold text-primary-700 dark:text-primary-500">
      Svelte Awesome Icons
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/" active={activeUrl === '/'}>Home</NavLi>
    <NavLi href="/brand" active={activeUrl === '/brand'}>Brand</NavLi>
    <NavLi href="/regular" active={activeUrl === '/regular'}>Regular</NavLi>
    <NavLi href="/solid" active={activeUrl === '/solid'}>Solid</NavLi>
    <NavLi href="/all" active={activeUrl === '/all'}>All</NavLi>
    <NavLi href="https://github.com/shinokada/svelte-awesome-icons">GitHub</NavLi>
    <NavLi href="https://svelte-svg-icons.vercel.app/">Icon sets</NavLi>
  </NavUl>
  <DarkMode />
</Navbar>
<div class="mx-16 mb-16">
  <slot />
</div>

<Footer footerType="logo" class="dark:bg-teal-950 mx-8">
  <div class="sm:flex sm:items-center sm:justify-between">
  <FooterBrand
  href="https://svelte-awesome-icons.vercel.app/"
  name="Svelte Awesome Icons"
  classSpan="text-primary-700 dark:text-primary-500"
/>
  <FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
    <FooterLink href="/docs">Docs</FooterLink>
    <FooterLink href="https://github.com/shinokada/svelte-awesome-icons/blob/main/LICENSE">Licensing</FooterLink>
    <FooterLink href="https://github.com/shinokada/svelte-awesome-icons/">GitHub</FooterLink>
  </FooterLinkGroup>
  </div>
</Footer>

