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
  let { size = ctx.size || '24', role = ctx.role || 'img', color = ctx.color || 'currentColor', ariaLabel = 'florin sign solid', class: classname, ...restProps }: Props = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" {...restProps} {role} width={size} height={size} class={classname} fill={color} aria-label={ariaLabel} viewBox="0 0 384 512">
  <path
    d="M314.7 32c-38.8 0-73.7 23.3-88.6 59.1L170.7 224H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h80L98.9 396.3c-5 11.9-16.6 19.7-29.5 19.7H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H69.3c38.8 0 73.7-23.3 88.6-59.1L213.3 288H320c17.7 0 32-14.3 32-32s-14.3-32-32-32H240l45.1-108.3c5-11.9 16.6-19.7 29.5-19.7H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H314.7z"
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
