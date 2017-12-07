#!/bin/bash

set -ex 

export TARGET_CLUSTER=$(aws ecs list-clusters --profile rcem | jq -r '.[] | .[]' | grep Boot)
aws ecs list-tasks --cluster $(echo $TARGET_CLUSTER)  --profile rcem | jq -r '.[] | .[]' > task_list
aws ecs stop-task --task `head -$((${RANDOM} % $(wc -l < ./task_list) + 1)) ./task_list | tail -1` --cluster `echo $TARGET_CLUSTER` --profile rcem
rm task_list

