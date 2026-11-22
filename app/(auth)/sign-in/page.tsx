"use client";

import Link from "next/link";
import Image from "next/image";

import { authClient } from "@/lib/auth-client";

const SignIn = () => {
  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="CaptureDesk Logo"
            width={32}
            height={32}
          />
          <h1>CaptureDesk</h1>
        </Link>

        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src="/assets/icons/star.svg"
                  alt="Star Icon"
                  width={20}
                  height={20}
                  key={index}
                />
              ))}
            </figure>
            <p>
              Record, share, and collaborate in seconds. CaptureDesk turns your
              screen into polished walkthroughs, demos, and presentations — no
              hassle, just one click to capture and a link to share.
            </p>
            <article>
              <Image
                src="/assets/images/dummy.jpg"
                alt="Jason"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h2>Divyanshu Rajput</h2>
              </div>
            </article>
          </section>
        </div>
        <p>© CaptureDesk 2025</p>
      </aside>
      <aside className="google-sign-in">
        <section>
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="SnapChat Logo"
              width={40}
              height={40}
            />
            <h1>CaptureDesk</h1>
          </Link>
          <p>
            Create and share your very first <span>CaptureDesk video</span> in no
            time!
          </p>

          <button
            onClick={async () => {
              return await authClient.signIn.social({
                provider: "google",
              });
            }}
          >
            <Image
              src="/assets/icons/google.svg"
              alt="Google Icon"
              width={22}
              height={22}
            />
            <span>Sign in with Google</span>
          </button>
        </section>
      </aside>
      <div className="overlay" />
    </main>
  );
};

export default SignIn;