# tsdown-issue-repro

## Reproduction

Run the build script.

```sh
pnpm build
```

## Occurring Error

```
 FATAL  Build failed with 1 error:                                                                                                                              tsdown 4:52:35 AM

[PARSE_ERROR] Error: Unexpected token
   ╭─[ dist/.tsdown-types-es/index.d.ts:3:5 ]
   │
 3 │ var "@faker-js/faker" = [1, ]
   │     ────────┬────────  
   │             ╰────────── 
───╯


    at normalizeErrors (node_modules/.pnpm/rolldown@1.0.0-beta.7_typescript@5.8.3/node_modules/rolldown/dist/shared/src-DcMgB17h.mjs:826:18)
    at handleOutputErrors (node_modules/.pnpm/rolldown@1.0.0-beta.7_typescript@5.8.3/node_modules/rolldown/dist/shared/src-DcMgB17h.mjs:1015:34)
    at transformToRollupOutput (node_modules/.pnpm/rolldown@1.0.0-beta.7_typescript@5.8.3/node_modules/rolldown/dist/shared/src-DcMgB17h.mjs:1009:2)
    at RolldownBuild.write (node_modules/.pnpm/rolldown@1.0.0-beta.7_typescript@5.8.3/node_modules/rolldown/dist/shared/src-DcMgB17h.mjs:2713:10)
    at async build (node_modules/.pnpm/rolldown@1.0.0-beta.7_typescript@5.8.3/node_modules/rolldown/dist/shared/src-DcMgB17h.mjs:2873:22)
    at async bundleDts (node_modules/.pnpm/tsdown@0.7.5_typescript@5.8.3/node_modules/tsdown/dist/external-DZHHBSOL.js:73:2)
    at async node_modules/.pnpm/tsdown@0.7.5_typescript@5.8.3/node_modules/tsdown/dist/index.js:426:41
    at async Promise.all (index 0)
    at async rebuild (node_modules/.pnpm/tsdown@0.7.5_typescript@5.8.3/node_modules/tsdown/dist/index.js:391:3)
    at async buildSingle (node_modules/.pnpm/tsdown@0.7.5_typescript@5.8.3/node_modules/tsdown/dist/index.js:385:2)
    at async Promise.all (index 0)
    at async build (node_modules/.pnpm/tsdown@0.7.5_typescript@5.8.3/node_modules/tsdown/dist/index.js:366:19)
    at async CAC.<anonymous> (node_modules/.pnpm/tsdown@0.7.5_typescript@5.8.3/node_modules/tsdown/dist/run.js:16:2)
    at async runCLI (node_modules/.pnpm/tsdown@0.7.5_typescript@5.8.3/node_modules/tsdown/dist/run.js:25:3)
```
