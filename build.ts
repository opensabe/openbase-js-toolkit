await Bun.build({
  entrypoints: ['./src/format.ts'],
  outdir: './dist',
  format: 'esm',
})
