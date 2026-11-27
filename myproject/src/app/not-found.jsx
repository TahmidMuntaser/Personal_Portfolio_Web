import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#020d19] px-4 py-16 text-white">
      <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#081720] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
        <div className="flex items-center justify-between border-b border-white/10 bg-black/25 px-4 py-2.5">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="font-mono text-xs text-slate-400">~/portfolio/404 - zsh</span>
        </div>

        <div className="p-6 font-mono md:p-8">
          <p className="text-sm text-rose-300">zsh: route not found: 404</p>
          <h1 className="mt-3 font-sans text-3xl font-bold text-white">Page Not Found</h1>
          <p className="mt-2 font-sans text-sm leading-6 text-slate-400">
            The requested path does not exist in this portfolio directory.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-[#04121b] transition-colors duration-150 hover:bg-emerald-300"
            >
              <span>$ cd ~</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
