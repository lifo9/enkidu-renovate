module.exports = {
  "endpoint": process.env.RENOVATE_ENDPOINT,
  "gitAuthor": process.env.RENOVATE_GIT_AUTHOR,
  "platform": "gitea",
  "forkProcessing": "disabled",
  "autodiscover": true,
  "dryRun": null,
  "binarySource": "install",
  "hostRules": [
    {
      "matchHost": "docker.io",
      "username": process.env.DOCKER_HUB_USERNAME,
      "password": process.env.DOCKER_HUB_PASSWORD,
    },
  ],
};
