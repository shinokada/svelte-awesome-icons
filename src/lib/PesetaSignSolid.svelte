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
  let { size = ctx.size || '24', role = ctx.role || 'img', color = ctx.color || 'currentColor', ariaLabel = 'peseta sign solid,', class: classname, ...restProps } = $props<Props>();
</script>

<svg xmlns="http://www.w3.org/2000/svg" {...restProps} {role} width={size} height={size} fill={color} class={classname} aria-label={ariaLabel} viewBox="0 0 384 512">
  <path
    d="M64 32C46.3 32 32 46.3 32 64v96c-17.7 0-32 14.3-32 32s14.3 32 32 32l0 96V448c0 17.7 14.3 32 32 32s32-14.3 32-32V352h96c77.4 0 142-55 156.8-128H352c17.7 0 32-14.3 32-32s-14.3-32-32-32h-3.2C334 87 269.4 32 192 32H64zM282.5 160H96V96h96c41.8 0 77.4 26.7 90.5 64zM96 224H282.5c-13.2 37.3-48.7 64-90.5 64H96V224z"
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
