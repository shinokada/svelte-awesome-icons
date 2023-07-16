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
  const title = "Svelte Awesome Icons"
  let divClass = 'w-full ml-auto lg:block lg:w-auto order-1 lg:order-none';
  let ulClass = 'flex flex-col py-3 my-4 lg:flex-row lg:my-0 text-sm font-medium gap-4 dark:lg:bg-transparent lg:bg-white lg:border-0';
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
  
<header class="flex-none w-full mx-auto bg-white dark:bg-stone-800">
  <Navbar color="default" fluid let:hidden let:toggle class="dark:bg-stone-800 ">
    <NavBrand href="/">
      <span class="self-center whitespace-nowrap text-2xl font-semibold text-primary-900 dark:text-primary-500"> {title} </span>
    </NavBrand>

    <NavUl {hidden} {divClass} {ulClass} on:click={() => setTimeout(toggle, 1)} 
      nonActiveClass="md:!pl-3 md:!py-2 lg:!pl-0 text-gray-700 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 dark:text-white lg:dark:hover:text-primary-700 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent" 
      activeClass="md:!pl-3 md:!py-2 lg:!pl-0 lg:text-primary-700 text-white dark:text-white dark:lg:text-primary-500 bg-primary-700 lg:bg-transparent dark:bg-primary-600 lg:dark:bg-transparent cursor-default"
      >
    <NavLi href="/" active={activeUrl === '/'}>Home</NavLi>
    <NavLi href="/brand" active={activeUrl === '/brand'}>Brand</NavLi>
    <NavLi href="/regular" active={activeUrl === '/regular'}>Regular</NavLi>
    <NavLi href="/solid" active={activeUrl === '/solid'}>Solid</NavLi>
    <NavLi href="/all" active={activeUrl === '/all'}>All</NavLi>
    <NavLi href="https://github.com/shinokada/svelte-awesome-icons">GitHub</NavLi>
    <NavLi href="https://svelte-svg-icons.vercel.app/">Icon sets</NavLi>
  </NavUl>
  <div class="flex items-center ml-auto">
    <DarkMode class="inline-block dark:hover:text-white hover:text-gray-900" />
  </div>
  <NavHamburger on:click={toggle} btnClass="ml-3 m-0 lg:hidden" />
</Navbar>
</header>
<div class="mx-8 mb-16">
  <slot />
</div>

<Footer footerType="logo" class="dark:dark:bg-stone-800">
  <div class="sm:flex sm:items-center sm:justify-between">
  <FooterBrand
  href="https://svelte-awesome-icons.vercel.app/"
  name="Svelte Awesome Icons"
  classSpan="text-primary-700 dark:text-primary-500"
/>
  <FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
    <FooterLink href="/">Home</FooterLink>
    <FooterLink href="/brand">Brand</FooterLink>
    <FooterLink href="/regular">Regular</FooterLink>
    <FooterLink href="/solid">Solid</FooterLink>
    <FooterLink href="https://github.com/shinokada/svelte-awesome-icons/blob/main/LICENSE">Licensing</FooterLink>
    <FooterLink href="https://github.com/shinokada/svelte-awesome-icons/">GitHub</FooterLink>
  </FooterLinkGroup>
  </div>
</Footer>

