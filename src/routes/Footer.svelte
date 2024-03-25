<script lang="ts">
  import { Frame } from 'flowbite-svelte';

  import DiscordSolid from './utils/icons/DiscordSolid.svelte';
  import GithubSolid from './utils/icons/GithubSolid.svelte';
  import TwitterSolid from './utils/icons/TwitterSolid.svelte';
  import type { ComponentType } from 'svelte';

  // const links: LinkType[] = [
  //   { name: 'Released under the MIT License. ' },
  //   { name: 'Copyright © 2022-present Shinichi Okada' }
  // ];

  const brands: [ComponentType, string][] = [
    [DiscordSolid, 'https://discord.com/invite/4eeurUVvTy'],
    [TwitterSolid, 'https://twitter.com/shinokada'],
    [GithubSolid, 'https://github.com/shinokada/svelte-awesome-icons']
  ];
</script>

<Frame
  tag="footer"
  rounded
  shadow
  class="bg-white p-4 shadow dark:bg-stone-900 border-none dark:border-none md:flex md:items-center md:justify-between md:p-6 mt-24 border-t xl:p-8"
>
  <ul class="mb-6 flex flex-wrap items-center space-y-1 sm:gap-4 md:mb-0 xl:gap-6">
    <li>
      <span
        class="self-center text-2xl font-semibold whitespace-nowrap text-primary-900 dark:text-primary-500"
        >codewithshin.com</span
      >
    </li>
    <li>
      <span class="ml-32 text-sm font-normal text-gray-500 dark:text-gray-400 sm:mr-6">
        Released under the MIT License.
      </span>
    </li>
  </ul>
  <div class="flex space-x-6 sm:justify-center">
    {#each brands as [component, href]}
      <a {href} class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
        <svelte:component this={component} />
      </a>
    {/each}
  </div>
</Frame>
