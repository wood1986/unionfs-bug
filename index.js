const fs = require(`fs`);
const {ufs} = require(`unionfs`);
const {fs:memfs} = require(`memfs`);

const {patchFs} = require(`fs-monkey`);
  ufs
  .use(memfs)
  .use({...fs});
let unpatchFs = patchFs(ufs);

console.log("ufs.watch('a')", ufs.watch("a"))
console.log("fs.watch('a')", fs.watch("a"))

unpatchFs()
console.log("fs.watch('a')", fs.watch("a"))
