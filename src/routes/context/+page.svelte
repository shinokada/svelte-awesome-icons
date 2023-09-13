<script>
  import { setContext } from 'svelte';
  import { AddressBookRegular } from '$lib';
  import { Label, Range } from 'flowbite-svelte';
  const iconCtx = {
    size: 100,
    color: '#ff4488'
  };
  setContext('iconCtx', iconCtx);
  let size = '24';
</script>

<AddressBookRegular />
<div class="w-full sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 p-4">
  <Label class="text-lg py-4 ">Icon size: {size}</Label>
  <Range id="range1" min="16" max="50" bind:value={size} />
</div>

