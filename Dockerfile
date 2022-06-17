FROM node 

WORKDIR /usr/app

COPY package.json ./

RUN npm install --allow-root

COPY . .

EXPOSE 3333


CMD ["npm","run","ddev"]