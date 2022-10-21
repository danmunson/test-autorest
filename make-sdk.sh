# make TS sdk
./node_modules/.bin/autorest --input-file=specs/postalytics_open_api.yml --output-folder=generated_sdks/$1 --$1

