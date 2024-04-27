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
    ariaLabel =  "hands holding solid" , 
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
      <path d="M80 104c0-22.1-17.9-40-40-40S0 81.9 0 104v56 64V325.5c0 25.5 10.1 49.9 28.1 67.9L128 493.3c12 12 28.3 18.7 45.3 18.7H240c26.5 0 48-21.5 48-48V385.1c0-29.7-11.8-58.2-32.8-79.2l-25.3-25.3 0 0-15.2-15.2-32-32c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l32 32 15.2 15.2c11 11 9.2 29.2-3.7 37.8c-9.7 6.5-22.7 5.2-31-3.1L98.7 309.5c-12-12-18.7-28.3-18.7-45.3V224 144 104zm480 0v40 80 40.2c0 17-6.7 33.3-18.7 45.3l-51.1 51.1c-8.3 8.3-21.3 9.6-31 3.1c-12.9-8.6-14.7-26.9-3.7-37.8l15.2-15.2 32-32c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-32 32-15.2 15.2 0 0-25.3 25.3c-21 21-32.8 49.5-32.8 79.2V464c0 26.5 21.5 48 48 48h66.7c17 0 33.3-6.7 45.3-18.7l99.9-99.9c18-18 28.1-42.4 28.1-67.9V224 160 104c0-22.1-17.9-40-40-40s-40 17.9-40 40z"/>
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
      <path d="M80 104c0-22.1-17.9-40-40-40S0 81.9 0 104v56 64V325.5c0 25.5 10.1 49.9 28.1 67.9L128 493.3c12 12 28.3 18.7 45.3 18.7H240c26.5 0 48-21.5 48-48V385.1c0-29.7-11.8-58.2-32.8-79.2l-25.3-25.3 0 0-15.2-15.2-32-32c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l32 32 15.2 15.2c11 11 9.2 29.2-3.7 37.8c-9.7 6.5-22.7 5.2-31-3.1L98.7 309.5c-12-12-18.7-28.3-18.7-45.3V224 144 104zm480 0v40 80 40.2c0 17-6.7 33.3-18.7 45.3l-51.1 51.1c-8.3 8.3-21.3 9.6-31 3.1c-12.9-8.6-14.7-26.9-3.7-37.8l15.2-15.2 32-32c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-32 32-15.2 15.2 0 0-25.3 25.3c-21 21-32.8 49.5-32.8 79.2V464c0 26.5 21.5 48 48 48h66.7c17 0 33.3-6.7 45.3-18.7l99.9-99.9c18-18 28.1-42.4 28.1-67.9V224 160 104c0-22.1-17.9-40-40-40s-40 17.9-40 40z"/>
  </svg>
{/if}
