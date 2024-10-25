<script lang="ts">
  import { IconPage, filterIconsByKeyword } from 'runes-webkit';
  import * as icons from '$lib';
  const keywordsToInclude = 'Solid';
  const keyIcons = filterIconsByKeyword(icons, keywordsToInclude);
</script>

<IconPage
  icons={keyIcons}
  title="Solid Icons - Svelte Awesome Icons"
  tab1Class="md:grid-cols-2 lg:grid-cols-3"
/>
