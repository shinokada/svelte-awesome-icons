<script>
  import MetaTag from '../utils/MetaTag.svelte';
  import IconPage from '../utils/IconPage.svelte';
  const title = 'Svelte Awesome Icons: Solid';
  const keywordsToInclude = 'Solid';

  // for metatag
  const subtitle = 'Accessible Font Awesome Solid Icons';
  const description = 'Accessible Font Awesome Solid SVG icons for Svelte';
  const path = 'solid';
</script>

<MetaTag {title} {subtitle} {path} {description} />
<IconPage {title} {keywordsToInclude} />
