# Haveno User Interface

## Development

### Prerequisites

1. Node 16.x
1. yarn 1.x
1. Haveno daemon and envoy proxy

### Install dependencies

```sh
yarn
```

### Configure environment variables

Copy [.env.example](./.env.example) to a file called `.env` and point the environment variables to the envoy proxy.

### Start the app in watch mode

```sh
yarn watch
```

### Tests

```sh
yarn tests
```

### Storybook

```sh
yarn storybook
```
