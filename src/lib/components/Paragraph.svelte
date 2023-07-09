<script lang="ts">
    import type Paragraph from "$lib/types/Paragraph.js";
    import Text from "$lib/components/Text.svelte";

    export let data: Paragraph;
    let style="";
    if(data.textAlignment) {
      style += `text-align: ${data.textAlignment};`;
    }
</script>

<p id={data.id} style={style}>
    {#each data.content as text}
    <Text data={text}></Text>
  {/each}
</p>