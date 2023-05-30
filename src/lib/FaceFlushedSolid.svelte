<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'face flushed';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...$$restProps}
  width={size}
  height={size}
  fill={color}
  class={$$props.class}
  aria-label={ariaLabel}
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  viewBox="0 0 512 512"
  ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --><path
    d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM176 384c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16s-7.2-16-16-16H192c-8.8 0-16 7.2-16 16zm-16-88a72 72 0 1 0 0-144 72 72 0 1 0 0 144zm264-72a72 72 0 1 0 -144 0 72 72 0 1 0 144 0zm-288 0a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm192 0a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
  /></svg
>
<!--
@component
[Go to Document](https://svelte-ant-design-icons.codewithshin.com/)
## Props
@prop size = '24';
@prop color = 'currentColor';
@prop ariaLabel = 'icon name';
## Event
- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout
-->
