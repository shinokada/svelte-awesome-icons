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
  export let ariaLabel: string = 'alipay brand';
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
    viewBox="0 0 448 512"
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
      d="M377.74 32H70.26C31.41 32 0 63.41 0 102.26v307.48C0 448.59 31.41 480 70.26 480h307.48c38.52 0 69.76-31.08 70.26-69.6-45.96-25.62-110.59-60.34-171.6-88.44-32.07 43.97-84.14 81-148.62 81-70.59 0-93.73-45.3-97.04-76.37-3.97-39.01 14.88-81.5 99.52-81.5 35.38 0 79.35 10.25 127.13 24.96 16.53-30.09 26.45-60.34 26.45-60.34h-178.2v-16.7h92.08v-31.24H88.28v-19.01h109.44V92.34h50.92v50.42h109.44v19.01H248.63v31.24h88.77s-15.21 46.62-38.35 90.92c48.93 16.7 100.01 36.04 148.62 52.74V102.26C447.83 63.57 416.43 32 377.74 32zM47.28 322.95c.99 20.17 10.25 53.73 69.93 53.73 52.07 0 92.58-39.68 117.87-72.9-44.63-18.68-84.48-31.41-109.44-31.41-67.45 0-79.35 33.06-78.36 50.58z"
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
    viewBox="0 0 448 512"
  >
    {#if title.id && title.title}
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    <path
      d="M377.74 32H70.26C31.41 32 0 63.41 0 102.26v307.48C0 448.59 31.41 480 70.26 480h307.48c38.52 0 69.76-31.08 70.26-69.6-45.96-25.62-110.59-60.34-171.6-88.44-32.07 43.97-84.14 81-148.62 81-70.59 0-93.73-45.3-97.04-76.37-3.97-39.01 14.88-81.5 99.52-81.5 35.38 0 79.35 10.25 127.13 24.96 16.53-30.09 26.45-60.34 26.45-60.34h-178.2v-16.7h92.08v-31.24H88.28v-19.01h109.44V92.34h50.92v50.42h109.44v19.01H248.63v31.24h88.77s-15.21 46.62-38.35 90.92c48.93 16.7 100.01 36.04 148.62 52.74V102.26C447.83 63.57 416.43 32 377.74 32zM47.28 322.95c.99 20.17 10.25 53.73 69.93 53.73 52.07 0 92.58-39.68 117.87-72.9-44.63-18.68-84.48-31.41-109.44-31.41-67.45 0-79.35 33.06-78.36 50.58z"
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
@prop export let ariaLabel: string = 'alipay brand';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
