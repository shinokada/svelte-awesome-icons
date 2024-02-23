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
  let { size = ctx.size || '24', role = ctx.role || 'img', color = ctx.color || 'currentColor', ariaLabel =  "table list solid," , class: classname, ...restProps } = $props<Props>();
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
  <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 0v64h64V96H64zm384 0H192v64H448V96zM64 224v64h64V224H64zm384 0H192v64H448V224zM64 352v64h64V352H64zm384 0H192v64H448V352z"/>
  </svg
>
