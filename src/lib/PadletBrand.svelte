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
  export let ariaLabel: string = 'padlet brand';
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
      d="M297.9 0L298 .001C305.6 .1078 312.4 4.72 315.5 11.78L447.5 320.3L447.8 320.2L448 320.6L445.2 330.6L402.3 488.6C398.6 504.8 382.6 514.9 366.5 511.2L298.1 495.6L229.6 511.2C213.5 514.9 197.5 504.8 193.8 488.6L150.9 330.6L148.2 320.6L148.3 320.2L280.4 11.78C283.4 4.797 290.3 .1837 297.9 .0006L297.9 0zM160.1 322.1L291.1 361.2L298 483.7L305.9 362.2L436.5 322.9L436.7 322.8L305.7 347.9L297.1 27.72L291.9 347.9L160.1 322.1zM426 222.6L520.4 181.6H594.2L437.2 429.2L468.8 320.2L426 222.6zM597.5 181.4L638.9 257.6C642.9 265.1 635 273.5 627.3 269.8L579.7 247.1L597.5 181.4zM127.3 318.5L158.7 430L1.61 154.5C-4.292 144.1 7.128 132.5 17.55 138.3L169.4 222.5L127.3 318.5z"
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
      d="M297.9 0L298 .001C305.6 .1078 312.4 4.72 315.5 11.78L447.5 320.3L447.8 320.2L448 320.6L445.2 330.6L402.3 488.6C398.6 504.8 382.6 514.9 366.5 511.2L298.1 495.6L229.6 511.2C213.5 514.9 197.5 504.8 193.8 488.6L150.9 330.6L148.2 320.6L148.3 320.2L280.4 11.78C283.4 4.797 290.3 .1837 297.9 .0006L297.9 0zM160.1 322.1L291.1 361.2L298 483.7L305.9 362.2L436.5 322.9L436.7 322.8L305.7 347.9L297.1 27.72L291.9 347.9L160.1 322.1zM426 222.6L520.4 181.6H594.2L437.2 429.2L468.8 320.2L426 222.6zM597.5 181.4L638.9 257.6C642.9 265.1 635 273.5 627.3 269.8L579.7 247.1L597.5 181.4zM127.3 318.5L158.7 430L1.61 154.5C-4.292 144.1 7.128 132.5 17.55 138.3L169.4 222.5L127.3 318.5z"
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
@prop export let ariaLabel: string = 'padlet brand';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
