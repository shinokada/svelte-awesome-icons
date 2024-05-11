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
    ariaLabel =  "square letterboxd brands" , 
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
      <path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM105.1 187C66.4 187 35 218.3 35 257s31.4 70 70.1 70c24.8 0 46.5-12.8 59-32.2l.5-.7-.4-.6c-6.5-10.6-10.2-23.1-10.2-36.5c0-13.6 3.9-26.3 10.6-37.1c-12.4-19.8-34.4-32.9-59.5-32.9zM224 187c-24.8 0-46.5 12.8-59 32.2l-.5 .7 .4 .6c6.5 10.6 10.2 23.1 10.2 36.5c0 13.6-3.9 26.3-10.6 37.1C176.9 313.8 198.9 327 224 327c24.8 0 46.5-12.8 59-32.2l.5-.7-.4-.6c-6.5-10.6-10.2-23.1-10.2-36.5c0-13.6 3.9-26.3 10.6-37.1C271.1 200.2 249.1 187 224 187zm118.9 0c-24.8 0-46.5 12.8-59 32.2l-.5 .7 .4 .6c6.5 10.6 10.2 23.1 10.2 36.5c0 13.6-3.9 26.3-10.6 37.1c12.4 19.8 34.4 32.9 59.5 32.9c38.7 0 70.1-31.3 70.1-70s-31.4-70-70.1-70z"/>
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
      <path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM105.1 187C66.4 187 35 218.3 35 257s31.4 70 70.1 70c24.8 0 46.5-12.8 59-32.2l.5-.7-.4-.6c-6.5-10.6-10.2-23.1-10.2-36.5c0-13.6 3.9-26.3 10.6-37.1c-12.4-19.8-34.4-32.9-59.5-32.9zM224 187c-24.8 0-46.5 12.8-59 32.2l-.5 .7 .4 .6c6.5 10.6 10.2 23.1 10.2 36.5c0 13.6-3.9 26.3-10.6 37.1C176.9 313.8 198.9 327 224 327c24.8 0 46.5-12.8 59-32.2l.5-.7-.4-.6c-6.5-10.6-10.2-23.1-10.2-36.5c0-13.6 3.9-26.3 10.6-37.1C271.1 200.2 249.1 187 224 187zm118.9 0c-24.8 0-46.5 12.8-59 32.2l-.5 .7 .4 .6c6.5 10.6 10.2 23.1 10.2 36.5c0 13.6-3.9 26.3-10.6 37.1c12.4 19.8 34.4 32.9 59.5 32.9c38.7 0 70.1-31.3 70.1-70s-31.4-70-70.1-70z"/>
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-awesome-icons.codewithshin.com/)
## Props
@props: 
-->
