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
    ariaLabel =  "cruzeiro sign solid" , 
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
    viewBox="0 0 448 512"
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
      <path d="M96 256c0-88.4 71.6-160 160-160c41 0 78.3 15.4 106.7 40.7c13.2 11.8 33.4 10.7 45.2-2.5s10.7-33.4-2.5-45.2c-39.6-35.5-92-57-149.3-57C132.3 32 32 132.3 32 256s100.3 224 224 224c57.4 0 109.7-21.6 149.3-57c13.2-11.8 14.3-32 2.5-45.2s-32-14.3-45.2-2.5C334.3 400.6 297 416 256 416V320v-8.7c0-12.8 10.4-23.3 23.3-23.3c4.6 0 9.1 1.4 12.9 3.9l10.1 6.7c14.7 9.8 34.6 5.8 44.4-8.9s5.8-34.6-8.9-44.4l-10.1-6.7c-14.3-9.6-31.2-14.7-48.4-14.7c-12.4 0-24.2 2.6-34.9 7.3c-5.5-4.5-12.6-7.3-20.3-7.3c-17.7 0-32 14.3-32 32v55.3V320v82.7C135.5 378 96 321.6 96 256z"/>
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
    viewBox="0 0 448 512"
  >
    {#if title.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      <path d="M96 256c0-88.4 71.6-160 160-160c41 0 78.3 15.4 106.7 40.7c13.2 11.8 33.4 10.7 45.2-2.5s10.7-33.4-2.5-45.2c-39.6-35.5-92-57-149.3-57C132.3 32 32 132.3 32 256s100.3 224 224 224c57.4 0 109.7-21.6 149.3-57c13.2-11.8 14.3-32 2.5-45.2s-32-14.3-45.2-2.5C334.3 400.6 297 416 256 416V320v-8.7c0-12.8 10.4-23.3 23.3-23.3c4.6 0 9.1 1.4 12.9 3.9l10.1 6.7c14.7 9.8 34.6 5.8 44.4-8.9s5.8-34.6-8.9-44.4l-10.1-6.7c-14.3-9.6-31.2-14.7-48.4-14.7c-12.4 0-24.2 2.6-34.9 7.3c-5.5-4.5-12.6-7.3-20.3-7.3c-17.7 0-32 14.3-32 32v55.3V320v82.7C135.5 378 96 321.6 96 256z"/>
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-awesome-icons.codewithshin.com/)
## Props
@props: 
-->
