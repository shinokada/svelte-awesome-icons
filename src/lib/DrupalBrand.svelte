<script lang="ts">
  interface CtxType {
    size?: string;
    role?: string;
    color?: string;
    class?: string;
    withEvents?: boolean;
  }

  type TitleType = {
    id?: string;
    title?: string;
  };

  type DescType = {
    id?: string;
    desc?: string;
  };

  import { getContext } from 'svelte';
  const ctx: CtxType = getContext('iconCtx') ?? {};

  let className = ctx.class || '';
  export { className as class };
  export let size: string = ctx.size || '24';
  export let role: string = ctx.role || 'img';
  export let color: string = ctx.color || 'currentColor';
  export let withEvents = ctx.withEvents || false;
  export let ariaLabel: string = 'drupal brand';
  export let title: TitleType = {};
  export let desc: DescType = {};

  let ariaDescribedby = `${title.id || ''} ${desc.id || ''}`;
  let hasDescription = false;

  $: if (title.id || desc.id) {
    hasDescription = true;
  } else {
    hasDescription = false;
  }
</script>

{#if withEvents}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...$$restProps}
    {role}
    width={size}
    height={size}
    fill={color}
    class={className}
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    viewBox="0 0 448 512"
    on:click
    on:keydown
    on:keyup
    on:focus
    on:blur
    on:mouseenter
    on:mouseleave
    on:mouseover
    on:mouseout
  >
    {#if title.id && title.title}
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    <path
      d="M303.973,108.136C268.2,72.459,234.187,38.35,224.047,0c-9.957,38.35-44.25,72.459-80.019,108.136C90.467,161.7,29.716,222.356,29.716,313.436c-2.337,107.3,82.752,196.18,190.053,198.517S415.948,429.2,418.285,321.9q.091-4.231,0-8.464C418.285,222.356,357.534,161.7,303.973,108.136Zm-174.326,223a130.282,130.282,0,0,0-15.211,24.153,4.978,4.978,0,0,1-3.319,2.766h-1.659c-4.333,0-9.219-8.481-9.219-8.481h0c-1.29-2.028-2.489-4.149-3.687-6.361l-.83-1.752c-11.247-25.72-1.475-62.318-1.475-62.318h0a160.585,160.585,0,0,1,23.231-49.873A290.8,290.8,0,0,1,138.5,201.613l9.219,9.219,43.512,44.434a4.979,4.979,0,0,1,0,6.638L145.78,312.33h0Zm96.612,127.311a67.2,67.2,0,0,1-49.781-111.915c14.2-16.871,31.528-33.464,50.334-55.313,22.309,23.785,36.875,40.1,51.164,57.986a28.413,28.413,0,0,1,2.95,4.425,65.905,65.905,0,0,1,11.984,37.981,66.651,66.651,0,0,1-66.466,66.836ZM352.371,351.6h0a7.743,7.743,0,0,1-6.176,5.347H344.9a11.249,11.249,0,0,1-6.269-5.07h0a348.21,348.21,0,0,0-39.456-48.952L281.387,284.49,222.3,223.185a497.888,497.888,0,0,1-35.4-36.322,12.033,12.033,0,0,0-.922-1.382,35.4,35.4,0,0,1-4.7-9.219V174.51a31.346,31.346,0,0,1,9.218-27.656c11.432-11.431,22.955-22.954,33.833-34.939,11.984,13.275,24.8,26,37.428,38.627h0a530.991,530.991,0,0,1,69.6,79.1,147.494,147.494,0,0,1,27.011,83.8A134.109,134.109,0,0,1,352.371,351.6Z"
    />
  </svg>
{:else}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...$$restProps}
    {role}
    width={size}
    height={size}
    fill={color}
    class={className}
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    viewBox="0 0 448 512"
  >
    {#if title.id && title.title}
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    <path
      d="M303.973,108.136C268.2,72.459,234.187,38.35,224.047,0c-9.957,38.35-44.25,72.459-80.019,108.136C90.467,161.7,29.716,222.356,29.716,313.436c-2.337,107.3,82.752,196.18,190.053,198.517S415.948,429.2,418.285,321.9q.091-4.231,0-8.464C418.285,222.356,357.534,161.7,303.973,108.136Zm-174.326,223a130.282,130.282,0,0,0-15.211,24.153,4.978,4.978,0,0,1-3.319,2.766h-1.659c-4.333,0-9.219-8.481-9.219-8.481h0c-1.29-2.028-2.489-4.149-3.687-6.361l-.83-1.752c-11.247-25.72-1.475-62.318-1.475-62.318h0a160.585,160.585,0,0,1,23.231-49.873A290.8,290.8,0,0,1,138.5,201.613l9.219,9.219,43.512,44.434a4.979,4.979,0,0,1,0,6.638L145.78,312.33h0Zm96.612,127.311a67.2,67.2,0,0,1-49.781-111.915c14.2-16.871,31.528-33.464,50.334-55.313,22.309,23.785,36.875,40.1,51.164,57.986a28.413,28.413,0,0,1,2.95,4.425,65.905,65.905,0,0,1,11.984,37.981,66.651,66.651,0,0,1-66.466,66.836ZM352.371,351.6h0a7.743,7.743,0,0,1-6.176,5.347H344.9a11.249,11.249,0,0,1-6.269-5.07h0a348.21,348.21,0,0,0-39.456-48.952L281.387,284.49,222.3,223.185a497.888,497.888,0,0,1-35.4-36.322,12.033,12.033,0,0,0-.922-1.382,35.4,35.4,0,0,1-4.7-9.219V174.51a31.346,31.346,0,0,1,9.218-27.656c11.432-11.431,22.955-22.954,33.833-34.939,11.984,13.275,24.8,26,37.428,38.627h0a530.991,530.991,0,0,1,69.6,79.1,147.494,147.494,0,0,1,27.011,83.8A134.109,134.109,0,0,1,352.371,351.6Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-awesome-icons.codewithshin.com)
## Props
@prop export let size: string = ctx.size || '24';
@prop export let role: string = ctx.role || 'img';
@prop export let color: string = ctx.color || 'currentColor';
@prop export let withEvents = ctx.withEvents || false;
@prop export let ariaLabel: string = 'drupal brand';
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
-->
