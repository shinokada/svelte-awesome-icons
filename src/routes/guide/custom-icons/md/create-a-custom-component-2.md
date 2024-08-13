<script lang="ts">
  import { Icon as AwesomeIcon } from 'svelte-awesome-icons';
  import { type Component } from 'svelte';
  const config: { size: string, color: string, ariaLabel: string } = {
    size: "30",
    color: '#88FF33',
    ariaLabel: "my custom icon",
  };
  interface Props {
    Icon: Component
  }

  let { Icon }: Props = $props();
</script>
<AwesomeIcon {...config} {Icon} />
