FROM node:20

COPY . /app
WORKDIR /app
RUN npm ci

# ENTRYPOINT /app/entrypoint.sh
CMD ["npm", "run", "start"]
