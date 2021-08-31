# Socket-With-REST

node install

node index.js

API

curl --location --request POST 'http://localhost:3000/message' \
--header 'Content-Type: application/json' \
--data-raw '{
    "message":"How are you ?"
}'
