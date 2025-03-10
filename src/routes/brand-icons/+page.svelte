<script lang="ts">
  import { IconPage, filterIconsByKeyword } from 'runes-webkit';
  import * as icons from '$lib';
  const keywordsToInclude = 'Brands';
  const keyIcons = filterIconsByKeyword(icons, keywordsToInclude);
</script>

<IconPage
  icons={keyIcons}
  title="Brand Icons - Svelte Awesome Icons"
  tab1Class="md:grid-cols-2 lg:grid-cols-3"
  contentClass="rounded-lg dark_bg_theme mt-4"
/>
