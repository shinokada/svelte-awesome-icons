<script lang="ts">
  import { getContext } from 'svelte';
  interface CtxType {
    size?: string;
    role?: string;
    color?: string;
  }
  const ctx: CtxType = getContext('iconCtx') ?? {};
  interface Props {
    size?: string;
    role?: string;
    color?: string;
    ariaLabel?: string;
    class?: string;
  }
  let { size = ctx.size || '24', role = ctx.role || 'img', color = ctx.color || 'currentColor', ariaLabel = 'square virus solid', class: classname, ...restProps }: Props = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" {...restProps} {role} width={size} height={size} class={classname} fill={color} aria-label={ariaLabel} viewBox="0 0 448 512">
  <path
    d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM223.8 93.7c13.3 0 24 10.7 24 24c0 29.3 35.4 43.9 56.1 23.2c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-20.7 20.7-6 56.1 23.2 56.1c13.3 0 24 10.7 24 24s-10.7 24-24 24c-29.3 0-43.9 35.4-23.2 56.1c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-20.7-20.7-56.1-6-56.1 23.2c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-29.3-35.4-43.9-56.1-23.2c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9c20.7-20.7 6-56.1-23.2-56.1c-13.3 0-24-10.7-24-24s10.7-24 24-24c29.3 0 43.9-35.4 23.2-56.1c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0c20.7 20.7 56.1 6 56.1-23.2c0-13.3 10.7-24 24-24zM192 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm88 32a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-awesome-icons.vercel.app)
## Props
@props: size?: string;
@props:role?: string;
@props:color?: string;
@props:ariaLabel?: string;
@props:class?: string;
-->
