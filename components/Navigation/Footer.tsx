import Link from "next/link"

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/privacy">Privacy</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </footer>
  )
}
