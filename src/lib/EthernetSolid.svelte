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
  let { size = ctx.size || '24', role = ctx.role || 'img', color = ctx.color || 'currentColor', ariaLabel = 'ethernet solid,', class: classname, ...restProps } = $props<Props>();
</script>

<svg xmlns="http://www.w3.org/2000/svg" {...restProps} {role} width={size} height={size} fill={color} class={classname} aria-label={ariaLabel} viewBox="0 0 512 512">
  <path
    d="M0 224V416c0 17.7 14.3 32 32 32H96V336c0-8.8 7.2-16 16-16s16 7.2 16 16V448h64V336c0-8.8 7.2-16 16-16s16 7.2 16 16V448h64V336c0-8.8 7.2-16 16-16s16 7.2 16 16V448h64V336c0-8.8 7.2-16 16-16s16 7.2 16 16V448h64c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H448V160c0-17.7-14.3-32-32-32H384V96c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32v32H96c-17.7 0-32 14.3-32 32v32H32c-17.7 0-32 14.3-32 32z"
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
