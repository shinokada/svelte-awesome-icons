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
    ariaLabel =  "cloud moon rain solid" , 
    onclick, 
    onkeydown, 
    onkeyup,
    ...restProps 
  }: Props = $props();

  let ariaDescribedby = `${title.id || ''} ${desc.id || ''}`;
  const hasDescription = $derived(!!(title.id || desc.id));
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
    viewBox="0 0 576 512"
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
      <path d="M481.2 0C417 0 363.5 46.5 353.7 107.6c35.4 17.6 60.2 53.3 62.1 95.1c23.2 11 42 29.7 53.1 52.7c4 .4 8.1 .6 12.3 .6c34.9 0 66.7-13.8 89.9-36.1c5.1-4.9 6.4-12.5 3.2-18.7s-10.1-9.7-17-8.6c-4.9 .8-10 1.3-15.2 1.3c-49 0-88.4-39.3-88.4-87.4c0-32.6 18-61.1 44.9-76.1c6.1-3.4 9.3-10.5 7.8-17.4s-7.3-12-14.3-12.6c-3.6-.3-7.3-.5-10.9-.5zM367.9 383.9c44.2 0 80-35.8 80-80c0-39.3-28.4-72.1-65.8-78.7c1.2-5.6 1.9-11.3 1.9-17.2c0-44.2-35.8-80-80-80c-17 0-32.8 5.3-45.8 14.4C241.3 114.6 210.8 96 176 96c-53 0-96 43-96 96l0 1.3c-45.4 7.6-80 47.1-80 94.6c0 53 43 96 96 96H367.9zM85.4 420.1c-11-7.4-25.9-4.4-33.3 6.7l-32 48c-7.4 11-4.4 25.9 6.7 33.3s25.9 4.4 33.3-6.7l32-48c7.4-11 4.4-25.9-6.7-33.3zm96 0c-11-7.4-25.9-4.4-33.3 6.7l-32 48c-7.4 11-4.4 25.9 6.7 33.3s25.9 4.4 33.3-6.7l32-48c7.4-11 4.4-25.9-6.7-33.3zm96 0c-11-7.4-25.9-4.4-33.3 6.7l-32 48c-7.4 11-4.4 25.9 6.7 33.3s25.9 4.4 33.3-6.7l32-48c7.4-11 4.4-25.9-6.7-33.3zm96 0c-11-7.4-25.9-4.4-33.3 6.7l-32 48c-7.4 11-4.4 25.9 6.7 33.3s25.9 4.4 33.3-6.7l32-48c7.4-11 4.4-25.9-6.7-33.3z"/>
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
    viewBox="0 0 576 512"
  >
    {#if title.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      <path d="M481.2 0C417 0 363.5 46.5 353.7 107.6c35.4 17.6 60.2 53.3 62.1 95.1c23.2 11 42 29.7 53.1 52.7c4 .4 8.1 .6 12.3 .6c34.9 0 66.7-13.8 89.9-36.1c5.1-4.9 6.4-12.5 3.2-18.7s-10.1-9.7-17-8.6c-4.9 .8-10 1.3-15.2 1.3c-49 0-88.4-39.3-88.4-87.4c0-32.6 18-61.1 44.9-76.1c6.1-3.4 9.3-10.5 7.8-17.4s-7.3-12-14.3-12.6c-3.6-.3-7.3-.5-10.9-.5zM367.9 383.9c44.2 0 80-35.8 80-80c0-39.3-28.4-72.1-65.8-78.7c1.2-5.6 1.9-11.3 1.9-17.2c0-44.2-35.8-80-80-80c-17 0-32.8 5.3-45.8 14.4C241.3 114.6 210.8 96 176 96c-53 0-96 43-96 96l0 1.3c-45.4 7.6-80 47.1-80 94.6c0 53 43 96 96 96H367.9zM85.4 420.1c-11-7.4-25.9-4.4-33.3 6.7l-32 48c-7.4 11-4.4 25.9 6.7 33.3s25.9 4.4 33.3-6.7l32-48c7.4-11 4.4-25.9-6.7-33.3zm96 0c-11-7.4-25.9-4.4-33.3 6.7l-32 48c-7.4 11-4.4 25.9 6.7 33.3s25.9 4.4 33.3-6.7l32-48c7.4-11 4.4-25.9-6.7-33.3zm96 0c-11-7.4-25.9-4.4-33.3 6.7l-32 48c-7.4 11-4.4 25.9 6.7 33.3s25.9 4.4 33.3-6.7l32-48c7.4-11 4.4-25.9-6.7-33.3zm96 0c-11-7.4-25.9-4.4-33.3 6.7l-32 48c-7.4 11-4.4 25.9 6.7 33.3s25.9 4.4 33.3-6.7l32-48c7.4-11 4.4-25.9-6.7-33.3z"/>
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-awesome-icons.codewithshin.com/)
## Props
@props: 
-->
