<script>
  import Label from 'flowbite-svelte/Label.svelte';
  import Range from 'flowbite-svelte/Range.svelte';
  import Tabs from 'flowbite-svelte/Tabs.svelte';
  import TabItem from 'flowbite-svelte/TabItem.svelte';
  import TableSearch from 'flowbite-svelte/TableSearch.svelte';
  import {
    filterIconsByKeyword,
    random_tailwind_color,
    random_hex_color_code
  } from '../utils/utils.js';
  import * as Icons from '$lib';
  const keywordsToInclude = 'Regular';
  const keyIcons = filterIconsByKeyword(Icons, keywordsToInclude);

  const contentClass = ' rounded-lg dark:dark:bg-stone-800 mt-4';
  let searchTerm = '';

  $: filteredEntries = Object.entries(keyIcons).filter(([name, component]) => {
    return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  });
  let size = '24';
</script>
<div class="m-8 w-full">
<h1 class="px-4 mx-auto">Svelte Awesome Icons: Regular</h1>
<TableSearch
  placeholder="Search by icon name"
  hoverable={true}
  bind:inputValue={searchTerm}
  divClass="relative overflow-x-auto"
>
  <div class="w-full sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 p-4">
    <Label class="text-lg py-4 ">Icon size: {size}</Label>
    <Range id="range1" min="16" max="50" bind:value={size} />
  </div>
  <Tabs style="pill" {contentClass} class="p-4">
    <TabItem open>
      <span slot="title" class="text-lg">Mono</span>
      <div
        class="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 dark:text-white"
      >
        {#each filteredEntries as [name, component]}
          <div class="flex gap-4 items-center text-lg">
            <svelte:component this={component} class="shrink-0" bind:size />
            {name}
          </div>
        {/each}
      </div>
    </TabItem>
    <TabItem>
      <span slot="title" class="text-lg">Random Hex Colors</span>
      <div
        class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 dark:text-white"
      >
        {#each filteredEntries as [name, component]}
          <div class="flex gap-4 items-center text-lg">
            <svelte:component
              this={component}
              color={random_hex_color_code()}
              class="shrink-0"
              bind:size
            />
            {name}
          </div>
        {/each}
      </div>
    </TabItem>
    <TabItem>
      <span slot="title" class="text-lg">Random Tailwind CSS Colors</span>
      <div
        class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 dark:text-white"
      >
        {#each filteredEntries as [name, component]}
          <div class="flex gap-4 items-center text-lg">
            <svelte:component this={component} class={random_tailwind_color()} bind:size />
            {name}
          </div>
        {/each}
      </div>
    </TabItem>
  </Tabs>
</TableSearch>
</div>
