#!/bin/bash
cd /home/kavia/workspace/code-generation/travel-planner-hub-7898-7918/travel_planner_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

