import { writable } from 'svelte/store'

export const appStore = writable({
    currentAction: '',
    isSidebarOpened: false,
})