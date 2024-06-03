<template>
    <div>
        xxx
        <div>
            <component :is="component"></component>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            component: null,
        };
    },
    mounted() {
        this.component = () => import(`../date/20240603/${this.$route.query.id}.vue`);
    },
};
</script>

<style scoped></style>
