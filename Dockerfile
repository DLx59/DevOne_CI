FROM node:lts

RUN apt-get update && apt-get install -y \
    bash \
    curl \
    tzdata \
    docker.io

# Installation de GitLab Runner avec wget
RUN curl -LJO "https://gitlab-runner-downloads.s3.amazonaws.com/latest/deb/gitlab-runner_amd64.deb" && \
    dpkg -i gitlab-runner_amd64.deb && \
    rm gitlab-runner_amd64.deb

COPY config.toml /etc/gitlab-runner/config.toml

# Exécuter le GitLab Runner au démarrage du conteneur
CMD ["gitlab-runner", "run"]
