<script>
  export let size = '24';
  export let color = 'currentColor';
  export let ariaLabel = 'not equal';
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
  viewBox="0 0 448 512"
  ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --><path
    d="M369.8 37.4c14.7 9.8 18.7 29.7 8.9 44.4L337.1 144H400c17.7 0 32 14.3 32 32s-14.3 32-32 32H294.5l-64 96H400c17.7 0 32 14.3 32 32s-14.3 32-32 32H187.8l-65.2 97.7c-9.8 14.7-29.7 18.7-44.4 8.9s-18.7-29.7-8.9-44.4L110.9 368H48c-17.7 0-32-14.3-32-32s14.3-32 32-32H153.5l64-96H48c-17.7 0-32-14.3-32-32s14.3-32 32-32H260.2l65.2-97.7c9.8-14.7 29.7-18.7 44.4-8.9z"
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
