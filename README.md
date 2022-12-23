# desktop-vue-golang

This is experimental project for desktop application with electron golang as a server-side and vue as a client-side, golang with vue will communicate via http because basically electron is a packed-web application.

[![Build & Release](https://github.com/ganeshaampuh/desktop-vue-golang/actions/workflows/build.yml/badge.svg)](https://github.com/ganeshaampuh/desktop-vue-golang/actions/workflows/build.yml)

## Pre-requisities:
- Go
- NodeJS v16.13.1
- Git
- Homebrew (development on mac)

## Documentation

If you want to try this project run this command from cli, and electron will automatically build for current system

``` yarn install && yarn start ```


## Targeted build

For building windows apps 
``` yarn make:windows ```

You will need this package installed in mac for building windows apps
- (mono) [https://formulae.brew.sh/formula/mono]
- (homebrew-wine) [https://github.com/Gcenx/homebrew-wine]


For building linux apps
``` yarn make:linux ```


For building darwin apps
``` yarn make:mac ```
