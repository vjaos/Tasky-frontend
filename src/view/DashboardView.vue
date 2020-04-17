<template>
    <v-container fluid>
        <dashboard-app-bar></dashboard-app-bar>
    </v-container>
</template>

<script>
    import DashboardAppBar from "../components/DashboardAppBar";
    export default {
        name: "DashboardView",
        components: {DashboardAppBar},
    }
</script>

<style scoped>


</style>