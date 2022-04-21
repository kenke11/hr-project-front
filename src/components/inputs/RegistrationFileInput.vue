<template>
  <div class="w-full">
    <label for="cv" class="w-full text-lg font-md font-medium mt-2"> CV</label>
    <div class="mt-2">
      <div
        class="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed mt-4 rounded-md"
      >
        <div class="space-y-1 text-center">
          <p class="pl-1">drag and drop</p>
          <p>or</p>
          <div class="flex text-sm text-gray-600">
            <label
              class="rounded-lg bg-pink-600 text-white px-8 py-3 cursor-pointer"
            >
              <span class="uppercase">CHOOSE FILE TO UPLOAD</span>
              <input id="cv" name="cv" type="file" class="sr-only" />
            </label>
          </div>

          <p class="text-xs text-gray-500">PDF, WORD</p>
        </div>
      </div>
    </div>
  </div>
</template>
