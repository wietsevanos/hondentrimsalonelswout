import { Link } from "react-router-dom";


export default function NotFound() {
  return (
    <>
      <>
        <title>Pagina niet gevonden · Hondentrimsalon Elswout</title>
        <meta name="robots" content="noindex" />
      </>
      <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="font-serif text-7xl text-bark">404</h1>
          <h2 className="mt-4 font-serif text-2xl text-bark">Pagina niet gevonden</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            De pagina die je zoekt bestaat niet (meer).
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-bark text-cream px-6 py-3 text-sm hover:bg-terracotta transition-colors"
          >
            Terug naar home
          </Link>
        </div>
      </div>
    </>
  );
}
