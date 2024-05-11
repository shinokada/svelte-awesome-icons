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
    ariaLabel =  "snowplow solid" , 
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
      <path d="M298.9 64l68.6 160H256l-64-64V64H298.9zM445.1 242.7l-87.4-204C347.6 15.3 324.5 0 298.9 0H176c-26.5 0-48 21.5-48 48V160H96c-17.7 0-32 14.3-32 32V298.8C26.2 316.8 0 355.3 0 400c0 61.9 50.1 112 112 112H368c61.9 0 112-50.1 112-112c0-17.2-3.9-33.5-10.8-48H512v50.7c0 17 6.7 33.3 18.7 45.3l54.6 54.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L576 402.7V320 235.2L633 164c11-13.8 8.8-33.9-5-45s-33.9-8.8-45 5l-57 71.2c-9.1 11.3-14 25.4-14 40V288H448V256.7c.1-2.4-.2-4.8-.6-7.1s-1.2-4.7-2.2-6.8zM368 352c26.5 0 48 21.5 48 48s-21.5 48-48 48H112c-26.5 0-48-21.5-48-48s21.5-48 48-48H368zM144 400a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm216 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm-56-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM200 424a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/>
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
      <path d="M298.9 64l68.6 160H256l-64-64V64H298.9zM445.1 242.7l-87.4-204C347.6 15.3 324.5 0 298.9 0H176c-26.5 0-48 21.5-48 48V160H96c-17.7 0-32 14.3-32 32V298.8C26.2 316.8 0 355.3 0 400c0 61.9 50.1 112 112 112H368c61.9 0 112-50.1 112-112c0-17.2-3.9-33.5-10.8-48H512v50.7c0 17 6.7 33.3 18.7 45.3l54.6 54.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L576 402.7V320 235.2L633 164c11-13.8 8.8-33.9-5-45s-33.9-8.8-45 5l-57 71.2c-9.1 11.3-14 25.4-14 40V288H448V256.7c.1-2.4-.2-4.8-.6-7.1s-1.2-4.7-2.2-6.8zM368 352c26.5 0 48 21.5 48 48s-21.5 48-48 48H112c-26.5 0-48-21.5-48-48s21.5-48 48-48H368zM144 400a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm216 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm-56-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM200 424a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/>
  </svg>
{/if}
