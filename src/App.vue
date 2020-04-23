<template>
    <v-app>
        <nav-menu/>
        <v-content app>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>

    import NavMenu from "./components/NavMenu";

    export default {
        components: {NavMenu},
        computed: {
            currentUser() {
                return this.$store.state.auth.user;
            },
            hide() {
                return this.$route.path === '/login' || this.$route.path === '/register';
            }
        }
    }
</script>

<style>

    #app {
        margin: 0;
        padding: 0;
        background-color: #f6f7ff;
        font-family: 'Helvetica', 'RobotoDraft', 'Roboto', sans-serif;
        font-size: 14px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }


</style>
