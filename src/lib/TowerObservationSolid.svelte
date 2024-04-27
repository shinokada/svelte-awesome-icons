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
    ariaLabel =  "tower observation solid" , 
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
    viewBox="0 0 512 512"
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
      <path d="M241.7 3.4c9-4.5 19.6-4.5 28.6 0l160 80c15.8 7.9 22.2 27.1 14.3 42.9C439 137.5 427.7 144 416 144v80c0 17.7-14.3 32-32 32h-4.9l32 192H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H384.5c-.4 0-.8 0-1.1 0H128.6c-.4 0-.8 0-1.1 0H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l32-192H128c-17.7 0-32-14.3-32-32V144c-11.7 0-23-6.5-28.6-17.7c-7.9-15.8-1.5-35 14.3-42.9l160-80zM314.5 448L256 399.2 197.5 448h117zM197.8 256l-4.7 28.3L256 336.8l62.9-52.5L314.2 256H197.8zm-13.9 83.2l-11.2 67L218.5 368l-34.6-28.8zM293.5 368l45.8 38.1-11.2-67L293.5 368zM176 128c-8.8 0-16 7.2-16 16s7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176z"/>
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
    viewBox="0 0 512 512"
  >
    {#if title.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      <path d="M241.7 3.4c9-4.5 19.6-4.5 28.6 0l160 80c15.8 7.9 22.2 27.1 14.3 42.9C439 137.5 427.7 144 416 144v80c0 17.7-14.3 32-32 32h-4.9l32 192H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H384.5c-.4 0-.8 0-1.1 0H128.6c-.4 0-.8 0-1.1 0H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l32-192H128c-17.7 0-32-14.3-32-32V144c-11.7 0-23-6.5-28.6-17.7c-7.9-15.8-1.5-35 14.3-42.9l160-80zM314.5 448L256 399.2 197.5 448h117zM197.8 256l-4.7 28.3L256 336.8l62.9-52.5L314.2 256H197.8zm-13.9 83.2l-11.2 67L218.5 368l-34.6-28.8zM293.5 368l45.8 38.1-11.2-67L293.5 368zM176 128c-8.8 0-16 7.2-16 16s7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176z"/>
  </svg>
{/if}
