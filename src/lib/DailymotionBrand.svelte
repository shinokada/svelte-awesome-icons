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
  export let ariaLabel: string = 'dailymotion brand';
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
      d="M298.93,267a48.4,48.4,0,0,0-24.36-6.21q-19.83,0-33.44,13.27t-13.61,33.42q0,21.16,13.28,34.6t33.43,13.44q20.5,0,34.11-13.78T322,307.47A47.13,47.13,0,0,0,315.9,284,44.13,44.13,0,0,0,298.93,267ZM0,32V480H448V32ZM374.71,405.26h-53.1V381.37h-.67q-15.79,26.2-55.78,26.2-27.56,0-48.89-13.1a88.29,88.29,0,0,1-32.94-35.77q-11.6-22.68-11.59-50.89,0-27.56,11.76-50.22a89.9,89.9,0,0,1,32.93-35.78q21.18-13.09,47.72-13.1a80.87,80.87,0,0,1,29.74,5.21q13.28,5.21,25,17V153l55.79-12.09Z"
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
      d="M298.93,267a48.4,48.4,0,0,0-24.36-6.21q-19.83,0-33.44,13.27t-13.61,33.42q0,21.16,13.28,34.6t33.43,13.44q20.5,0,34.11-13.78T322,307.47A47.13,47.13,0,0,0,315.9,284,44.13,44.13,0,0,0,298.93,267ZM0,32V480H448V32ZM374.71,405.26h-53.1V381.37h-.67q-15.79,26.2-55.78,26.2-27.56,0-48.89-13.1a88.29,88.29,0,0,1-32.94-35.77q-11.6-22.68-11.59-50.89,0-27.56,11.76-50.22a89.9,89.9,0,0,1,32.93-35.78q21.18-13.09,47.72-13.1a80.87,80.87,0,0,1,29.74,5.21q13.28,5.21,25,17V153l55.79-12.09Z"
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
@prop export let ariaLabel: string = 'dailymotion brand';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
