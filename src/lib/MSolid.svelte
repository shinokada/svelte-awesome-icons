<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'm';
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
  viewBox="0 0 448 512"
  ><path
    d="M22.7 33.4c13.5-4.1 28.1 1.1 35.9 12.9L224 294.3 389.4 46.2c7.8-11.7 22.4-17 35.9-12.9S448 49.9 448 64V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V169.7L250.6 369.8c-5.9 8.9-15.9 14.2-26.6 14.2s-20.7-5.3-26.6-14.2L64 169.7V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 49.9 9.2 37.5 22.7 33.4z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-awesome-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'm';
-->
