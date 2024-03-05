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
  let { size = ctx.size || '24', role = ctx.role || 'img', color = ctx.color || 'currentColor', ariaLabel = 'vector square solid,', class: classname, ...restProps } = $props<Props>();
</script>

<svg xmlns="http://www.w3.org/2000/svg" {...restProps} {role} width={size} height={size} fill={color} class={classname} aria-label={ariaLabel} viewBox="0 0 448 512">
  <path
    d="M368 80h32v32H368V80zM352 32c-17.7 0-32 14.3-32 32H128c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v64c0 17.7 14.3 32 32 32V352c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32H320c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32V160c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H352zM96 160c17.7 0 32-14.3 32-32H320c0 17.7 14.3 32 32 32V352c-17.7 0-32 14.3-32 32H128c0-17.7-14.3-32-32-32V160zM48 400H80v32H48V400zm320 32V400h32v32H368zM48 112V80H80v32H48z"
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
