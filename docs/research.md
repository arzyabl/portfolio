---
layout: doc
---

<script setup>
  import {data as research} from './research/research.data';
  import { withBase } from 'vitepress';
</script>

# Research projects

<ul v-if="research.length != 0">
  <li v-for="r of research">
    <a :href="withBase(r.url)">{{ r.frontmatter.title }}</a>
  </li>
</ul>
<p v-else>
  Nothing here yet!
</p>
