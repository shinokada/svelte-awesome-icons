<script lang='ts'>
  import { getContext } from 'svelte';
  type TitleType = {
    id?: string;
    title?: string;
  };
  type DescType = {
    id?: string;
    desc?: string;
  };
  interface BaseProps {
    size?: string;
    role?: string;
    color?: string;
    withEvents?: boolean;
    onclick?: (event: MouseEvent) => void;
    onkeydown?: (event: KeyboardEvent) => void;
    onkeyup?: (event: KeyboardEvent) => void;
    class?: string;
  }
  interface CtxType extends BaseProps {}
  const ctx: CtxType = getContext('iconCtx') ?? {};
  interface Props extends BaseProps{
    title?: TitleType;
    desc?: DescType;
    ariaLabel?: string;
  }

  let { 
    size = ctx.size || '24', 
    role = ctx.role || 'img', 
    color = ctx.color || 'currentColor', 
    withEvents = ctx.withEvents || false, 
    title = {}, 
    desc = {}, 
    class: classname, 
    ariaLabel =  "guarani sign solid" , 
    onclick, 
    onkeydown, 
    onkeyup,
    ...restProps 
  }: Props = $props();

  let ariaDescribedby = `${title.id || ''} ${desc.id || ''}`;
  let hasDescription = $state(false);

  function updateHasDescription() {
    // Double negation converts truthy values to true, falsy to false
    hasDescription = !!(title.id || desc.id); 
  }
  updateHasDescription();

  $effect(() => {
    updateHasDescription();
  })
</script>

{#if withEvents}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
    {role}
    width={size}
    height={size}
    class={classname}
    fill={color}
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    viewBox="0 0 384 512"
    onclick={onclick}
    onkeydown={onkeydown}
    onkeyup={onkeyup}
  >
    {#if title.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      <path d="M192 0c-17.7 0-32 14.3-32 32V66.7C69.2 81.9 0 160.9 0 256s69.2 174.1 160 189.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V445.3c90.8-15.2 160-94.2 160-189.3c0-17.7-14.3-32-32-32H224V132c22.1 5.7 41.8 17.1 57.6 32.6c12.6 12.4 32.9 12.2 45.3-.4s12.2-32.9-.5-45.3C299 92 263.5 73.3 224 66.7V32c0-17.7-14.3-32-32-32zM160 132V380c-55.2-14.2-96-64.3-96-124s40.8-109.8 96-124zM224 380V288h92c-11.6 45-47 80.4-92 92z"/>
  </svg>
{:else}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
    {role}
    width={size}
    height={size}
    class={classname}
    fill={color}
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    viewBox="0 0 384 512"
  >
    {#if title.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      <path d="M192 0c-17.7 0-32 14.3-32 32V66.7C69.2 81.9 0 160.9 0 256s69.2 174.1 160 189.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V445.3c90.8-15.2 160-94.2 160-189.3c0-17.7-14.3-32-32-32H224V132c22.1 5.7 41.8 17.1 57.6 32.6c12.6 12.4 32.9 12.2 45.3-.4s12.2-32.9-.5-45.3C299 92 263.5 73.3 224 66.7V32c0-17.7-14.3-32-32-32zM160 132V380c-55.2-14.2-96-64.3-96-124s40.8-109.8 96-124zM224 380V288h92c-11.6 45-47 80.4-92 92z"/>
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-awesome-icons.codewithshin.com/)
## Props
@props: 
-->
