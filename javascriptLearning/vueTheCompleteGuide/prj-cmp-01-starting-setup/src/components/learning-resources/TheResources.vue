<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')"
            >Stored Resources</base-button
        >
        <base-button @click="setSelectedTab('add-resources')"
            >Add Resource</base-button
        >
    </base-card>
    <component :is="selectedTab"></component>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResources from './AddResources.vue';
export default {
    components: {
        StoredResources,
        AddResources,
    },
    data() {
        return {
            selectedTab: 'stored-resources',
        };
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
    },
};
</script>