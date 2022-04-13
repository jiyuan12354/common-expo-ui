#!/usr/bin/env bash

yarn cache clean && npm cache clean --force && rm -f common_ui_components.tgz && cd ../../ && npm pack && mv common_ui_components-*.tgz ./examples/common-expo-ui/common_ui_components.tgz
