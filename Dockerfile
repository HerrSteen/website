FROM node:18

RUN git clone https://github.com/HerrSteen/website.git

WORKDIR /website

RUN git checkout feature/tradingview

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "start" ]