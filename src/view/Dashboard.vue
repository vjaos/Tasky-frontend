<template>
    <div class="dashboard">
        <v-container fluid>
            <v-layout row wrap>
                <v-flex xs6>

                </v-flex>
                <v-flex xs6>
                    <project-card
                        :project="blocks[this.chosen]"
                    >

                    </project-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>

    import ProjectCard from "../components/ProjectCard";
    export default {
        name: "Dashboard",
        components: {ProjectCard},
        data() {
            return {
                chosen: 0,
                blocks: [
                    {
                        id: 2,
                        name: 'Cyber Punk',
                        status: 'new',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum feugiat felis nec aliquet. In sit.',
                        issues: [
                            {
                                name: 'Main Page Design',
                                isDone: true
                            },
                            {
                                name: 'E-catalogue, Filter, Search',
                                isDone: true
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
                    },
                    //#2
                    {
                        id: 1,
                        status: 'done',
                        name: 'Jamile E-store',
                        description: 'Description',
                        issues: [
                            {
                                name: 'Main Page Design',
                                isDone: true
                            },
                            {
                                name: 'E-catalogue, Filter, Search',
                                isDone: true
                            },
                            {
                                name: 'Style Guide, Whitepaper',
                                isDone: true
                            },
                            {
                                name: 'Full Icon Set',
                                isDone: true
                            }
                        ]
                    },
                    {
                        id: 3,
                        name: 'Kanban board',
                        status: 'in-process',
                        description: 'Description',
                        issues: [
                            {
                                name: 'Main Page Design',
                                isDone: true
                            },
                            {
                                name: 'E-catalogue, Filter, Search',
                                isDone: true
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
                    },
                    {
                        id: 4,
                        name: 'Kanban board',
                        status: 'approved',
                        description: 'Description',
                        issues: [
                            {
                                name: 'Main Page Design',
                                isDone: true
                            },
                            {
                                name: 'E-catalogue, Filter, Search',
                                isDone: true
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
                    },
                ]
            }
        }
    }
</script>

<style scoped>


</style>