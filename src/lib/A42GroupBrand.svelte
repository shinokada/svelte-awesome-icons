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
  export let ariaLabel: string = '42 group brand';
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
      d="M320 96V416C341.011 416 361.818 411.861 381.23 403.821C400.641 395.78 418.28 383.995 433.138 369.138C447.995 354.28 459.78 336.641 467.821 317.23C475.861 297.818 480 277.011 480 256C480 234.989 475.861 214.182 467.821 194.771C459.78 175.359 447.995 157.72 433.138 142.863C418.28 128.005 400.641 116.22 381.23 108.179C361.818 100.139 341.011 96 320 96ZM0 256L160.002 416L320.003 256L160.002 96L0 256ZM480 256C480 277.011 484.138 297.818 492.179 317.23C500.219 336.643 512.005 354.28 526.862 369.138C541.72 383.995 559.357 395.781 578.77 403.821C598.182 411.862 618.989 416 640 416V96C597.565 96 556.869 112.858 526.862 142.863C496.857 172.869 480 213.565 480 256Z"
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
      d="M320 96V416C341.011 416 361.818 411.861 381.23 403.821C400.641 395.78 418.28 383.995 433.138 369.138C447.995 354.28 459.78 336.641 467.821 317.23C475.861 297.818 480 277.011 480 256C480 234.989 475.861 214.182 467.821 194.771C459.78 175.359 447.995 157.72 433.138 142.863C418.28 128.005 400.641 116.22 381.23 108.179C361.818 100.139 341.011 96 320 96ZM0 256L160.002 416L320.003 256L160.002 96L0 256ZM480 256C480 277.011 484.138 297.818 492.179 317.23C500.219 336.643 512.005 354.28 526.862 369.138C541.72 383.995 559.357 395.781 578.77 403.821C598.182 411.862 618.989 416 640 416V96C597.565 96 556.869 112.858 526.862 142.863C496.857 172.869 480 213.565 480 256Z"
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
@prop export let ariaLabel: string = '42 group brand';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
