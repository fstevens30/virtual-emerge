# Virtual Emerge

Emerge is an event held twice yearly at Ara Institute of Canterbury, where students from the Bachelor of Information and Communication Technologies (BICT) programme showcase their work to industry professionals.

This repository contains the source code for the Virtual Emerge website. It runs on Next.js, a React framework. The backend uses Supabase.

## Getting Started

generate a `.env` file in the root directory with the following variables:
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

You will need access to the Supabase database to get the values for these variables. Please contact me if you need access. Otherwise you can create your own Supabase project and use the values from there, you will need to create the tables and tweak the code to match your own Supabase project.

To run the project, run the following commands:
```bash
npm install
npm run dev
```

## Deployment
The website is deployed on Vercel. Any changes pushed to the main branch will automatically be deployed.