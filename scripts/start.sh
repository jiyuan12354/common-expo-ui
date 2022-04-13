#!/usr/bin/env bash

# yarn cache clean common_ui_components && rm -f common_ui_components.tgz && cd ../../ && npm pack && mv common_ui_components-*.tgz ./examples/common-expo-ui/common_ui_components.tgz
# cd examples/common-expo-ui && yarn remove common_ui_components && yarn add file:./common_ui_components.tgz
cp -rf ../../app ./node_modules/common_ui_components/
cp -rf ../../storybook ./node_modules/common_ui_components/
expo start
