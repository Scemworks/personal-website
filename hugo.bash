#!/usr/bin/env bash

# Set the local IP address to the variable ip
ip=$(ip -o -4 addr show en0 | awk '{print $4}' | cut -d/ -f1)

# Start hugo
hugo server -D --bind $ip --baseURL http://$ip