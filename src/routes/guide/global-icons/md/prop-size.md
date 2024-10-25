<script>
  import { setContext } from 'svelte';
  import { HandRegular } from 'svelte-awesome-icons';
  const iconCtx = {
    size: 'xl'
  };
  setContext('iconCtx', iconCtx);
</script>

<HandRegular color="#ff4488" />