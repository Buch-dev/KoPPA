<template>
  <div class="flex flex-col mt-5">
    <label :for="data.name" class="mb-[10px] font-sans">{{ data.label }}</label>
    <input
      :type="data.type"
      :name="data.name"
      :id="data.id"
      v-model="data.vmodel"
      v-validate="'required'"
      class="h-[50px] px-1 border border-gray-400 focus:outline-none focus:border-signUpCorperBtn transition-all duration-500 ease-in-out bg-jobCardBackgroundColor rounded-lg"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: ['data']
};
</script>

<style scoped></style>
