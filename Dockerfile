FROM node:22.15

WORKDIR /usr/src/app
USER node
COPY --chown=node:node package*.json ./

RUN npm install

COPY --chown=node:node . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]