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
  let { size = ctx.size || '24', role = ctx.role || 'img', color = ctx.color || 'currentColor', ariaLabel = 'truck pickup solid,', class: classname, ...restProps } = $props<Props>();
</script>

<svg xmlns="http://www.w3.org/2000/svg" {...restProps} {role} width={size} height={size} fill={color} class={classname} aria-label={ariaLabel} viewBox="0 0 640 512">
  <path
    d="M368.6 96l76.8 96H288V96h80.6zM224 80V192H64c-17.7 0-32 14.3-32 32v64c-17.7 0-32 14.3-32 32s14.3 32 32 32H65.1c-.7 5.2-1.1 10.6-1.1 16c0 61.9 50.1 112 112 112s112-50.1 112-112c0-5.4-.4-10.8-1.1-16h66.3c-.7 5.2-1.1 10.6-1.1 16c0 61.9 50.1 112 112 112s112-50.1 112-112c0-5.4-.4-10.8-1.1-16H608c17.7 0 32-14.3 32-32s-14.3-32-32-32V224c0-17.7-14.3-32-32-32H527.4L418.6 56c-12.1-15.2-30.5-24-50-24H272c-26.5 0-48 21.5-48 48zm0 288a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm288 0a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z"
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
