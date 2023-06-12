import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        This is a new personal web space for my various coding projects, study,
        proof of concepts and excercises.
      </p>
      <p>
        I am also using this as a good opportunity to learn the new approaches
        and features of Next 13+, and combining this with Strapi4+ for NodeJS
        content API
      </p>
      <p>
        I decided to begin this project in pure linted JS to then later fully
        migrate the project to Typescript
      </p>
      <p>
        The layout and styling is minimal by design as well initially. The plan
        is to fully wireframe this in Figma once I have some initial content and
        structure and translate that design in Sass/CodeModules
      </p>
      <p>
        This is deployed to Vercel via Github CI/CD, and current URL is:{' '}
        <Link href='https://portfolio-alpha-rouge-22.vercel.app/'>Here</Link>
      </p>
    </div>
  );
}
