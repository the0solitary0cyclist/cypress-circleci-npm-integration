FROM cypress/base:12

WORKDIR /

COPY package.json ./
RUN npm install

COPY . .

# CMD ["yarn", "test"]
