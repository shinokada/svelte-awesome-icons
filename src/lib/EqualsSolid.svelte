<script lang='ts'>
  import { getContext } from 'svelte';
  interface CtxType {
		size?: string;
		role?: string;
    color?: string;
	}
  const ctx: CtxType = getContext('iconCtx') ?? {};
  interface Props{
    size?: string;
    role?: string;
    color?: string;
    ariaLabel?: string;
    class?: string;
  }
  let { size = ctx.size || '24', role = ctx.role || 'img', color = ctx.color || 'currentColor', ariaLabel =  "equals solid," , class: classname, ...restProps } = $props<Props>();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  class={classname}
  aria-label={ariaLabel}
  viewBox="0 0 448 512"
  >
  <path d="M48 128c-17.7 0-32 14.3-32 32s14.3 32 32 32H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H48zm0 192c-17.7 0-32 14.3-32 32s14.3 32 32 32H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H48z"/>
  </svg
>
