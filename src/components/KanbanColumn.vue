<template>
    <v-col class="drag-inner-list" ref="list">
        <span class="subtitle-2 grey--text text--darken-2 font-weight-regular text-uppercase">{{stage}}</span>
        <project-card
                class="mt-4"
                v-for="block in projects"
                :key="block.id"
                :project="block"
                :data-block-id="block.id"
        />
    </v-col>
</template>

<script>
    import ProjectCard from "./ProjectCard";

    export default {
        name: "KanbanColumn",
        components: {ProjectCard},
        props: {
            stage: {
                type: String,
                required: true
            },
            projects: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>