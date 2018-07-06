#!/bin/bash
for i in `seq 1 20`
do
    echo "creating User $i"
    aws workmail create-user \
      --organization-id <YOUR_ORGANIZATION_ID> \
    --name student$i \
    --display-name Student$i \
    --password <PASSWORD_FOR_STUDENTS_ACCOUNTS> \

done

echo "done :) "
