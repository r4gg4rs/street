#!/bin/bash

haml index.haml ./build/index.html
sass ./sass/street.sass ./build/css/street.css
coffee -j main.js -w -o ./build/js/ -c cripts/*.coffee
