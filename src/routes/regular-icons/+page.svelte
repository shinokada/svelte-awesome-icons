<script lang="ts">
  import type { Component } from 'svelte';
  import { IconPage, filterIconsByKeyword, removeHyphensAndCapitalize } from 'runes-webkit';
  import * as icons from '$lib';
  const keywordsToInclude = 'Regular';
  const keyIcons = filterIconsByKeyword(icons, keywordsToInclude);
</script>

<IconPage
  icons={keyIcons as Component}
  title="Regular Icons - Svelte Awesome Icons"
  tab1Class="md:grid-cols-2 lg:grid-cols-3"
/>
