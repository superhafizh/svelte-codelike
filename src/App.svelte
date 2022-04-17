<script>
import ActionBar from "./lib/layout/ActionBar.svelte"
import Home from "./lib/sidebar/Home.svelte"
import Commerce from "./lib/sidebar/Commerce.svelte"
import Procurement from "./lib/sidebar/Procurement.svelte"
import Operational from "./lib/sidebar/Operational.svelte"
import Finance from "./lib/sidebar/Finance.svelte"

let actions = [
  [
    {
      key: 'home',
      title: 'Dashboard',
      icon: 'home',
      sidebar: Home
    }, {
      key: 'commerce',
      title: 'Commercial',
      icon: 'support_agent',
      sidebar: Commerce
    }, {
      key: 'procurement',
      title: 'Procurement',
      icon: 'receipt',
      sidebar: Procurement
    }, {
      key: 'operational',
      title: 'Operational',
      icon: 'local_shipping',
      sidebar: Operational
    }, {
      key: 'finance',
      title: 'Financial',
      icon: 'account_balance',
      sidebar: Finance
    },
  ], [
    {
      key: 'account',
      icon: 'account_circle',
      title: 'Akun'
    }, {
      key: 'setting',
      icon: 'settings',
      title: 'Setting'
    },
  ]
]
</script>

<ActionBar actions={actions}></ActionBar>