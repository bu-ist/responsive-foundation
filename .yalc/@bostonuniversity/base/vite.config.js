import { defineConfig } from 'vite';

export default defineConfig(async () => {
   const config = {
      build: {
         manifest: false,
         outDir: 'dist',
         assetsDir: '.',
         rollupOptions: {
            input: ['build/index.js'],
            output: {
               // remove hash from names.
               entryFileNames: `[name].js`,
               chunkFileNames: `[name].js`,
               assetFileNames: `[name].[ext]`,
            },
         },
      }
   }

   return config
})