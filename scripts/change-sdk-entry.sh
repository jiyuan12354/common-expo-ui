#!/usr/bin/env bash

sed -i '' 's/".\/index.ts"/".\/app\/components-ui\/index.ts"/g' ./node_modules/common_ui_components/package.json
