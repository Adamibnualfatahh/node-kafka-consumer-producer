# Requirements
- Docker
- Node
- NPM

# Installation
- Clone the repository
- Run `npm install`
- Run `Docker-compose up`
- Run `npm run start:producer`
- Run `npm run start:consumer`

# Script Executable
- `./scripts/start.sh` to start kafka docker container
- `./scripts/create-topic.sh` to create topic in kafka
- `./scripts/push-topic-message.sh` to push message to topic
- `./scripts/view-topic-message.sh` to view message in topic