import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";

export default function ConnectBanner() {
  return (
    <section className="mt-16">
      {/* Full-bleed dark block that hugs screen edges */}
      <div className="bg-zinc-900 text-white rounded-t-[36px]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
          <div className="flex items-center justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold">Lets Connect there</h2>
            <Link href="/contact" className="rounded-full bg-orange-600 text-white px-5 py-3 font-semibold hover:bg-orange-700">Hire me →</Link>
          </div>

          <div className="my-8 border-t border-white/10" />

          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <img src="/logo-mark.svg" alt="logo" className="h-8 w-8" />
                <span className="font-semibold">GENAI</span>
              </div>
              <p className="mt-3 text-sm text-zinc-300 max-w-prose">
                I design and build intelligent, production‑ready experiences powered by LLMs and great data.
              </p>
              <div className="mt-4 flex items-center gap-4 text-white/80">
                <a href="#" aria-label="GitHub" className="hover:text-white"><FaGithub /></a>
                <a href="#" aria-label="LinkedIn" className="hover:text-white"><FaLinkedin /></a>
                <a href="#" aria-label="YouTube" className="hover:text-white"><FaYoutube /></a>
                <a href="#" aria-label="Twitter" className="hover:text-white"><FaTwitter /></a>
              </div>
            </div>

            <div>
              <div className="text-orange-400 font-semibold">Contact</div>
              <ul className="mt-2 space-y-1 text-zinc-300 text-sm">
                <li>
                  <a href="tel:+919161251999" className="hover:text-white">+91 9161251999</a>
                </li>
                <li>
                  <a href="mailto:architmishrapro@gmail.com" className="hover:text-white">architmishrapro@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="my-8 border-t border-white/10" />
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
            <div>Copyright © {new Date().getFullYear()} Archit Mishra. All rights reserved.</div>
            <div>
              <a href="#" className="hover:text-white">User Terms & Conditions</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
