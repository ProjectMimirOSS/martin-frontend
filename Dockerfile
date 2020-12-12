FROM node:12.16.1-alpine3.9 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app/
RUN npm install --silent
COPY . /app
EXPOSE 3000
CMD ["npm", "run", "start"]


# # stage 2 - build the final image and copy the react build files
# FROM nginx:1.17.8-alpine
# COPY --from=build /app/build /usr/share/nginx/html/martin
# RUN rm /etc/nginx/conf.d/default.conf
# COPY ./nginx.conf /etc/nginx/conf.d
# CMD ["nginx", "-g", "daemon off;"]




#docker build -t navadeep-raja/martin .   
#docker run -d -it -p 4200:80/tcp --name martin-app navadeep-raja/martin 

