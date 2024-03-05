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
  let { size = ctx.size || '24', role = ctx.role || 'img', color = ctx.color || 'currentColor', ariaLabel = 'face dizzy regular,', class: classname, ...restProps } = $props<Props>();
</script>

<svg xmlns="http://www.w3.org/2000/svg" {...restProps} {role} width={size} height={size} fill={color} class={classname} aria-label={ariaLabel} viewBox="0 0 512 512">
  <path
    d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM103 135c9.4-9.4 24.6-9.4 33.9 0l23 23 23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-23 23 23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-23-23-23 23c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23-23-23c-9.4-9.4-9.4-24.6 0-33.9zm192 0c9.4-9.4 24.6-9.4 33.9 0l23 23 23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-23 23 23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-23-23-23 23c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23-23-23c-9.4-9.4-9.4-24.6 0-33.9z"
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
