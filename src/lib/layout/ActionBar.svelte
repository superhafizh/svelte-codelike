<script>
import Commerce from "../sidebar/Commerce.svelte";
import Finance from "../sidebar/Finance.svelte";

import Home from "../sidebar/Home.svelte"
import Operational from "../sidebar/Operational.svelte";
import Procurement from "../sidebar/Procurement.svelte";

let menuLists = [
    [
        {title: 'Dashboard', icon: 'home', action: () => showComponent('home', Home)},
        {title: 'Commercial', icon: 'support_agent', action: () => showComponent('commerce', Commerce)},
        {title: 'Procurement', icon: 'receipt', action: () => showComponent('procurement', Procurement)},
        {title: 'Operational', icon: 'local_shipping', action: () => showComponent('operational', Operational)},
        {title: 'Financial', icon: 'account_balance', action: () => showComponent('finance', Finance)},
    ], [
        {icon: 'account_circle', title: 'Akun'},
        {icon: 'settings', title: 'Setting'},
    ]
]

let selection = {
    key: 'home',
    component: Home
}

let isOpened = true

function toggleSidebar(key) {
    if (key === selection.key) {
        isOpened = !isOpened
    }

    selection.key = key
}

function showComponent(key, component) {
    toggleSidebar(key)
    selection.component = component
}
</script>

<aside class:sidebar={isOpened}>
    <nav>
        {#each menuLists as menuList}
        <ul>
            {#each menuList as menu}
                <li class="tooltip-container" on:click={() => menu.action()}>
                    <span class="material-icons">{menu.icon}</span>
                    <div class="tooltip right center">{menu.title}</div>
                </li>
            {/each}
        </ul>    
        {/each}
    </nav>
    <svelte:component this={selection.component} />
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