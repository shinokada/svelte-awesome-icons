<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'martini glass citrus';
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
  viewBox="0 0 576 512"
  ><path
    d="M432 240c53 0 96-43 96-96s-43-96-96-96c-35.5 0-66.6 19.3-83.2 48H296.2C316 40.1 369.3 0 432 0c79.5 0 144 64.5 144 144s-64.5 144-144 144c-27.7 0-53.5-7.8-75.5-21.3l35.4-35.4c12.2 5.6 25.8 8.7 40.1 8.7zM1.8 142.8C5.5 133.8 14.3 128 24 128H392c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-177 177V464h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H208 120c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V345.9L7 169c-6.9-6.9-8.9-17.2-5.2-26.2z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-awesome-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'martini glass citrus';
-->
