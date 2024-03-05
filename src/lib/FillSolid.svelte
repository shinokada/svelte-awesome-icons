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
  let { size = ctx.size || '24', role = ctx.role || 'img', color = ctx.color || 'currentColor', ariaLabel = 'fill solid,', class: classname, ...restProps } = $props<Props>();
</script>

<svg xmlns="http://www.w3.org/2000/svg" {...restProps} {role} width={size} height={size} fill={color} class={classname} aria-label={ariaLabel} viewBox="0 0 512 512">
  <path
    d="M86.6 9.4C74.1-3.1 53.9-3.1 41.4 9.4s-12.5 32.8 0 45.3L122.7 136 30.6 228.1c-37.5 37.5-37.5 98.3 0 135.8L148.1 481.4c37.5 37.5 98.3 37.5 135.8 0L474.3 290.9c28.1-28.1 28.1-73.7 0-101.8L322.9 37.7c-28.1-28.1-73.7-28.1-101.8 0L168 90.7 86.6 9.4zM168 181.3l49.4 49.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L213.3 136l53.1-53.1c3.1-3.1 8.2-3.1 11.3 0L429.1 234.3c3.1 3.1 3.1 8.2 0 11.3L386.7 288H67.5c1.4-5.4 4.2-10.4 8.4-14.6L168 181.3z"
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
