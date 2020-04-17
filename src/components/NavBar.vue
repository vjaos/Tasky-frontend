<template>
    <nav>
        <v-navigation-drawer
                app
                mini-variant-width="65px"
                mini-variant
                permanent
                floating
        >
            <v-layout
                    align-center
                    justify-space-between
                    column
                    fill-height
            >
                <span class="text-uppercase mt-4 font-weight-bold display-1 yellow--text text--darken-2">
                        T
                </span>
                <v-list dense flat>
                    <v-list-item
                            v-for="item in items"
                            :key="item.title"
                            :to="item.route"
                            class="mb-7"
                            link
                            active-class="deep-purple--text"
                    >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <v-btn
                        justify-end
                        flat
                        icon
                        exact
                        link
                        class="mb-4"
                        active-class="deep-purple--text"
                >
                    <v-icon>mdi-logout</v-icon>
                </v-btn>
            </v-layout>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    export default {
        name: "nav-bar",
        template: "<nav-bar/>",
        data() {
            return {
                items: [
                    {title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/'},
                    {title: 'Projects', icon: 'mdi-folder-outline', route: '/projects'},
                    {title: 'Calendar', icon: 'mdi-calendar-outline', route: '/events'},
                    {title: 'Board', icon: 'mdi-format-list-checks', route: '/board'},
                ]
            }
        }
    }
</script>

<style scoped>


</style>