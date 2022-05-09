#!/bin/sh
./node_modules/.bin/tsc --watch --noEmit --project packages/main &
P1=$!
./node_modules/.bin/tsc --watch --noEmit --project packages/preload &
P2=$!
./node_modules/.bin/tsc --watch --noEmit --project packages/renderer &
P3=$!
wait $P1 $P2 $P3
