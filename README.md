# SaaS Dashboard

## Authentication with NextJS

### Install
Go to the [nextjs docs](https://nextjs.org/docs/getting-started/installation)
In the command prompt run:
```pwsh
npx create-next-app@latest
```
<img width=600px src="">

Open up the new saas-dashbaord folder in VS code 
Run:
```pwsh
npm run dev
```
Initialize [shadcn](https://ui.shadcn.com/docs/installation/next) and choose all the default options:
```pwsh
npx shadcn-ui@latest init
```
Add a button:
```pwsh
npx shadcn-ui@latest add button
```
Use the [clerk guide](https://clerk.com/docs/quickstarts/nextjs) for the next few steps:
Next install Clerk NextJS:
```pwsh
npm install @clerk/nextjs
```
Add Middleware to your app (Step 3)

Create an .env.local file and include the files include the keys shown the https://clerk.com/docs/quickstarts/nextjs documentation

Create a [Clerk account](https://dashboard.clerk.com/sign-up?_gl=1*u7kgs3*_gcl_au*MTE3OTk4MTE0MC4xNzIzMTIwMjA5*_ga*MTIyMjUwNjA4Ny4xNzIzMTIwMjA5*_ga_1WMF5X234K*MTcyMzEyNTc1NS4yLjEuMTcyMzEyNTc1Ni4wLjAuMA..) to get your .env.local values.

Add ClerkProvider to your app

**MAKE SURE to change your DTABASE_URL port to 5432. There has been a lot of [issues reported](https://github.com/drizzle-team/drizzle-orm/issues/2338) online recently about port 6543. **

Add a [Dialog component](https://ui.shadcn.com/docs/components/dialog) using these steps.

Install [Lucide React](https://lucide.dev/guide/installation)
```pwsh
npm install lucide-react
```

## Database Setup with Supabase, Drizzle and PostgresSQL

Install [Supabase dependencies](https://orm.drizzle.team/docs/get-started-postgresql#supabase):
```pwsh
npm i drizzle-orm postgres
```
If the React versions conflict try running:
```pwsh
npm i react@latest react-dom@latest
```
And then run this again:
```pwsh
npm i drizzle-orm postgres
```
Install Drizzle dependencies:
```pwsh
npm i -D drizzle-kit
```
Create a new folder in your root directory called /db and then a new file called schema.ts.

Create your models. Copy and paste the code from [Step 2](https://orm.drizzle.team/docs/get-started-postgresql#supabase). Make appropriate edits to the code for your specific database.

Make your first Query. Copy and paste the code from step 3. Again make appropriate edits based on your speicific database.

Connection pooling (optional). Copy and paste the code from step 4. Again make appropriate edits based on your speicific database. 

install the drizzle kit: 
```pwsh
npm i -D drizzle-kit
```

Create a drizzle.config.ts file.

Add the following files to your packgae.json scripts:
```json
    "db:generate": "drizzle-kit generate",
    "db:push": "drizzle-kit push",
    "db:migrate": "drizzle-kit migrate",
    "db:studio": "drizzle-kit studio"
```

Create a new [supabase project](https://supabase.com/dashboard/projects)

Run the migration:
```pwsh
npm run db:migrate
```
Update page.tsx and schema.ts with User credentials

Run the push:
```pwsh
npm run db:push
```

If you receive a connection error it's likely because it is not reading the correct dbCredentials.

Run:
```pwsh
npm install dotenv
```

## Projects Page
Add skeleton:
```pwsh
npx shadcn-ui@latest add skeleton
```

## Feedback Table
```pwsh

Once code is updated, push changes with:
```pwsh
npm run db:push
```

Use [TanStack Tables ](https://tanstack.com/table/latest/docs/framework/react/examples/basic) to build a nice table.

Install with:
```pwsh
npm install @tanstack/react-table
```
Use the [Pagination example](https://tanstack.com/table/latest/docs/framework/react/examples/pagination) as a template and edit the code according to how you want the table displayed on your SaaS.

Create the [Shadcn dropdown button](https://ui.shadcn.com/docs/components/dropdown-menu):
```pwsh
npx shadcn-ui@latest add dropdown-menu
```
Create a new file in the components folder named header-menu.tsx

In your Supabase dashboard go to the SQL Editor and create a new Query. Use the [Supabase functions docs](https://supabase.com/docs/guides/database/functions) as a guide. Adjust your code according to your table / specific parameters. it may look something like this:

```supa
create or replace function add_feedback(p_project_id integer, p_user_name text, p_user_email text, p_message text)
returns bigint
language plpgsql
as $$
declare
  new_feedback_id bigint;
begin
  insert into feedbacks(project_id, user_name, user_email, message) 
  values (p_project_id, p_user_name, p_user_email, p_message)
  returning id into new_feedback_id;

  return new_feedback_id ;
  end;
$$;
```

Open a new query and test the function using:
```supa
select add_feedback(4, 'user', 'test@gmail.com', 'testing db function supabase');
```

Install the [Supabase Javascript Client Library ](https://supabase.com/docs/reference/javascript/installing) in the root folder (/saas-widget):
```pwsh
npm install @supabase/supabase-js
```

Create a new file in the /src folder called supabaseClient.js

## Payments

Create a Stripe account then go to the [Developers console](https://dashboard.stripe.com/test/developers). Go to the API keys section and include the keys in your .env.local file with the designated names below. Copy and paste the value for each key provided in your account:
```.env
NEXT_PUBLIC_PUBLISHABLE_KEY=xxxxxxxxxxxxxxx
STRIPE_SECRET_KEY=xxxxxxxxxxxxxxxxxxx
```
Next go to the Product Catalog and create prices for your app.

Once created, go to your lib folder and create a file called payments.ts

Next install stripe:
```pwsh
npm install stripe @stripe/stripe-js
```

Create stripe.ts and stripe-client.ts files (see code)

Create a Stripe checkout session using the [Stripe docs](https://docs.stripe.com/api/checkout/sessions/create?lang=node) for guidance

### [Webhooks](https://docs.stripe.com/webhooks)
When building Stripe integrations, you might want your applications to receive events as they occur in your Stripe accounts, so that your backend systems can execute actions accordingly.

Once you update your Webhook route.ts code, go to your Stripe dashboard and go to the Webhooks section. Click Add an Endpoint. Make a url something like:

https://saas-widget.vercel.app/api/stripe/webhook

and add the relevant events that are in your route.ts file.

## Landing Page

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
