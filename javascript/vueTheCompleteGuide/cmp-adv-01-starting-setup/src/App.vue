<template>
    <div>
        <the-header></the-header>
        <button @click="setSelectedComponent('active-goals')">
            Active Goals
        </button>
        <button @click="setSelectedComponent('manage-goals')">
            Manage Goals
        </button>
        <!-- <active-goals
            v-if="selectedComponent === 'active-goals'"
        ></active-goals>
        <manage-goals
            v-if="selectedComponent === 'manage-goals'"
        ></manage-goals> -->
        <keep-alive>
            <component :is="selectedComponent"></component>
        </keep-alive>
        <!-- <badge-list></badge-list>
        <user-info
            :full-name="activeUser.name"
            :info-text="activeUser.description"
            :role="activeUser.role"
        ></user-info>
        <course-goals></course-goals> -->
    </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
// import CourseGoals from "./components/CourseGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
    components: {
        "the-header": TheHeader,
        // BadgeList,
        // UserInfo,
        // CourseGoals,
        ActiveGoals,
        ManageGoals,
    },
    data() {
        return {
            selectedComponent: "active-goals",
            activeUser: {
                name: "Maximilian Schwarzmüller",
                description: "Site owner and admin",
                role: "admin",
            },
        };
    },
    methods: {
        setSelectedComponent(cmp) {
            this.selectedComponent = cmp;
        },
    },
};
</script>

<style scoped>
html {
    font-family: sans-serif;
}

body {
    margin: 0;
}
</style>