<script>
  import MetaTag from '../utils/MetaTag.svelte';
  import IconPage from '../utils/IconPage.svelte';
  const title = 'Svelte Awesome Icons: Regular';
  const keywordsToInclude = 'Regular';

  // for metatag
  const subtitle = 'Accessible Font Awesome Regular Icons';
  const description = 'Accessible Font Awesome Regular SVG icons for Svelte';
  const path = 'regular';
</script>

<MetaTag {title} {subtitle} {path} {description} />
<IconPage {title} {keywordsToInclude} />
