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
    ariaLabel =  "wpbeginner brands" , 
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
      <path d="M462.799 322.374C519.01 386.682 466.961 480 370.944 480c-39.602 0-78.824-17.687-100.142-50.04-6.887.356-22.702.356-29.59 0C219.848 462.381 180.588 480 141.069 480c-95.49 0-148.348-92.996-91.855-157.626C-29.925 190.523 80.479 32 256.006 32c175.632 0 285.87 158.626 206.793 290.374zm-339.647-82.972h41.529v-58.075h-41.529v58.075zm217.18 86.072v-23.839c-60.506 20.915-132.355 9.198-187.589-33.971l.246 24.897c51.101 46.367 131.746 57.875 187.343 32.913zm-150.753-86.072h166.058v-58.075H189.579v58.075z"/>
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
      <path d="M462.799 322.374C519.01 386.682 466.961 480 370.944 480c-39.602 0-78.824-17.687-100.142-50.04-6.887.356-22.702.356-29.59 0C219.848 462.381 180.588 480 141.069 480c-95.49 0-148.348-92.996-91.855-157.626C-29.925 190.523 80.479 32 256.006 32c175.632 0 285.87 158.626 206.793 290.374zm-339.647-82.972h41.529v-58.075h-41.529v58.075zm217.18 86.072v-23.839c-60.506 20.915-132.355 9.198-187.589-33.971l.246 24.897c51.101 46.367 131.746 57.875 187.343 32.913zm-150.753-86.072h166.058v-58.075H189.579v58.075z"/>
  </svg>
{/if}
