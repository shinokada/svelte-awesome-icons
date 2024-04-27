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
    ariaLabel =  "phabricator brands" , 
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
    viewBox="0 0 496 512"
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
      <path d="M323 262.1l-.1-13s21.7-19.8 21.1-21.2l-9.5-20c-.6-1.4-29.5-.5-29.5-.5l-9.4-9.3s.2-28.5-1.2-29.1l-20.1-9.2c-1.4-.6-20.7 21-20.7 21l-13.1-.2s-20.5-21.4-21.9-20.8l-20 8.3c-1.4.5.2 28.9.2 28.9l-9.1 9.1s-29.2-.9-29.7.4l-8.1 19.8c-.6 1.4 21 21 21 21l.1 12.9s-21.7 19.8-21.1 21.2l9.5 20c.6 1.4 29.5.5 29.5.5l9.4 9.3s-.2 31.8 1.2 32.3l20.1 8.3c1.4.6 20.7-23.5 20.7-23.5l13.1.2s20.5 23.8 21.8 23.3l20-7.5c1.4-.6-.2-32.1-.2-32.1l9.1-9.1s29.2.9 29.7-.5l8.1-19.8c.7-1.1-20.9-20.7-20.9-20.7zm-44.9-8.7c.7 17.1-12.8 31.6-30.1 32.4-17.3.8-32.1-12.5-32.8-29.6-.7-17.1 12.8-31.6 30.1-32.3 17.3-.8 32.1 12.5 32.8 29.5zm201.2-37.9l-97-97-.1.1c-75.1-73.3-195.4-72.8-269.8 1.6-50.9 51-27.8 27.9-95.7 95.3-22.3 22.3-22.3 58.7 0 81 69.9 69.4 46.4 46 97.4 97l.1-.1c75.1 73.3 195.4 72.9 269.8-1.6 51-50.9 27.9-27.9 95.3-95.3 22.3-22.3 22.3-58.7 0-81zM140.4 363.8c-59.6-59.5-59.6-156 0-215.5 59.5-59.6 156-59.5 215.6 0 59.5 59.5 59.6 156 0 215.6-59.6 59.5-156 59.4-215.6-.1z"/>
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
    viewBox="0 0 496 512"
  >
    {#if title.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      <path d="M323 262.1l-.1-13s21.7-19.8 21.1-21.2l-9.5-20c-.6-1.4-29.5-.5-29.5-.5l-9.4-9.3s.2-28.5-1.2-29.1l-20.1-9.2c-1.4-.6-20.7 21-20.7 21l-13.1-.2s-20.5-21.4-21.9-20.8l-20 8.3c-1.4.5.2 28.9.2 28.9l-9.1 9.1s-29.2-.9-29.7.4l-8.1 19.8c-.6 1.4 21 21 21 21l.1 12.9s-21.7 19.8-21.1 21.2l9.5 20c.6 1.4 29.5.5 29.5.5l9.4 9.3s-.2 31.8 1.2 32.3l20.1 8.3c1.4.6 20.7-23.5 20.7-23.5l13.1.2s20.5 23.8 21.8 23.3l20-7.5c1.4-.6-.2-32.1-.2-32.1l9.1-9.1s29.2.9 29.7-.5l8.1-19.8c.7-1.1-20.9-20.7-20.9-20.7zm-44.9-8.7c.7 17.1-12.8 31.6-30.1 32.4-17.3.8-32.1-12.5-32.8-29.6-.7-17.1 12.8-31.6 30.1-32.3 17.3-.8 32.1 12.5 32.8 29.5zm201.2-37.9l-97-97-.1.1c-75.1-73.3-195.4-72.8-269.8 1.6-50.9 51-27.8 27.9-95.7 95.3-22.3 22.3-22.3 58.7 0 81 69.9 69.4 46.4 46 97.4 97l.1-.1c75.1 73.3 195.4 72.9 269.8-1.6 51-50.9 27.9-27.9 95.3-95.3 22.3-22.3 22.3-58.7 0-81zM140.4 363.8c-59.6-59.5-59.6-156 0-215.5 59.5-59.6 156-59.5 215.6 0 59.5 59.5 59.6 156 0 215.6-59.6 59.5-156 59.4-215.6-.1z"/>
  </svg>
{/if}
