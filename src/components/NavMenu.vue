<template>
    <nav>
        <v-app-bar
                color="white"
                dense
                height="60px"
        >
            <v-app-bar-nav-icon>

            </v-app-bar-nav-icon>

            <v-text-field
                    class="search-field"
                    single-line
                    dense label="Search Something..."
                    prepend-inner-icon="mdi-magnify"
                    hide-details
                    rounded
            >
            </v-text-field>

            <v-divider inset vertical/>
            <v-btn icon>
                <v-icon>mdi-view-dashboard-outline</v-icon>
            </v-btn>
            <v-divider inset vertical/>
            <v-btn icon>
                <v-icon>
                    mdi-email-outline
                </v-icon>
            </v-btn>
            <v-divider inset vertical/>
            <v-btn icon>
                <v-icon>
                    mdi-bell-outline
                </v-icon>
            </v-btn>
        </v-app-bar>
    </nav>
</template>

<script>
    export default {
        name: "NavMenu"
    }
</script>

<style scoped>
    .search-field {
        display: block;
        margin: 0 auto;
        max-width: 20%;
        border-style: none;
    }

</style>