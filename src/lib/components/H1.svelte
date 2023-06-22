<script lang="ts">
    import type Heading from "$lib/types/Heading.js";

    export let data: Heading;
</script>

<h1 id={data.id}>{data.content}</h1>