<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'archway';
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
  viewBox="0 0 512 512"
  ><path
    d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zm0 384c-17.7 0-32 14.3-32 32s14.3 32 32 32H96h64V352c0-53 43-96 96-96s96 43 96 96V480h64 64c17.7 0 32-14.3 32-32s-14.3-32-32-32V128H32V416z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-awesome-icons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'archway';
-->
