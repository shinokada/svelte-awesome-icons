<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'sitrox';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...$$restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  class={$$props.class}
  aria-label={ariaLabel}
  viewBox="0 0 448 512"
  ><path
    d="M212.439 0.00846128V0H448V128H64C64 57.6008 141.755 0.475338 212.439 0.00846128ZM237.256 192V192.007C307.135 192.475 384 249.6 384 320H210.809V319.995C140.915 319.563 64 262.424 64 192H237.256ZM235.565 511.993C306.251 511.521 384 454.399 384 384H0V512H235.565V511.993Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-awesome-icons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'sitrox';
-->
