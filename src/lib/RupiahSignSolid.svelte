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
  let { size = ctx.size || '24', role = ctx.role || 'img', color = ctx.color || 'currentColor', ariaLabel = 'rupiah sign solid,', class: classname, ...restProps } = $props<Props>();
</script>

<svg xmlns="http://www.w3.org/2000/svg" {...restProps} {role} width={size} height={size} fill={color} class={classname} aria-label={ariaLabel} viewBox="0 0 512 512">
  <path
    d="M0 64C0 46.3 14.3 32 32 32h80c79.5 0 144 64.5 144 144c0 58.8-35.2 109.3-85.7 131.7l51.4 128.4c6.6 16.4-1.4 35-17.8 41.6s-35-1.4-41.6-17.8L106.3 320H64V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V288 64zM64 256h48c44.2 0 80-35.8 80-80s-35.8-80-80-80H64V256zm256-96h80c61.9 0 112 50.1 112 112s-50.1 112-112 112H352v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V352 192c0-17.7 14.3-32 32-32zm80 160c26.5 0 48-21.5 48-48s-21.5-48-48-48H352v96h48z"
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
