# Haveno User Interface

## Development

### Prerequisites

1. Node 16.x
2. yarn 1.x (npm install --global yarn)
3. Run user1-daemon-local and envoy proxy by following [these instructions](https://github.com/haveno-dex/haveno-ts#run-tests)

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
yarn test
```

### Storybook

```sh
yarn storybook
```

### App Data Folder

The UI's data folder can be cleared to reset the UI state, located at:

- Mac: ~/Library/Application Support/haveno-ui/
- Linux: ~/.local/share/haveno-ui/
- Windows: ~\AppData\Roaming\haveno-ui\