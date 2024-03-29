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
  export let ariaLabel: string = 'wodu brand';
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
      d="M178.414 339.706H141.1L112.166 223.475h-.478L83.228 339.706H45.2L0 168.946H37.548L64.574 285.177h.478L94.707 168.946h35.157l29.178 117.667h.479L187.5 168.946h36.831zM271.4 212.713c38.984 0 64.1 25.828 64.1 65.291 0 39.222-25.111 65.05-64.1 65.05-38.743 0-63.855-25.828-63.855-65.05C207.547 238.541 232.659 212.713 271.4 212.713zm0 104.753c23.2 0 30.133-19.852 30.133-39.462 0-19.852-6.934-39.7-30.133-39.7-27.7 0-29.894 19.85-29.894 39.7C241.508 297.614 248.443 317.466 271.4 317.466zM435.084 323.922h-.478c-7.893 13.392-21.765 19.132-37.548 19.132-37.31 0-55.485-32.045-55.485-66.246 0-33.243 18.415-64.095 54.767-64.095 14.589 0 28.938 6.218 36.831 18.416h.24V168.946h33.96v170.76H435.084zM405.428 238.3c-22.24 0-29.894 19.134-29.894 39.463 0 19.371 8.848 39.7 29.894 39.7 22.482 0 29.178-19.613 29.178-39.94C434.606 257.436 427.432 238.3 405.428 238.3zM592.96 339.706H560.673V322.487h-.718c-8.609 13.87-23.436 20.567-37.786 20.567-36.113 0-45.2-20.328-45.2-50.941V216.061h33.959V285.9c0 20.329 5.979 30.372 21.765 30.372 18.415 0 26.306-10.283 26.306-35.393V216.061H592.96zM602.453 302.876H640v36.83H602.453z"
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
      d="M178.414 339.706H141.1L112.166 223.475h-.478L83.228 339.706H45.2L0 168.946H37.548L64.574 285.177h.478L94.707 168.946h35.157l29.178 117.667h.479L187.5 168.946h36.831zM271.4 212.713c38.984 0 64.1 25.828 64.1 65.291 0 39.222-25.111 65.05-64.1 65.05-38.743 0-63.855-25.828-63.855-65.05C207.547 238.541 232.659 212.713 271.4 212.713zm0 104.753c23.2 0 30.133-19.852 30.133-39.462 0-19.852-6.934-39.7-30.133-39.7-27.7 0-29.894 19.85-29.894 39.7C241.508 297.614 248.443 317.466 271.4 317.466zM435.084 323.922h-.478c-7.893 13.392-21.765 19.132-37.548 19.132-37.31 0-55.485-32.045-55.485-66.246 0-33.243 18.415-64.095 54.767-64.095 14.589 0 28.938 6.218 36.831 18.416h.24V168.946h33.96v170.76H435.084zM405.428 238.3c-22.24 0-29.894 19.134-29.894 39.463 0 19.371 8.848 39.7 29.894 39.7 22.482 0 29.178-19.613 29.178-39.94C434.606 257.436 427.432 238.3 405.428 238.3zM592.96 339.706H560.673V322.487h-.718c-8.609 13.87-23.436 20.567-37.786 20.567-36.113 0-45.2-20.328-45.2-50.941V216.061h33.959V285.9c0 20.329 5.979 30.372 21.765 30.372 18.415 0 26.306-10.283 26.306-35.393V216.061H592.96zM602.453 302.876H640v36.83H602.453z"
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
@prop export let ariaLabel: string = 'wodu brand';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
