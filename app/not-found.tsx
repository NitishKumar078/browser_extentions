import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="not-found container-site">
      <span className="eyebrow">404 / Not in this collection</span>
      <h1>This tab leads nowhere.</h1>
      <p>The extension may have moved, or this address may be incorrect.</p>
      <Link href="/#extensions" className="button button-dark">
        <ArrowLeft size={17} /> Back to the collection
      </Link>
    </div>
  );
}
