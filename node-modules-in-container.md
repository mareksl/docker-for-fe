# Bind-mounting node_modules

Can't bind-mount node_modules content from host on macOS / Windows (different arch)

## Method 1

Never use `npm install` / `yarn install` on host!

All development done inside container.

Simpler, but meybe not the best if working in a team.

```sh
docker-compose run <service> yarn install
```

## Method 2

Hide local node_modules in container, move node_modules inside container up a directory.