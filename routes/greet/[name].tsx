// routes/greet/[name].tsx

//import to get type PageProps, so now we got autocompletation
import { PageProps } from "$fresh/server.ts";

// Fresh passes a PageProps interface as props. and we have the params var.
export default function GreetPage(props: PageProps) {
  const { name } = props.params;
  return (
    <main>
      <p>Greetings to you, {name}!</p>
    </main>
  );
}