#!/bin/bash
echo "creating Streaming URLs for AppStream Stack..."
for i in `seq 1 20`
do
  echo "creating Streaming URL #$i"
  aws appstream create-streaming-url \
  --stack-name <YOUR_STACK_NAME> \
  --fleet-name <YOUR_FLEET_NAME> \
  --user-id student$i
  --validity 345600 #this is assuming we're creating the Streaming URL one day before class
done

echo "all done! :)"
