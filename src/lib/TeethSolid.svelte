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
    ariaLabel =  "teeth solid" , 
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
      <path d="M0 128C0 75 43 32 96 32H480c53 0 96 43 96 96V384c0 53-43 96-96 96H96c-53 0-96-43-96-96V128zm176 48v56c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V176c0-26.5-21.5-48-48-48s-48 21.5-48 48zm176-48c-26.5 0-48 21.5-48 48v56c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V176c0-26.5-21.5-48-48-48zM48 208v24c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V208c0-26.5-21.5-48-48-48s-48 21.5-48 48zM96 384c26.5 0 48-21.5 48-48V312c0-13.3-10.7-24-24-24H72c-13.3 0-24 10.7-24 24v24c0 26.5 21.5 48 48 48zm80-48c0 26.5 21.5 48 48 48s48-21.5 48-48V312c0-13.3-10.7-24-24-24H200c-13.3 0-24 10.7-24 24v24zm176 48c26.5 0 48-21.5 48-48V312c0-13.3-10.7-24-24-24H328c-13.3 0-24 10.7-24 24v24c0 26.5 21.5 48 48 48zm80-176v24c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V208c0-26.5-21.5-48-48-48s-48 21.5-48 48zm48 176c26.5 0 48-21.5 48-48V312c0-13.3-10.7-24-24-24H456c-13.3 0-24 10.7-24 24v24c0 26.5 21.5 48 48 48z"/>
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
      <path d="M0 128C0 75 43 32 96 32H480c53 0 96 43 96 96V384c0 53-43 96-96 96H96c-53 0-96-43-96-96V128zm176 48v56c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V176c0-26.5-21.5-48-48-48s-48 21.5-48 48zm176-48c-26.5 0-48 21.5-48 48v56c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V176c0-26.5-21.5-48-48-48zM48 208v24c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V208c0-26.5-21.5-48-48-48s-48 21.5-48 48zM96 384c26.5 0 48-21.5 48-48V312c0-13.3-10.7-24-24-24H72c-13.3 0-24 10.7-24 24v24c0 26.5 21.5 48 48 48zm80-48c0 26.5 21.5 48 48 48s48-21.5 48-48V312c0-13.3-10.7-24-24-24H200c-13.3 0-24 10.7-24 24v24zm176 48c26.5 0 48-21.5 48-48V312c0-13.3-10.7-24-24-24H328c-13.3 0-24 10.7-24 24v24c0 26.5 21.5 48 48 48zm80-176v24c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V208c0-26.5-21.5-48-48-48s-48 21.5-48 48zm48 176c26.5 0 48-21.5 48-48V312c0-13.3-10.7-24-24-24H456c-13.3 0-24 10.7-24 24v24c0 26.5 21.5 48 48 48z"/>
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-awesome-icons.codewithshin.com/)
## Props
@props: 
-->
