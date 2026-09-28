export const NotFound = () => {
  return (
    <main className="min-h-screen grid place-items-center px-5 text-center">
      <div>
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-serif text-4xl">This page doesn't exist.</h1>
        <a href="/" className="btn-primary mt-8">Back home</a>
      </div>
    </main>
  );
};
