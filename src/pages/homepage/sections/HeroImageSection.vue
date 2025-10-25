<script setup>
import images from "@/assets/data/heroImages.js"
import {computed, ref} from "vue";

const currentIndex = ref(0);

const currentImage = computed(() => {
    return images[currentIndex.value];
});

const showImage = (index) => {
    currentIndex.value = index;
};

</script>


<template>
    <div>
        <div class="hero-wrapper relative h-screen w-full">
            <!-- Image background -->
            <div class="hero-image-wrapper h-full w-full">
                <img
                    class="hero-image w-full h-full object-cover object-center"
                    :src="currentImage.src"
                    :alt="`${currentImage.title} ${currentImage.description} by ${currentImage.author}`"
                />
            </div>

            <!-- Subtle dark overlay -->
            <div class="absolute inset-0 bg-black/50"></div>

            <!-- Text content -->
            <div
                class="absolute inset-0 flex flex-col justify-center items-start text-center px-4">
                <div
                    class="flex justify-start items-stretch p-6 rounded-sm shadow-xl">
                    <div class="flex flex-col gap-4">
                        <h1 class="font-bold text-6xl text-white">
                            Willkommen bei
                            <span class="text-yellow-400">Südwest!</span>
                        </h1>
                        <div
                            class="w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
                    </div>
                </div>
                <div class="absolute bottom-0 left-0 right-0 border-t-2 border-t-yellow-400 p-4">
                    <div class="flex gap-4 justify-between">
                        <div class="flex gap-4 text-white">
                            <p>{{ currentImage.title }}</p>
                            <p>{{ currentImage.description }}</p>
                        </div>
                        <div class="flex gap-4">
                            <button
                                v-for="(image,index) in images"
                                :key="image.id"
                                class="w-4 h-4 rounded-full cursor-pointer"
                                :class="currentImage.id === image.id ? 'bg-yellow-400' : 'bg-white'"
                                v-on:click="showImage(index)"
                            >
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


