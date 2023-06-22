<script lang="ts">
    import type Heading from "$lib/types/Heading.js";

    export let data: Heading;
</script>

<h6 id={data.id}>{data.content}</h6>