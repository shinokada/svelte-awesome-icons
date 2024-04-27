<script lang="ts">
  import type { ComponentType } from 'svelte';
  import { IconPage, filterIconsByKeyword, removeHyphensAndCapitalize } from 'runes-webkit'
  import * as icons from '$lib'
  const keywordsToInclude = 'Brands';
  const keyIcons = filterIconsByKeyword(icons, keywordsToInclude);
</script>

<IconPage icons={keyIcons as ComponentType} title="Brand Icons - {removeHyphensAndCapitalize(__NAME__)}" />