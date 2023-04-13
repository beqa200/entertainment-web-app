# Entertainment web app

### Table of Contents

- [Prerequisites](#Prerequisites)
- [Tech Stack](#Tech-Stack)
- [Getting Started](#Getting-Started)
- [Project Structure](#Project-Structure)
- [Deployment](#Deployment)
- [Author](#Author)

#

### Prerequisites

- <img src="readme/npm.png" width="25" style="top: 8px" /> _npm @8 and up_
- <img src="readme/vite.jpg" width="25" style="top: 8px" /> _vite @4.0.0_
- <img src="readme/typescript.png" width="25" style="top: 8px" /> _typescript @5.0.3_

#

### Tech Stack

- <img src="readme/nextjs.png" width="25" style="top: 8px" /> _NextJS @13.2.4 - full-stack framework_
- <img src="readme/styled-components.png" width="25" style="top: 8px" /> _Styled-components @5.3.9 - visual primitives for the component age_
- <img src="readme/react-hook-form.png" width="25" style="top: 8px" /> _React Hook Form @7.43.9 - library for making forms_
- <img src="readme/mongoose.png" width="25" style="top: 8px" /> _Mongoose @7.0.3 - database_
- <img src="readme/jwt.png" width="25" style="top: 8px" /> _JWT @9.0.1 - Authentication token_
- <img src="readme/bcrypt.png" width="25" style="top: 8px" /> _bcrypt @5.0.0 - Password hashing tool_

#

### Getting Started

1. First of all you need to clone app repository from github:

```
git clone git@github.com:beqa200/entertainment-web-app.git
```

2. Next step requires install all the dependencies.

```
npm install
```

3. To see project in action

```
npm run dev
```

#

### Project Structure

```
|--- components # reusable components
|--- layouts
|--- pages
|   |---|--- api
|   |---|---|--- login
|   |---|---|--- movies
|   |---|---|--- register
|   |---|---|--- _db.ts
|   |---|---|--- _verifyToken.ts
|   |---|--- bookmarked
|   |---|--- login
|   |---|--- sign-up
|   |---|--- tv-series
|--- public
|--- styled-components
|   |---|--- GlobalStyle
|   |---|--- index.ts # export all components
|--- types # declare all types
- bookmark.ts
- vercel.json # vercel configuration
- package.json # dependency manager configurations

```

#

### Deployment

Before every deployment you need to create build file.

```
npm run build
```

after this you can use this file to deploy project on server.

#

### Author

- [LinkedIn](https://www.linkedin.com/in/beka-maisuradze-76a730234/)
