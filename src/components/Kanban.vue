<template>
    <v-layout class="drag-list" row justify-space-between align-content-center>
        <div class="drag-options"></div>
        <kanban-column
                v-for="(stage, i) in stages" :key="i"
                :stage="stage"
                :projects="getBlocks(stage)"
                class="kanban-column"
        />
    </v-layout>
</template>

<script>
    import KanbanColumn from "./KanbanColumn";

    export default {
        name: "Kanban",
        components: {KanbanColumn,},
        props: {
            stages: {
                type: Array,
                required: true
            },
            blocks: {
                type: Array,
                required: true
            },
            config: {
                type: Object,
                default: () => ({}),
            },
            stateMachineConfig: {
                type: Object,
                default: null,
            }
        },
        data() {
            return {
                machine: null
            }
        },
        updated() {
            this.drake.containers = this.$refs.list;
        },
        computed: {
            localBlocks() {
                return this.blocks
            }
        },
        methods: {
            getBlocks(status) {
                return this.localBlocks.filter(block => block.status === status);
            }
        }
    }
</script>

<style scoped>

</style>