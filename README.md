## Online Exams

# Repo Link: [https://github.com/Dev-May/online-exams](https://github.com/Dev-May/online-exams)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## What the Project Does

The Online Exams app is a modern, scalable, and user-friendly platform designed to create, manage, and take exams online. It includes features for:

- **Students**: Attempting exams, reviewing scores, and tracking progress.
- **Admins**: Creating exams, managing questions and answers, and analyzing results.
- **Security**: Ensuring reliable authentication using NextAuth and robust form validation with Zod.

This application combines cutting-edge technologies like Next.js 14, React Query, react-hook-form, Zod, and shadcn, the app ensures excellent performance and seamless usability.

---

## Getting Started

# Prerequisites

To run the project locally, you’ll need:

- Node.js (v14 or higher)
- npm or yarn

# Steps

1. Clone the repository:

```bash
git clone [https://github.com/Dev-May/online-exams.git](https://github.com/Dev-May/online-exams.git)
cd online-exams
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Configure environment variables:

- Create a .env file in the root directory.
- Add the necessary variables:
  DATABASE_URL=<your-database-url>
  NEXTAUTH_SECRET=<your-nextauth-secret>

4. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5- Open the app in your browser at [http://localhost:3000](http://localhost:3000) to see the result.
You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

## Where to Get Help

If you encounter any issues:

- Check the Issues section of the repository.
- Create a new issue with a detailed description of the problem.
- Reach out to the project maintainer on GitHub (Dev-May).

## Who Maintains and Contributes to the Project

The Online Exams app is developed and maintained by May. It is a collaborative project, and contributions are always welcome! If you'd like to contribute:

1- Fork the repository.
2- Create a new branch for your feature or bug fix:

```bash
git checkout -b feature/your-feature
```

3- Commit your changes:

```bash
git commit -m "Add your commit message"
```

4- Push your branch:

```bash
git push origin feature/your-feature
```

5- Open a pull request for review.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
