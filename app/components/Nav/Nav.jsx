import Link from 'next/link';

function Nav() {
  return (
    <nav>
      <h3>Portfolio</h3>
      <Link href='/'>Home</Link> | <Link href='/coding/anagrams'>Anagrams</Link>
    </nav>
  );
}

export default Nav;
