<script lang="ts">
  import type { ComponentType } from 'svelte';
  const config = {
    size: "xl",
    color: '#FF5733'
  };
  import { Icon } from 'svelte-awesome-icons';
  export let icon: ComponentType;
</script>

<IconSolid {...config} {icon} />