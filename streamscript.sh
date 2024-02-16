#!/bin/bash


docker-compose up 

sleep 8s

sudo cp nginx.conf.bak nginx.conf

docker exec nginx-rtmp  nginx -s reload

