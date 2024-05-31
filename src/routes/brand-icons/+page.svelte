<script lang="ts">
  import type { Component } from 'svelte';
  import { IconPage, filterIconsByKeyword, removeHyphensAndCapitalize } from 'runes-webkit'
  import * as icons from '$lib'
  const keywordsToInclude = 'Brands';
  const keyIcons = filterIconsByKeyword(icons, keywordsToInclude);
</script>

<IconPage icons={keyIcons as Component} title="Brand Icons - Svelte Awesome Icons" i_p_tabitem_div_1='lg:grid-cols-3'/>