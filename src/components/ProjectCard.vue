<template>
    <v-card class="mx-auto">
        <v-col>
            <v-row class="mt-4 ml-5">
                <v-flex xs8>
                    <v-card-title class="font-weight-medium display-1">
                        {{project.name}}
                    </v-card-title>
                    <v-card-subtitle class="mt-2">
                        {{project.description}}
                    </v-card-subtitle>
                </v-flex>
                <v-flex xs4 class="actions">
                    Members
                </v-flex>
            </v-row>
            <v-flex class="today-tasks">
                <v-toolbar flat>
                    <v-toolbar-title class="ml-5">
                        <span class="font-weight-bold ">Today</span>
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn text class="display-2 grey--text text--lighten-1">
                        ...
                    </v-btn>
                </v-toolbar>
                <div v-for="issue in project.issues"
                        :key="issue.id"
                        class="ml-5"
                >
                    <v-row>
                        <v-flex xs10>
                            {{issue.name}}
                        </v-flex>
                        <v-flex xs2>
                            <v-chip>{{issue.isDone}}</v-chip>
                        </v-flex>
                    </v-row>
                </div>
            </v-flex>
        </v-col>
    </v-card>
</template>

<script>
    export default {
        name: "ProjectCard",
        props: {
            project: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                show: false,
            }
        },
        computed: {
            percent() {
                return Math.ceil(
                    (this.doneIssues() / this.project.issues.length) * 100
                )
            },
        },
        methods: {
            doneIssues() {
                return this.project.issues.filter(is => is.isDone).length;
            }
        }
    }
</script>

<style scoped>
    .project-card {
        position: inherit;
        background-color: white;
        height: 100%;
        max-height: 100%;
    }

</style>