
import home from '/Users/wangguang/Codehub/pareto-project/app/home/index.tsx';


import { setRuntimeConfig } from "@paretojs/core/node";

const pages = { home };

const assets = __non_webpack_require__('../client/webpack-assets.json');

setRuntimeConfig({ pages, assets });
