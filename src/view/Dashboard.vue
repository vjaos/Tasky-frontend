<template>
    <v-container>
        <kanban :stages="stages"
                :blocks="blocks"
        >
        </kanban>
    </v-container>
</template>

<script>
    import Kanban from "../components/Kanban";

    export default {
        name: "Dashboard",
        components: {Kanban},
        data() {
            return {


                stages: ['new', 'in-process', 'done', 'approved'],
                blocks: [
                    {
                        id: 2,
                        name: 'Kanban board',
                        status: 'new',
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
    #create .v-speed-dial {
        position: absolute;
    }

    #create .v-btn--floating {
        position: relative;
    }

</style>