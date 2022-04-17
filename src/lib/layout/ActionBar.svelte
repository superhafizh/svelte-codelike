<script>
import { onMount } from 'svelte'
import { appStore } from '../states/app.js'

export let actions = []

let component

function toggleSidebar(key) {
    if (key === $appStore.currentAction) {
        $appStore.isSidebarOpened = !$appStore.isSidebarOpened
    } else {
        $appStore.isSidebarOpened = true
        $appStore.currentAction = key
    }
}

function updateAction(action) {
    if (action.sidebar) {
        toggleSidebar(action.key)
        component = action.sidebar
    }
}

onMount(() => {
    if ($appStore.currentAction === '' && actions.length > 0 && actions[0].length > 0) {
        updateAction(actions[0][0])
    }
})
</script>

<aside class:sidebar={$appStore.isSidebarOpened}>
    <nav>
        {#each actions as actionList}
        <ul>
            {#each actionList as action}
                <li class="tooltip-container" on:click={() => updateAction(action)}>
                    <span class="material-icons">{action.icon}</span>
                    <div class="tooltip right center">{action.title}</div>
                </li>
            {/each}
        </ul>    
        {/each}
    </nav>
    <svelte:component this={component} />
</aside>

<style>
aside {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
}
aside nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: var(--action-bar-width);
    height: 100vh;
    background-color: var(--action-bar-bg);
}
aside nav ul li {
    width: var(--action-bar-width);
    height: var(--action-bar-width);
    text-align: center;
    cursor: pointer;
    position: relative;
}
aside nav ul li:hover {
    background-color: rgba(0, 0, 0, 0.1);
}
.material-icons {
    margin: 8px auto;
    font-size: 32px;
    color: var(--foreground);
}
.tooltip {
    margin-left: 0.5rem;
}
</style>