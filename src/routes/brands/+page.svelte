<script>
  import MetaTag from '../utils/MetaTag.svelte';
  import IconPage from '../utils/IconPage.svelte';
  const keywordsToInclude = 'Brand';

  const title = 'Svelte Awesome Icons: Brands';
  // for metatag
  const subtitle = 'Brands';
  const description = 'Accessible Font Awesome Brands SVG icons for Svelte';
  const path = 'brands';
</script>

<MetaTag {title} {subtitle} {path} {description} />

<IconPage {title} {keywordsToInclude} />
