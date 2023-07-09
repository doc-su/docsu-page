<script lang="ts">
    import H1 from "$lib/components/H1.svelte";
    import H2 from "$lib/components/H2.svelte";
    import H3 from "$lib/components/H3.svelte";
    import H4 from "$lib/components/H4.svelte";
    import H5 from "$lib/components/H5.svelte";
    import H6 from "$lib/components/H6.svelte";
    import Paragraph from "$lib/components/Paragraph.svelte";
    import DataType from "$lib/types/DataType.js";
    import type PageData from "$lib/types/PageData.js";

    export let data: PageData;
</script>
<title>{data.title}</title>
{#each data.data as dt} 
    {#if dt.type === DataType.h1}
        <H1 data={dt}></H1>
    {:else if dt.type === DataType.h2}
        <H2 data={dt}></H2>
    {:else if dt.type === DataType.h3}
        <H3 data={dt}></H3>
    {:else if dt.type === DataType.h4}
        <H4 data={dt}></H4>
    {:else if dt.type === DataType.h5}
        <H5 data={dt}></H5>
    {:else if dt.type === DataType.h6}
        <H6 data={dt}></H6>
    {:else if dt.type === DataType.p}
        <Paragraph data={dt}></Paragraph>
    {/if}
{/each}