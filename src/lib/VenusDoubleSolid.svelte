<script lang="ts">
  interface CtxType {
    size?: string;
    role?: string;
    color?: string;
    class?: string;
    withEvents?: boolean;
  }

  type TitleType = {
    id?: string;
    title?: string;
  };

  type DescType = {
    id?: string;
    desc?: string;
  };

  import { getContext } from 'svelte';
  const ctx: CtxType = getContext('iconCtx') ?? {};

  let className = ctx.class || '';
  export { className as class };
  export let size: string = ctx.size || '24';
  export let role: string = ctx.role || 'img';
  export let color: string = ctx.color || 'currentColor';
  export let withEvents = ctx.withEvents || false;
  export let ariaLabel: string = 'venus double solid';
  export let title: TitleType = {};
  export let desc: DescType = {};

  let ariaDescribedby = `${title.id || ''} ${desc.id || ''}`;
  let hasDescription = false;

  $: if (title.id || desc.id) {
    hasDescription = true;
  } else {
    hasDescription = false;
  }
</script>

{#if withEvents}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...$$restProps}
    {role}
    width={size}
    height={size}
    fill={color}
    class={className}
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    viewBox="0 0 640 512"
    on:click
    on:keydown
    on:keyup
    on:focus
    on:blur
    on:mouseenter
    on:mouseleave
    on:mouseover
    on:mouseout
  >
    {#if title.id && title.title}
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    <path
      d="M192 288a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM368 176c0 86.3-62.1 158.1-144 173.1V384h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H224v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V448H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h32V349.1C78.1 334.1 16 262.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176zM344 318c14.6-15.6 26.8-33.4 36-53c18.8 14.4 42.4 23 68 23c61.9 0 112-50.1 112-112s-50.1-112-112-112c-25.6 0-49.1 8.6-68 23c-9.3-19.5-21.5-37.4-36-53C373.1 12.6 409.1 0 448 0c97.2 0 176 78.8 176 176c0 86.3-62.1 158.1-144 173.1V384h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H480v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V448H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h32V349.1c-26.6-4.9-51.1-15.7-72-31.1z"
    />
  </svg>
{:else}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...$$restProps}
    {role}
    width={size}
    height={size}
    fill={color}
    class={className}
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    viewBox="0 0 640 512"
  >
    {#if title.id && title.title}
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    <path
      d="M192 288a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM368 176c0 86.3-62.1 158.1-144 173.1V384h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H224v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V448H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h32V349.1C78.1 334.1 16 262.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176zM344 318c14.6-15.6 26.8-33.4 36-53c18.8 14.4 42.4 23 68 23c61.9 0 112-50.1 112-112s-50.1-112-112-112c-25.6 0-49.1 8.6-68 23c-9.3-19.5-21.5-37.4-36-53C373.1 12.6 409.1 0 448 0c97.2 0 176 78.8 176 176c0 86.3-62.1 158.1-144 173.1V384h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H480v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V448H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h32V349.1c-26.6-4.9-51.1-15.7-72-31.1z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-awesome-icons.codewithshin.com)
## Props
@prop export let size: string = ctx.size || '24';
@prop export let role: string = ctx.role || 'img';
@prop export let color: string = ctx.color || 'currentColor';
@prop export let withEvents = ctx.withEvents || false;
@prop export let ariaLabel: string = 'venus double solid';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
