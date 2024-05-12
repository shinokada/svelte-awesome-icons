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
    ariaLabel =  "teeth open solid" , 
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
    viewBox="0 0 576 512"
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
      <path d="M96 32C43 32 0 75 0 128v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-53-43-96-96-96H96zM224 96c26.5 0 48 21.5 48 48v56c0 13.3-10.7 24-24 24H200c-13.3 0-24-10.7-24-24V144c0-26.5 21.5-48 48-48zm80 48c0-26.5 21.5-48 48-48s48 21.5 48 48v56c0 13.3-10.7 24-24 24H328c-13.3 0-24-10.7-24-24V144zM96 128c26.5 0 48 21.5 48 48v24c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V176c0-26.5 21.5-48 48-48zm336 48c0-26.5 21.5-48 48-48s48 21.5 48 48v24c0 13.3-10.7 24-24 24H456c-13.3 0-24-10.7-24-24V176zM96 480H480c53 0 96-43 96-96V352c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v32c0 53 43 96 96 96zm0-64c-26.5 0-48-21.5-48-48V344c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v24c0 26.5-21.5 48-48 48zm80-48V344c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v24c0 26.5-21.5 48-48 48s-48-21.5-48-48zm176 48c-26.5 0-48-21.5-48-48V344c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v24c0 26.5-21.5 48-48 48zm80-48V344c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v24c0 26.5-21.5 48-48 48s-48-21.5-48-48z"/>
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
    {#if title?.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      <path d="M96 32C43 32 0 75 0 128v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-53-43-96-96-96H96zM224 96c26.5 0 48 21.5 48 48v56c0 13.3-10.7 24-24 24H200c-13.3 0-24-10.7-24-24V144c0-26.5 21.5-48 48-48zm80 48c0-26.5 21.5-48 48-48s48 21.5 48 48v56c0 13.3-10.7 24-24 24H328c-13.3 0-24-10.7-24-24V144zM96 128c26.5 0 48 21.5 48 48v24c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V176c0-26.5 21.5-48 48-48zm336 48c0-26.5 21.5-48 48-48s48 21.5 48 48v24c0 13.3-10.7 24-24 24H456c-13.3 0-24-10.7-24-24V176zM96 480H480c53 0 96-43 96-96V352c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v32c0 53 43 96 96 96zm0-64c-26.5 0-48-21.5-48-48V344c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v24c0 26.5-21.5 48-48 48zm80-48V344c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v24c0 26.5-21.5 48-48 48s-48-21.5-48-48zm176 48c-26.5 0-48-21.5-48-48V344c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v24c0 26.5-21.5 48-48 48zm80-48V344c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v24c0 26.5-21.5 48-48 48s-48-21.5-48-48z"/>
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
@prop ariaLabel =  "teeth open solid"
@prop onclick
@prop onkeydown
@prop onkeyup
@prop ...restProps
-->
