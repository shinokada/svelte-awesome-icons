<script>
  import Label from 'flowbite-svelte/Label.svelte';
  import Range from 'flowbite-svelte/Range.svelte';
  import Tabs from 'flowbite-svelte/Tabs.svelte';
  import TabItem from 'flowbite-svelte/TabItem.svelte';
  import TableSearch from 'flowbite-svelte/TableSearch.svelte';

  import * as Icons from '$lib';

  const random_tailwind_color = () => {
    const colors = ['red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];
    const shades = ['300', '400', '500'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomShade = shades[Math.floor(Math.random() * shades.length)];
    return `text-${randomColor}-${randomShade} dark:text-${randomColor}-${randomShade} shrink-0`;
  };
  const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
  const contentClass = ' rounded-lg dark:dark:bg-stone-800 mt-4';
  let searchTerm = '';

  $: filteredEntries = Object.entries(Icons).filter(([name, component]) => {
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
          {#if name.includes('Regular')}
            <div class="flex gap-4 items-center text-lg">
              <svelte:component this={component} class="shrink-0" bind:size />
              {name}
            </div>
          {/if}
        {/each}
      </div>
    </TabItem>
    <TabItem>
      <span slot="title" class="text-lg">Random Hex Colors</span>
      <div
        class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 dark:text-white"
      >
        {#each filteredEntries as [name, component]}
          {#if name.includes('Regular')}
            <div class="flex gap-4 items-center text-lg">
              <svelte:component
                this={component}
                color={random_hex_color_code()}
                class="shrink-0"
                bind:size
              />
              {name}
            </div>
          {/if}
        {/each}
      </div>
    </TabItem>
    <TabItem>
      <span slot="title" class="text-lg">Random Tailwind CSS Colors</span>
      <div
        class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 dark:text-white"
      >
        {#each filteredEntries as [name, component]}
          {#if name.includes('Regular')}
            <div class="flex gap-4 items-center text-lg">
              <svelte:component this={component} class={random_tailwind_color()} bind:size />
              {name}
            </div>
          {/if}
        {/each}
      </div>
    </TabItem>
  </Tabs>
</TableSearch>
</div>