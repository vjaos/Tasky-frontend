<template>
    <v-container fluid>
        <v-app-bar class="mt-1" color="white" flat app>
            <v-layout align-center
                      justify-space-between
                      row
            >
                <span class="text-capitalize headline font-weight-bold">
                    Dashboard
                </span>
                    <v-text-field
                            filled
                            rounded
                            append-icon="mdi-magnify"
                            label="Search"
                            hide-details
                            single-line
                            dense
                    >

                    </v-text-field>
                </div>
                <v-btn
                        rounded
                        color="deep-purple"
                        dark
                        width="150"
                >
                    <span class="text-capitalize font-weight-medium body-2">Start project</span>
                </v-btn>
            </v-layout>

        </v-app-bar>
        <v-layout>
            <v-layout>
                Content

            </v-layout>
            <v-layout>
                Activity
            </v-layout>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "DashboardAppBar"
    }
</script>

<style scoped>
    .dashboard-activity {
        background-color: #fefefe;
    }
</style>