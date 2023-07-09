<script lang="ts">
    import type Text from "$lib/types/Text.js";

    export let data: Text;

    let style = "";
    if (data.isBold) {
        style += "font-weight: bold;";
    }
    if (data.isItalic) {
        style += "font-style: italic;";
    }
    if (data.isUnderlined) {
        style += "border-bottom:1px solid black;";
    }
    if (data.isStrikethrough) {
        style += "text-decoration: line-through;";
    }
</script>

<span id={data.id} style={style}>{data.content}</span>