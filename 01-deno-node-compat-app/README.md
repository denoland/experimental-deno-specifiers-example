1. package.json specifies dependencies, which can be imported from npm or deno.land/x
1. "type": "module" is necessary
1. Lockfile used is deno.lock
1. `deno task` reads from deno.json first, then falls back to package.json.