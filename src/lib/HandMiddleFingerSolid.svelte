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
    title, 
    desc, 
    class: classname, 
    ariaLabel =  "hand middle finger solid" , 
    onclick, 
    onkeydown, 
    onkeyup,
    ...restProps 
  }: Props = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
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
    {#if title?.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      <path d="M232 0c-22.1 0-40 17.9-40 40V204.2c-8.5-7.6-19.7-12.2-32-12.2c-26.5 0-48 21.5-48 48v7 73c0 8.8-7.2 16-16 16s-16-7.2-16-16V264.3c-2 1.4-3.9 3-5.8 4.5L55 284.8C40.4 297 32 315 32 334V372c0 38 16.9 74 46.1 98.3l5.4 4.5c28.8 24 65 37.1 102.4 37.1H304c70.7 0 128-57.3 128-128V320 288c0-26.5-21.5-48-48-48c-12.4 0-23.6 4.7-32.1 12.3C350 227.5 329.3 208 304 208c-12.3 0-23.5 4.6-32 12.2V40c0-22.1-17.9-40-40-40z"/>
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
    {#if title?.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      <path d="M232 0c-22.1 0-40 17.9-40 40V204.2c-8.5-7.6-19.7-12.2-32-12.2c-26.5 0-48 21.5-48 48v7 73c0 8.8-7.2 16-16 16s-16-7.2-16-16V264.3c-2 1.4-3.9 3-5.8 4.5L55 284.8C40.4 297 32 315 32 334V372c0 38 16.9 74 46.1 98.3l5.4 4.5c28.8 24 65 37.1 102.4 37.1H304c70.7 0 128-57.3 128-128V320 288c0-26.5-21.5-48-48-48c-12.4 0-23.6 4.7-32.1 12.3C350 227.5 329.3 208 304 208c-12.3 0-23.5 4.6-32 12.2V40c0-22.1-17.9-40-40-40z"/>
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-awesome-icons.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop color = ctx.color || 'currentColor'
@prop withEvents = ctx.withEvents || false
@prop title
@prop desc
@prop class: classname
@prop ariaLabel =  "hand middle finger solid"
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->
