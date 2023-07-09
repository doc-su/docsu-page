<script lang="ts">
    import Page from "$lib/components/Page.svelte";
	import DataType from "$lib/types/DataType.js";
	import type PageData from "$lib/types/PageData.js";
	import { TextAlignment } from "$lib/types/Paragraph.js";

    let pgData: PageData = {
        id: "page1",
        documentId: "doc1",
        title: "Page Demo",
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
            {
                type: DataType.p,
                id: "p1",
                content: [
                    {
                        type: DataType.text,
                        id: "p1t1",
                        isBold: true,
                        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    },
                    {
                        type: DataType.text,
                        id: "p1t2",
                        isItalic: true,
                        content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    },
                    {
                        type: DataType.text,
                        id: "p1t3",
                        isUnderlined: true,
                        content: " when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    },
                    {
                        type: DataType.text,
                        id: "p1t4",
                        isStrikethrough: true,
                        content: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    },
                    {
                        type: DataType.text,
                        id: "p1t5",
                        isUnderlined: true,
                        isStrikethrough: true,
                        content: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software",
                    },
                ],
            },
            {
                type: DataType.p,
                id: "p2",
                textAlignment: TextAlignment.Right,
                content: [
                    {
                        type: DataType.text,
                        id: "p1t7",
                        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    },
                ],
            },
            {
                type: DataType.p,
                id: "p3",
                textAlignment: TextAlignment.Center,
                content: [
                    {
                        type: DataType.text,
                        id: "p1t8",
                        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    },
                ],
            },
        ],
    };
</script>
<div>
    <Page data={pgData}></Page>
</div>
