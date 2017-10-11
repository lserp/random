#!/bin/bash

for DOMAIN in exampleloadbalancer.com exampleloadbalancer.net exampleloadbalancer.info
do 
    echo "connecting to hosts in ${DOMAIN}:"
    for S in www.${DOMAIN} ${RANDOM}.${DOMAIN} ${DOMAIN} 
    do
        echo "connecting to ${S} on port 443:"
        echo "" | openssl s_client -servername ${S} -connect ${S}:443 2>&1 | grep -A 1 'subject'
    done
    echo ""
done

