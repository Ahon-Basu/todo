This is a [Next.js](https://nextjs.org) project of todo lists.

## Getting Started

First download the files and folders

Then run the development server:

```bash
npx create-next-app@latest Project-name
# it will make a next app
npm install mongoose
#it will download required pakage for mongodb
```
In root folder there may have many other files. Your work is in `src` folder. Download the code and folders and replace downloaded `src` folder with created one.

## Connect with mongoDB

- At first, you might create a cluster from [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) and then download and install mongodb compus from [MongoDB Website](https://www.mongodb.com/try/download/community).

- Now create `.env.local` file in root folder.

- Make a variable named `MONGODB_URI` and paste the connection string. Example :
```bash
MONGODB_URI=yourString/todo
#keep it similar and don't make any space among the words
```

## Run the program

Open a new terminal and run :
```bash
npm run dev
```

Now go to [localhost:/3000/create-task](http://localhost:3000/create-task)


## Routes

`create-task` and `show-tasks` are two routes.

To create task type [create-task](http://localhost:3000/create-task),
To show tasks type [show-tasks](http://localhost:3000/show-tasks)
After the URL.

If you don't route it will automatically route to [create-task](http://localhost:3000/create-task).

## Author

`Name` : `Ahon Basu`,

`Email` : [`ahonbasu10@gmail.com`]()

## Project details

```bash
# Package.json
{
  "name": "todo",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "mongoose": "^9.4.1",
    "next": "16.2.3",
    "react": "19.2.4",
    "react-dom": "19.2.4"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "babel-plugin-react-compiler": "1.0.0",
    "eslint": "^9",
    "eslint-config-next": "16.2.3",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

## Some Questions

- Which one is root folder?
```In nextJS src is the root folder```
- Can I use it Commercially? ```Simple answer is you have to take permission```
- How do I contract you? ```Using my email adress```
