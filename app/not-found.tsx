import { NotFoundIllustration } from "@/components/not-found-illustration";

export default function NotFound() {
  return (
    <main className="not-found-page" id="main-content" aria-label="Page not found">
      <div className="not-found-layout">
        <NotFoundIllustration />
        <div className="not-found-copy">
          <p>We couldn’t find the page you’re looking for.</p>
          <p>It may have moved, or the address may be incorrect.</p>
        </div>
      </div>
    </main>
  );
}
