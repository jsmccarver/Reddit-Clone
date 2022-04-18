#!/bin/bash

echo What Should the Version be
read VERSION

docker build -t jmccarver/backend:$VERSION
docker push jmccarver/backend:$VERSION