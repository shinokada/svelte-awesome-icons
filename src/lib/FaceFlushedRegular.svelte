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
  let { size = ctx.size || '24', role = ctx.role || 'img', color = ctx.color || 'currentColor', ariaLabel = 'face flushed regular,', class: classname, ...restProps } = $props<Props>();
</script>

<svg xmlns="http://www.w3.org/2000/svg" {...restProps} {role} width={size} height={size} fill={color} class={classname} aria-label={ariaLabel} viewBox="0 0 512 512">
  <path
    d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM160.4 248a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm216-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM192 336c-13.3 0-24 10.7-24 24s10.7 24 24 24H320c13.3 0 24-10.7 24-24s-10.7-24-24-24H192zM160 176a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 128a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm144-80a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm128 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0z"
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
