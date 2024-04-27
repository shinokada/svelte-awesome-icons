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
    ariaLabel =  "truck plane solid" , 
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
      <path d="M200 0c-30.6 0-56 54.7-56 86.1V192.5L7.8 274.3C2.9 277.2 0 282.4 0 288v64c0 5.1 2.4 9.8 6.4 12.8s9.3 3.9 14.1 2.5l123.4-37v81.2l-50 40c-3.8 3-6 7.6-6 12.5v32c0 5.1 2.5 10 6.6 13s9.5 3.8 14.4 2.2L200 480.9 290.4 511c-1.6-4.7-2.4-9.8-2.4-15V463.4c-18.2-10.5-30.7-29.7-31.9-51.8l-.1-.1V408 325.5 184l0-1.1 0 0V86.1C256 54.7 231.5 0 200 0zm88 176V400c0 20.9 13.4 38.7 32 45.3V488c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V448H544v40c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V445.3c18.6-6.6 32-24.4 32-45.3V176c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48zm79.8 78.7c3.3-8.7 11.2-14.7 20.5-14.7H539.7c9.2 0 17.2 6 20.5 14.7L576 304H352l15.8-49.3zM568 352a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM336 376a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
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
      <path d="M200 0c-30.6 0-56 54.7-56 86.1V192.5L7.8 274.3C2.9 277.2 0 282.4 0 288v64c0 5.1 2.4 9.8 6.4 12.8s9.3 3.9 14.1 2.5l123.4-37v81.2l-50 40c-3.8 3-6 7.6-6 12.5v32c0 5.1 2.5 10 6.6 13s9.5 3.8 14.4 2.2L200 480.9 290.4 511c-1.6-4.7-2.4-9.8-2.4-15V463.4c-18.2-10.5-30.7-29.7-31.9-51.8l-.1-.1V408 325.5 184l0-1.1 0 0V86.1C256 54.7 231.5 0 200 0zm88 176V400c0 20.9 13.4 38.7 32 45.3V488c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V448H544v40c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V445.3c18.6-6.6 32-24.4 32-45.3V176c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48zm79.8 78.7c3.3-8.7 11.2-14.7 20.5-14.7H539.7c9.2 0 17.2 6 20.5 14.7L576 304H352l15.8-49.3zM568 352a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM336 376a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
  </svg>
{/if}
