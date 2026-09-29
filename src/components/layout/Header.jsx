function Header() {
    return (
        <header className="border-b border-border bg-white">
            <div className="mx-auto max-w-7xl px-6 py-5">

                <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
                        SH
                    </div>

                    <div>
                        <h1 className="text-xl font-bold tracking-tight text-text">
                            StudHub
                        </h1>

                        <p className="mt-0.5 text-sm text-text-muted">
                            Student Info Portal
                        </p>
                    </div>

                </div>

            </div>
        </header>
    );
}

export default Header;