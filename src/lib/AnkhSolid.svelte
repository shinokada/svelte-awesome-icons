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
  let { size = ctx.size || '24', role = ctx.role || 'img', color = ctx.color || 'currentColor', ariaLabel = 'ankh solid,', class: classname, ...restProps } = $props<Props>();
</script>

<svg xmlns="http://www.w3.org/2000/svg" {...restProps} {role} width={size} height={size} fill={color} class={classname} aria-label={ariaLabel} viewBox="0 0 320 512">
  <path
    d="M96 128c0-35.3 28.7-64 64-64s64 28.7 64 64c0 41.6-20.7 76.6-46.6 104.1c-5.9 6.2-11.8 11.8-17.4 16.7c-5.6-4.9-11.5-10.5-17.4-16.7C116.7 204.6 96 169.6 96 128zM160 0C89.3 0 32 57.3 32 128c0 52.4 21.5 95.5 46.8 128H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96V480c0 17.7 14.3 32 32 32s32-14.3 32-32V320h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H241.2c25.4-32.5 46.8-75.6 46.8-128C288 57.3 230.7 0 160 0z"
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
