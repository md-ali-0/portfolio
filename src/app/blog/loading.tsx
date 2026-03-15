export default function Loading() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            <section className="relative mb-12 pt-10">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="mx-auto h-[260px] max-w-5xl animate-pulse rounded-xl bg-zinc-900 sm:h-[360px]" />
                </div>
            </section>

            <section className="relative pb-20">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
                        <div className="lg:col-span-8">
                            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
                                <div className="mb-4 h-7 w-28 animate-pulse rounded bg-zinc-800" />
                                <div className="mb-4 h-12 w-4/5 animate-pulse rounded bg-zinc-800" />
                                <div className="mb-8 flex gap-3">
                                    <div className="h-4 w-28 animate-pulse rounded bg-zinc-800" />
                                    <div className="h-4 w-24 animate-pulse rounded bg-zinc-800" />
                                    <div className="h-4 w-20 animate-pulse rounded bg-zinc-800" />
                                </div>
                                <div className="space-y-4">
                                    <div className="h-4 w-full animate-pulse rounded bg-zinc-800" />
                                    <div className="h-4 w-full animate-pulse rounded bg-zinc-800" />
                                    <div className="h-4 w-5/6 animate-pulse rounded bg-zinc-800" />
                                    <div className="h-4 w-full animate-pulse rounded bg-zinc-800" />
                                    <div className="h-4 w-4/5 animate-pulse rounded bg-zinc-800" />
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-4">
                            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
                                <div className="mb-6 h-6 w-40 animate-pulse rounded bg-zinc-800" />
                                <div className="space-y-4">
                                    <div className="h-4 w-full animate-pulse rounded bg-zinc-800" />
                                    <div className="h-4 w-4/5 animate-pulse rounded bg-zinc-800" />
                                    <div className="h-4 w-3/5 animate-pulse rounded bg-zinc-800" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
