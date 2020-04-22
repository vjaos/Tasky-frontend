<template>
    <v-card max-width="260px">
        <v-layout justify-center column>
            <v-card-title>
                {{ project.name}}
                <v-btn @click="show = !show">

                </v-btn>
            </v-card-title>
            <v-expand-transition>
                <div align="center" v-show="show">
                    <v-list>
                        <v-list-item
                                v-for="(issue, i) in project.issues"
                                :key="i"
                        >
                            <template>
                                <div class="caption-1">
                                    <v-chip v-if="!issue.isDone" outlined small color="blue"></v-chip>
                                    <v-icon color="blue" v-else>mdi-checkbox-marked-circle</v-icon>
                                    {{issue.name}}
                                </div>
                            </template>
                        </v-list-item>
                    </v-list>

                    <v-btn width="212px" justify-end class="mx-auto mb-5">
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
        data() {
            return {
                show: false,
                project: {
                    name: 'Jamile E-store',
                    description: 'Description',
                    issues: [
                        {
                            name: 'Main Page Design',
                            isDone: true
                        },
                        {
                            name: 'E-catalogue, Filter, Search',
                            isDone: false
                        },
                        {
                            name: 'Style Guide, Whitepaper',
                            isDone: true
                        },
                        {
                            name: 'Full Icon Set',
                            isDone: false
                        }
                    ]
                }
            }
        },
        computed: {
            percent() {
                return Math.ceil(
                    (this.project.issues.filter(is => is.isDone).length / this.project.issues.length) * 100
                )
            }
        }
    }
</script>

<style scoped>

</style>