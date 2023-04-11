# Base image
FROM node:16-alpine
#Bu görüntü, Alpine resmi görüntüsünde bulunan popüler Alpine Linux projesine dayanmaktadır. 
#Alpine Linux, çoğu dağıtım temel görüntüsünden (~5MB) çok daha küçüktür ve 
#bu nedenle genel olarak çok daha ince görüntülere yol açar.

RUN apk update && apk add postgresql-client


# Create app directory
WORKDIR /usr/src/app

# Install app dependencies

copy . .

RUN npm install

# Generate Prisma ORM
RUN npx prisma generate


# Expose port and start the app
EXPOSE 3000
CMD [ "npm", "run", "start" ]
