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
    ariaLabel =  "stubber brands" , 
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
      <path d="M136.5 294.2l58.8 22.9c9.1-36.8 25.4-61.1 55-61.1c49.4 0 71.4 63.6 142.4 63.6c15.6 0 35.9-2.8 55.3-13.3V368c0 61.8-50.4 112-112.3 112H0l41.8-56L0 368l41.7-56L0 256.1l41.8-56L0 144.1 41.8 88 0 32H335.7C397.6 32 448 82.3 448 144.1v51.3c-9.2 36.3-25.9 60.6-55 60.6c-49.6 0-71.6-63.5-142.4-63.5c-35.9 0-95.2 14.6-114.1 101.6h0z"/>
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
      <path d="M136.5 294.2l58.8 22.9c9.1-36.8 25.4-61.1 55-61.1c49.4 0 71.4 63.6 142.4 63.6c15.6 0 35.9-2.8 55.3-13.3V368c0 61.8-50.4 112-112.3 112H0l41.8-56L0 368l41.7-56L0 256.1l41.8-56L0 144.1 41.8 88 0 32H335.7C397.6 32 448 82.3 448 144.1v51.3c-9.2 36.3-25.9 60.6-55 60.6c-49.6 0-71.6-63.5-142.4-63.5c-35.9 0-95.2 14.6-114.1 101.6h0z"/>
  </svg>
{/if}
