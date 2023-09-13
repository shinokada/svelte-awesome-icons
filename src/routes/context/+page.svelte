<script>
  import { setContext } from 'svelte';
  import { AddressBookRegular } from '$lib';
  const iconCtx = {
    size: 100,
    color: '#ff4488'
  };
  setContext('iconCtx', iconCtx);
</script>

<AddressBookRegular />
