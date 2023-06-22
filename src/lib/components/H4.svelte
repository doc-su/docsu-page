<script lang="ts">
    import type Heading from "$lib/types/Heading.js";

    export let data: Heading;
</script>

<h4 id={data.id}>{data.content}</h4>