FROM node:14.21.0-alpine@sha256:e3fa557bf164e7a262b0a3ff28dcaac73542f8fde83c879971fc63bad89fe41a AS build
RUN mkdir /frontend
COPY frontend/ frontend/
WORKDIR /frontend
RUN npm install
RUN npm run build

FROM node:14.21.0-alpine@sha256:e3fa557bf164e7a262b0a3ff28dcaac73542f8fde83c879971fc63bad89fe41a
RUN npm install -g serve
RUN mkdir /app
COPY --from=build /frontend/build/ app/
WORKDIR /app
EXPOSE 3000
CMD ["serve", "-s", "."]

### Build Image ###
# docker build -t umbrella-frontend:v5.0 -f frontend.dockerfile .

### Run Image ###
# docker run --name umbrella-frontend --rm -d -p 3000:3000 umbrella-frontend:v5.0
