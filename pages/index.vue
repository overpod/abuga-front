<script setup lang="ts">
import { useSearchTvSeriesQuery } from "~/api";

const { data } = useSearchTvSeriesQuery({
  variables: {
    input: {
      perPage: 45,
    },
  },
});

const items = computed(() => data.value?.searchTvSeries.items || []);

</script>

<template>
  <el-row :gutter="10">
    <el-col :xs="24" :sm="12" :md="10" :lg="8" :xl="6" v-for="item in items">
      <el-card shadow="hover">
        <el-image
          lazy
          :src="`https://api.abuga.ru/image/t/p/w500${item.posterPath}`"
        />
      </el-card>
    </el-col>
  </el-row>
</template>
