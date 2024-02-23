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
  let { size = ctx.size || '24', role = ctx.role || 'img', color = ctx.color || 'currentColor', ariaLabel =  "hard drive solid," , class: classname, ...restProps } = $props<Props>();
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
  viewBox="0 0 512 512"
  >
  <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V280.4c-17-15.2-39.4-24.4-64-24.4H64c-24.6 0-47 9.2-64 24.4V96zM64 288H448c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V352c0-35.3 28.7-64 64-64zM320 416a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm128-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/>
  </svg
>
