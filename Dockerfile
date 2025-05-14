FROM node:22.15

WORKDIR /usr/src/app
RUN chown -R node:node /usr/src/app
USER node
COPY --chown=node:node package*.json ./
RUN mkdir /usr/src/app/node_modules
RUN chown -R node:node node_modules
RUN npm install

COPY --chown=node:node . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "watch"]