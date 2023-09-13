<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'pallet';
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
  viewBox="0 0 640 512"
  ><path
    d="M32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H64v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H96 320 544h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H576V384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H544 320 96 32zm96 64H288v64H128V384zm224 0H512v64H352V384z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-awesome-icons.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'pallet';
-->
