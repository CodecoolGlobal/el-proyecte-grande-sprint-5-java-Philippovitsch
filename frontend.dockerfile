FROM node:14.21.0-alpine@sha256:e3fa557bf164e7a262b0a3ff28dcaac73542f8fde83c879971fc63bad89fe41a
RUN mkdir /app
COPY frontend/ app/
WORKDIR /app
RUN npm install
RUN npm run build
RUN npm install -g serve
RUN echo -e "#!/bin/bash\nnpm run server &\nserve -s build" > run.sh
RUN chmod +x run.sh

EXPOSE 3000
EXPOSE 5000

CMD ["sh", "run.sh"]

### Build Image ###
# docker build -t umbrella-frontend:v5.0 -f frontend.dockerfile .

### Run Image ###
# docker run --name umbrella-frontend --rm -d -p 3000:3000 -p 5000:5000 umbrella-frontend:v5.0
