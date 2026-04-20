const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeJZhOu6MGqxZFhJ5cmYhA8l25BJDZUOMw8ZHHs_Pv1jQSOOQ/viewform?usp=publish-editor";

export function CountdownGate() {
  return (
    <div className="space-y-4 text-center sm:text-left">
      <p className="text-sm uppercase tracking-[0.25em] text-accent-olive-bright">Inscrições liberadas</p>
      <a
        href={FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full rounded-xl bg-accent-olive px-6 py-4 font-display text-3xl leading-none tracking-[0.08em] text-white transition-all hover:bg-accent-olive-bright sm:w-auto sm:min-w-[300px]"
      >
        A HORA É AGORA!
      </a>
    </div>
  );
}
