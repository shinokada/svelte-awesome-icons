<script lang="ts">
  import { Icon as AwesomeIcon } from 'svelte-awersome-icons';
  import { type Component } from 'svelte';
  const config: { size: string, color: string, ariaLabel: string, class: string } = {
    size: "40",
    color: '#88FF33',
    ariaLabel: "my custom icon",
    class: "mx-2"
  };
  interface Props {
    Icon: Component
  }

  let { Icon }: Props = $props();
</script>
<AwesomeIcon {...config} {Icon} />
