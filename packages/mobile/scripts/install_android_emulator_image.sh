#!/usr/bin/env bash
set -euo pipefail

sdkmanager "platform-tools" "platforms;android-28" "extras;intel;Hardware_Accelerated_Execution_Manager" "build-tools;30.0.0" "system-images;android-28;google_apis_playstore;x86" "emulator" --verbose
