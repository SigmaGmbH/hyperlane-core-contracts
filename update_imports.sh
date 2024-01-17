#!/bin/bash

find types -type f -exec sed -i '' 's|from "ethers";|from "swisstronik-ethers/packages/ethers";|g' {} +
find types -type f -exec sed -i '' 's|from "@ethersproject/providers";|from "swisstronik-ethers/packages/providers";|g' {} +
find types -type f -exec sed -i '' 's|from "@ethersproject/abi";|from "swisstronik-ethers/packages/abi";|g' {} +