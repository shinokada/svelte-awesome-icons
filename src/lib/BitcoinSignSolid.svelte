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
  let { size = ctx.size || '24', role = ctx.role || 'img', color = ctx.color || 'currentColor', ariaLabel = 'bitcoin sign solid,', class: classname, ...restProps } = $props<Props>();
</script>

<svg xmlns="http://www.w3.org/2000/svg" {...restProps} {role} width={size} height={size} fill={color} class={classname} aria-label={ariaLabel} viewBox="0 0 320 512">
  <path
    d="M48 32C48 14.3 62.3 0 80 0s32 14.3 32 32V64h32V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64c0 1.5-.1 3.1-.3 4.5C254.1 82.2 288 125.1 288 176c0 24.2-7.7 46.6-20.7 64.9c31.7 19.8 52.7 55 52.7 95.1c0 61.9-50.1 112-112 112v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V448H112v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V448H41.7C18.7 448 0 429.3 0 406.3V288 265.7 224 101.6C0 80.8 16.8 64 37.6 64H48V32zM64 224H176c26.5 0 48-21.5 48-48s-21.5-48-48-48H64v96zm112 64H64v96H208c26.5 0 48-21.5 48-48s-21.5-48-48-48H176z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-awesome-icons.vercel.app)
## Props
@props: size?:  string; = ctx.size || '24', role;
@props:role?: string;
@props:color?: string;
@props:ariaLabel?: string;
@props:class?: string;
-->
