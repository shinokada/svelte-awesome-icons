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
    ariaLabel =  "democrat solid" , 
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
    viewBox="0 0 640 512"
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
      <path d="M64 32c0-8.9 3.8-20.9 6.2-27.3C71.2 1.8 74 0 77 0c1.9 0 3.8 .7 5.2 2.1L128 45.7 173.8 2.1C175.2 .7 177.1 0 179 0c3 0 5.8 1.8 6.8 4.7c2.4 6.5 6.2 18.4 6.2 27.3c0 26.5-21.9 42-29.5 46.6l76.2 72.6c6 5.7 13.9 8.8 22.1 8.8H480l32 0c40.3 0 78.2 19 102.4 51.2l19.2 25.6c10.6 14.1 7.7 34.2-6.4 44.8s-34.2 7.7-44.8-6.4l-19.2-25.6c-5.3-7-11.8-12.8-19.2-17V320H192l-40.4-94.3c-3.9-9.2-15.3-12.6-23.6-7l-42.1 28c-9.1 6.1-19.7 9.3-30.7 9.3h-2C23.9 256 0 232.1 0 202.7c0-12.1 4.1-23.8 11.7-33.3L87.6 74.6C78.1 67.4 64 53.2 64 32zM448 352h96v64 64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V416H288v64c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V416 352h96H448zM260.9 210.9c-.9-1.8-2.8-2.9-4.8-2.9s-3.9 1.1-4.8 2.9l-10.5 20.5-23.5 3.3c-2 .3-3.7 1.6-4.3 3.5s-.1 3.9 1.3 5.3l17 16-4 22.6c-.3 1.9 .5 3.9 2.1 5s3.8 1.3 5.6 .4l21-10.7 21 10.7c1.8 .9 4 .8 5.6-.4s2.5-3.1 2.1-5l-4-22.6 17-16c1.5-1.4 2-3.4 1.3-5.3s-2.3-3.2-4.3-3.5l-23.5-3.3-10.5-20.5zM368.1 208c-2 0-3.9 1.1-4.8 2.9l-10.5 20.5-23.5 3.3c-2 .3-3.7 1.6-4.3 3.5s-.1 3.9 1.3 5.3l17 16-4 22.6c-.3 1.9 .5 3.9 2.1 5s3.8 1.3 5.6 .4l21-10.7 21 10.7c1.8 .9 4 .8 5.6-.4s2.5-3.1 2.1-5l-4-22.6 17-16c1.5-1.4 2-3.4 1.4-5.3s-2.3-3.2-4.3-3.5l-23.5-3.3-10.5-20.5c-.9-1.8-2.8-2.9-4.8-2.9zm116.8 2.9c-.9-1.8-2.8-2.9-4.8-2.9s-3.9 1.1-4.8 2.9l-10.5 20.5-23.5 3.3c-2 .3-3.7 1.6-4.3 3.5s-.1 3.9 1.3 5.3l17 16-4 22.6c-.3 1.9 .5 3.9 2.1 5s3.8 1.3 5.6 .4l21-10.7 21 10.7c1.8 .9 4 .8 5.6-.4s2.5-3.1 2.1-5l-4-22.6 17-16c1.5-1.4 2-3.4 1.4-5.3s-2.3-3.2-4.3-3.5l-23.5-3.3-10.5-20.5z"/>
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
    viewBox="0 0 640 512"
  >
    {#if title.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      <path d="M64 32c0-8.9 3.8-20.9 6.2-27.3C71.2 1.8 74 0 77 0c1.9 0 3.8 .7 5.2 2.1L128 45.7 173.8 2.1C175.2 .7 177.1 0 179 0c3 0 5.8 1.8 6.8 4.7c2.4 6.5 6.2 18.4 6.2 27.3c0 26.5-21.9 42-29.5 46.6l76.2 72.6c6 5.7 13.9 8.8 22.1 8.8H480l32 0c40.3 0 78.2 19 102.4 51.2l19.2 25.6c10.6 14.1 7.7 34.2-6.4 44.8s-34.2 7.7-44.8-6.4l-19.2-25.6c-5.3-7-11.8-12.8-19.2-17V320H192l-40.4-94.3c-3.9-9.2-15.3-12.6-23.6-7l-42.1 28c-9.1 6.1-19.7 9.3-30.7 9.3h-2C23.9 256 0 232.1 0 202.7c0-12.1 4.1-23.8 11.7-33.3L87.6 74.6C78.1 67.4 64 53.2 64 32zM448 352h96v64 64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V416H288v64c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V416 352h96H448zM260.9 210.9c-.9-1.8-2.8-2.9-4.8-2.9s-3.9 1.1-4.8 2.9l-10.5 20.5-23.5 3.3c-2 .3-3.7 1.6-4.3 3.5s-.1 3.9 1.3 5.3l17 16-4 22.6c-.3 1.9 .5 3.9 2.1 5s3.8 1.3 5.6 .4l21-10.7 21 10.7c1.8 .9 4 .8 5.6-.4s2.5-3.1 2.1-5l-4-22.6 17-16c1.5-1.4 2-3.4 1.3-5.3s-2.3-3.2-4.3-3.5l-23.5-3.3-10.5-20.5zM368.1 208c-2 0-3.9 1.1-4.8 2.9l-10.5 20.5-23.5 3.3c-2 .3-3.7 1.6-4.3 3.5s-.1 3.9 1.3 5.3l17 16-4 22.6c-.3 1.9 .5 3.9 2.1 5s3.8 1.3 5.6 .4l21-10.7 21 10.7c1.8 .9 4 .8 5.6-.4s2.5-3.1 2.1-5l-4-22.6 17-16c1.5-1.4 2-3.4 1.4-5.3s-2.3-3.2-4.3-3.5l-23.5-3.3-10.5-20.5c-.9-1.8-2.8-2.9-4.8-2.9zm116.8 2.9c-.9-1.8-2.8-2.9-4.8-2.9s-3.9 1.1-4.8 2.9l-10.5 20.5-23.5 3.3c-2 .3-3.7 1.6-4.3 3.5s-.1 3.9 1.3 5.3l17 16-4 22.6c-.3 1.9 .5 3.9 2.1 5s3.8 1.3 5.6 .4l21-10.7 21 10.7c1.8 .9 4 .8 5.6-.4s2.5-3.1 2.1-5l-4-22.6 17-16c1.5-1.4 2-3.4 1.4-5.3s-2.3-3.2-4.3-3.5l-23.5-3.3-10.5-20.5z"/>
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-awesome-icons.codewithshin.com/)
## Props
@props: 
-->
