
export function Footer() {
    return (
        <footer className="border-t border-[#E5D6C7] bg-[#F9F1E8] px-6 py-8">
            <div className="mx-auto flex max-w-[1232px] flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-between">
                <p className="text-sm text-[#766153]">
                    © 2026 CareerSpace. All rights reserved.
                </p>

                <p className="text-sm text-[#766153]">
                    Created with love by{" "}
                    <span className="font-medium text-[#8C5738]">
                        Suamik
                    </span>{" "}
                    <span role="img" aria-label="love">
                        ❤️
                    </span>
                </p>
            </div>
        </footer>
    );
}
