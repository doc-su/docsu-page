<script lang="ts">
    import Page from "$lib/components/Page.svelte";
	import DataType from "$lib/types/DataType.js";
	import type PageData from "$lib/types/PageData.js";

    let pgData: PageData = {
        id: "page1",
        documentId: "doc1",
        title: "Page",
        data: [
            {
                type: DataType.h1,
                id: "h1",
                content: "Hello, world!",
            },
            {
                type: DataType.h2,
                id: "h2",
                content: "Hello, world! H2",
            },
            {
                type: DataType.h3,
                id: "h3",
                content: "Hello, world! H3",
            },
            {
                type: DataType.h4,
                id: "h4",
                content: "Hello, world! H4",
            },
            {
                type: DataType.h5,
                id: "h5",
                content: "Hello, world! H5",
            },
            {
                type: DataType.h6,
                id: "h6",
                content: "Hello, world! H6",
            },
        ],
    };
</script>
<div>
    <Page data={pgData}></Page>
</div>
