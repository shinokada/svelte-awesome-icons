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
  let { size = ctx.size || '24', role = ctx.role || 'img', color = ctx.color || 'currentColor', ariaLabel = 'arrow down solid,', class: classname, ...restProps } = $props<Props>();
</script>

<svg xmlns="http://www.w3.org/2000/svg" {...restProps} {role} width={size} height={size} fill={color} class={classname} aria-label={ariaLabel} viewBox="0 0 384 512">
  <path
    d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
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
