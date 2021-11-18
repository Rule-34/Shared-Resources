# Rule 34 Shared Resources

This is a repository that is used as a `git submodule` between many of the “Rule 34” projects.

For example

- [Rule 34 App](https://redirect.r34.app/github)
- [Rule 34 API](https://redirect.r34.app/github/api)
- [Rule 34 Twitter Bot](https://redirect.r34.app/twitter/bot)
- [Rule 34 Twitter Furry Bot](https://redirect.r34.app/twitter/furbot)
- [Rule 34 Discord Bot](https://redirect.r34.app/discord)

## Files

- [booru-list.json](src/default-booru-list.json) default list for the Rule 34 App with popular boorus
- [booru-complete-list.json](src/supported-booru-list.json) list with all tested and working boorus
- [booru-type.json](src/booru-type-list.json) list with the Rule 34 API supported booru types

## Usage

### Adding submodule

```shell
git submodule add https://github.com/Rule-34/Shared-Resources <route>

# Example
git submodule add https://github.com/Rule-34/Shared-Resources src/external/rule34-shared-resources
```

### Updating submodule

```shell
git submodule update --remote
```

## Development

### Requirements

- NodeJS
- NPM
- Python 3
