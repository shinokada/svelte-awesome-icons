<script lang="ts">
  import type { ComponentType } from 'svelte';
  interface Props{
    icon: ComponentType;
    size?: number;
    color?: string;
    role?: string;
    ariaLabel?: string;
    class?: string;
  }
  let {icon, size = 24, color, role = 'img', ariaLabel = 'Icon', class: classname, ...restProps} = $props<Props>()
</script>

<svelte:component 
  {...restProps} 
  {role}
  this={icon} 
  {size} 
  {color} 
  class={classname} 
  aria-label={ariaLabel}
/>