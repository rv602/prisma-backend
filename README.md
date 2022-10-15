# About the project

This is a full fledged backend with CRUD and filtering operations.
<br>
You can mould this according to your use case and integrate it with any frontend framework of your preference.

# Tech Stack

<p align="center">
<img style="width: 100px" src="https://miro.medium.com/max/1200/1*yYN3pRB9mGS-IG_-agqDvA.png"/>
<img style="width: 100px" src="https://w7.pngwing.com/pngs/545/451/png-transparent-node-js-express-js-javascript-solution-stack-web-application-others-angle-text-rectangle.png"/>
<img style="width: 60px" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/287/square_480/prismaHD.png"/>
</p>

This project is built with Node js and Express, and uses MongoDB Atlas for the database. I have used Prisma in order to work with my database.
<br>
Prisma is an open source ORM which makes working with databases and creating schemas very much easier for the developer.
<br>
You can read more about Prisma from this [link]('https://www.prisma.io/'){:target="_blank"}

# How to run this project locally

Ensure that you have Node js v16+ and nodemon installed on your device.

After cloning the repository, you can navigate to it's directory and install all dependencies as depicted below

```
cd prisma-backend/
npm install
```

Then proceed to host a database of your own via MongoDB Atlas free cluster or MongoDB compass locally. Once done, make a .env file in the root directory of the project and inject the database link and a random string in it as depicted below

```
DATABASE_URL = ' '
JWT_SECRET = 'test'
```

Finally, run the following commands to spin up your project and the prisma studio to visuallise your data in a tabular format.

```
npm run dev
npx prisma studio
```
