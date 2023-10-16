<template>
  <AppHeader />
  <SearchResults />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import SearchResults from "./views/SearchResults.vue";

export default {
  name: 'App',
  components: {
    AppHeader,
    SearchResults
}
}
</script>
