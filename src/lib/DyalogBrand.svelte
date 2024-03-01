<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'dyalog';
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
  viewBox="0 0 416 512"
  ><path
    d="M0 32v119.2h64V96h107.2C284.6 96 352 176.2 352 255.9 352 332 293.4 416 171.2 416H0v64h171.2C331.9 480 416 367.3 416 255.9c0-58.7-22.1-113.4-62.3-154.3C308.9 56 245.7 32 171.2 32H0z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-awesome-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'dyalog';
-->
