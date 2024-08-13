<script lang="ts">
  import type { Component } from 'svelte';
  import type { Props } from './types';

  interface IconProps extends Props {
    Icon: Component;
  }

  let { Icon, size = '24', role = 'img', ariaLabel = 'Icon', ...restProps }: IconProps = $props();
</script>

<Icon {...restProps} {role} {size} aria-label={ariaLabel} />

<!--
@component
[Go to docs](https://svelte-awesome-icons.codewithshin.com/)
## Props
@prop Icon
@prop size = '24'
@prop role = 'img'
@prop ariaLabel = 'Icon'
@prop ...restProps
-->
