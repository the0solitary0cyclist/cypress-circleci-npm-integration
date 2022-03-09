FROM cypress/base:12

WORKDIR /

COPY package.json package.lock ./
RUN npm install

COPY . .

# CMD ["yarn", "test"]
