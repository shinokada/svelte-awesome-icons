import type { Component } from 'svelte';
import  { type ListType, sidebarList } from 'runes-webkit';
import { ChessKnightRegular, ChessQueenRegular, GemRegular } from '$lib';

const extra: ListType[] = [
  {
    name: 'Brand Icons',
    Icon: GemRegular as Component,
    href: '/brand-icons'
  },
  {
    name: 'Regular Icons',
    Icon: ChessKnightRegular as Component,
    href: '/regular-icons'
  },
  {
    name: 'Solid Icons',
    Icon: ChessQueenRegular as Component,
    href: '/solid-icons'
  }
];
export const newSidebarList: ListType[] = [...sidebarList, ...extra];