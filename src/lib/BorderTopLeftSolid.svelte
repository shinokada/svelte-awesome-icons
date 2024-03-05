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
  let { size = ctx.size || '24', role = ctx.role || 'img', color = ctx.color || 'currentColor', ariaLabel = 'border top left solid,', class: classname, ...restProps } = $props<Props>();
</script>

<svg xmlns="http://www.w3.org/2000/svg" {...restProps} {role} width={size} height={size} fill={color} class={classname} aria-label={ariaLabel} viewBox="0 0 448 512">
  <path
    d="M0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-336c0-8.8 7.2-16 16-16l336 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32C35.8 32 0 67.8 0 112L0 448zm160 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm192 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm192 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM416 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0 32a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-128a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
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
