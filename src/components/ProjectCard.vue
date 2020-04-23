<template>
    <v-card flat max-width="260px" width="260px">
        <v-layout justify-space-around align-content-center column>

            <v-card-title>
                {{ project.name}}
                <v-spacer></v-spacer>
                <v-btn icon @click="show = !show">
                    <v-icon>{{show ? 'mdi-minus': 'mdi-plus' }}</v-icon>
                </v-btn>
            </v-card-title>
            <div v-show="!show">
                <v-progress-linear :color="percent === 100 ? 'success' : 'blue'" rounded
                                   v-model="percent"></v-progress-linear>
            </div>
            <v-expand-transition>
                <div v-show="show">
                    <v-list>
                        <v-list-item
                                v-for="(issue, i) in project.issues"
                                :key="i"
                        >
                            <template>
                                <div class="caption-1">
                                    <v-chip v-if="!issue.isDone" outlined small color="blue"></v-chip>
                                    <v-icon color="blue" v-else>mdi-checkbox-marked-circle</v-icon>
                                    <span class="ml-2">{{issue.name}}</span>
                                </div>
                            </template>
                        </v-list-item>
                    </v-list>
                    <v-btn width="214px" max-width="214px" elevation="0" class="mb-5 ml-5">
                        <span class="font-weight-medium caption">VIEW PROJECT</span>
                    </v-btn>
                </div>
            </v-expand-transition>
        </v-layout>

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


</style>