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
  let { size = ctx.size || '24', role = ctx.role || 'img', color = ctx.color || 'currentColor', ariaLabel = 'letterboxd brands,', class: classname, ...restProps } = $props<Props>();
</script>

<svg xmlns="http://www.w3.org/2000/svg" {...restProps} {role} width={size} height={size} fill={color} class={classname} aria-label={ariaLabel} viewBox="0 0 640 512">
  <path
    d="M521.3 128C586.9 128 640 181.1 640 246.6s-53.1 118.6-118.7 118.6c-42.5 0-79.7-22.3-100.7-55.8c11.4-18.2 18-39.7 18-62.8s-6.6-44.6-18-62.8l0 0 .8-1.2c20.8-32.3 56.8-53.9 97.9-54.6l2 0zM320 128c42.5 0 79.7 22.3 100.7 55.8c-11.4 18.2-18 39.7-18 62.8s6.6 44.6 18 62.8l0 0-.8 1.2c-20.8 32.3-56.8 53.9-97.9 54.6l-2 0c-42.5 0-79.7-22.3-100.7-55.8c11.4-18.2 18-39.7 18-62.8s-6.6-44.6-18-62.8l0 0 .8-1.2c20.8-32.3 56.8-53.9 97.9-54.6l2 0zm-201.3 0c42.5 0 79.7 22.3 100.7 55.8c-11.4 18.2-18 39.7-18 62.8s6.6 44.6 18 62.8l0 0-.8 1.2c-20.8 32.3-56.8 53.9-97.9 54.6l-2 0C53.1 365.1 0 312.1 0 246.6S53.1 128 118.7 128z"
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
