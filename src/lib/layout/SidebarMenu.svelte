<script>
export let menuItems
</script>

<ul>
    {#each menuItems as menuItem}
        <li>{ menuItem.label }</li>
    {/each}
</ul>