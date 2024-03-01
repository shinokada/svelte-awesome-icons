<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'person dress';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...$$restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  class={$$props.class}
  aria-label={ariaLabel}
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  viewBox="0 0 320 512"
  ><path
    d="M160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM88 384H70.2c-10.9 0-18.6-10.7-15.2-21.1L93.3 248.1 59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l53.6-89.2c20.3-33.7 56.7-54.3 96-54.3h11.6c39.3 0 75.7 20.6 96 54.3l53.6 89.2c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9l-33.9-56.3L265 362.9c3.5 10.4-4.3 21.1-15.2 21.1H232v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H152v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-awesome-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'person dress';
-->
