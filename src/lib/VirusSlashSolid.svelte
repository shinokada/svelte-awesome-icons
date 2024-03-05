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
  let { size = ctx.size || '24', role = ctx.role || 'img', color = ctx.color || 'currentColor', ariaLabel = 'virus slash solid,', class: classname, ...restProps } = $props<Props>();
</script>

<svg xmlns="http://www.w3.org/2000/svg" {...restProps} {role} width={size} height={size} fill={color} class={classname} aria-label={ariaLabel} viewBox="0 0 640 512">
  <path
    d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-154.3-121c-2-30.1 20.8-60.1 56-60.1H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H532.5c-49.9 0-74.9-60.3-39.6-95.6l8.2-8.2c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-8.2 8.2C412.3 118.4 352 93.4 352 43.5V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V43.5c0 49.9-60.3 74.9-95.6 39.6L184.2 75c-12.5-12.5-32.8-12.5-45.3 0c-1.6 1.6-3.1 3.4-4.3 5.3L38.8 5.1zm225.8 177c6.9-3.9 14.9-6.1 23.4-6.1c26.5 0 48 21.5 48 48c0 4.4-.6 8.7-1.7 12.7l-69.7-54.6zM402 412.7L144.7 210c-9.5 8.5-22.2 14-37.2 14H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h11.5c49.9 0 74.9 60.3 39.6 95.6l-8.2 8.2c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l8.2-8.2c35.3-35.3 95.6-10.3 95.6 39.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V468.5c0-31.2 23.6-52.7 50-55.7z"
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
