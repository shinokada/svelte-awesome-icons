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
  let { size = ctx.size || '24', role = ctx.role || 'img', color = ctx.color || 'currentColor', ariaLabel = 'hotjar brands,', class: classname, ...restProps } = $props<Props>();
</script>

<svg xmlns="http://www.w3.org/2000/svg" {...restProps} {role} width={size} height={size} fill={color} class={classname} aria-label={ariaLabel} viewBox="0 0 512 512">
  <path
    d="M361.5 0c0 131.6-80.7 176.8-140.2 209.4c-.6 .3-1.1 .6-1.6 .9c-53.8 30.2-88.7 49.8-89.6 122H32C32 200.8 112.7 155.6 172.2 123C227 93.2 262.5 73 262.5 0h98.9zM301 302.6c54.8-29.8 90.3-50 90.3-123h98c0 131.6-80.7 176.7-140.2 209.4c-54.8 29.8-90.3 50-90.3 123h-98c0-131.6 80.7-176.8 140.2-209.4z"
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
