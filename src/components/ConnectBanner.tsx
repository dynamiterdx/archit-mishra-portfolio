import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";

export default function ConnectBanner() {
  return (
    <section className="mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl bg-zinc-900 text-white p-8 sm:p-12 shadow-xl">
          <div className="flex items-center justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold">Lets Connect there</h2>
            <Link href="/contact" className="rounded-full bg-orange-600 text-white px-5 py-3 font-semibold hover:bg-orange-700">Hire me →</Link>
          </div>

          <div className="my-8 border-t border-white/10" />

          <div className="grid gap-10 md:grid-cols-3">
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

            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-orange-400 font-semibold">Navigation</div>
                <ul className="mt-2 space-y-1 text-zinc-300 text-sm">
                  <li><Link href="/">Home</Link></li>
                  <li><a href="/#about">About</a></li>
                  <li><a href="/#services">Service</a></li>
                  <li><a href="/#resume">Resume</a></li>
                  <li><Link href="/projects">Project</Link></li>
                </ul>
              </div>
              <div>
                <div className="text-orange-400 font-semibold">Contact</div>
                <ul className="mt-2 space-y-1 text-zinc-300 text-sm">
                  <li>+XX 000 000 000</li>
                  <li>you@email.com</li>
                  <li>yourdomain.com</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="text-orange-400 font-semibold">Get the latest information</div>
              <form className="mt-3 flex overflow-hidden rounded-full ring-1 ring-white/15 bg-white/5">
                <input className="flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/50" placeholder="Email Address" />
                <button className="bg-orange-600 px-4 font-semibold">→</button>
              </form>
            </div>
          </div>

          <div className="my-8 border-t border-white/10" />
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
            <div>Copyright © {new Date().getFullYear()} Your Name. All rights reserved.</div>
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

