<script lang="ts">
  import type { Component } from 'svelte';
  import { IconPage, filterIconsByKeyword, removeHyphensAndCapitalize } from 'runes-webkit'
  import * as icons from '$lib'
  const keywordsToInclude = 'Solid';
  const keyIcons = filterIconsByKeyword(icons, keywordsToInclude);
</script>

<IconPage icons={keyIcons as Component} title="Solid Icons - Svelte Awesome Icons" i_p_tabitem_div_1='lg:grid-cols-3'/>