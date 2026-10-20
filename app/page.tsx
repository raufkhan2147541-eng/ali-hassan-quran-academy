
"use client";

import Image from "next/image";
import { useState } from "react";

const courses = [
  {
    number: "01",
    title: "Noorani Qaida",
    urdu: "نورانی قاعدہ",
    description:
      "Build a strong foundation by learning Arabic letters, pronunciation and basic Quran reading.",
    icon: "✦",
  },
  {
    number: "02",
    title: "Quran with Tajweed",
    urdu: "قرآن مع تجوید",
    description:
      "Improve your recitation and learn the essential rules of Tajweed step by step.",
    icon: "۞",
  },
  {
    number: "03",
    title: "Hifz-ul-Quran",
    urdu: "حفظ القرآن",
    description:
      "Follow a structured memorization and revision routine at your own learning pace.",
    icon: "☾",
  },
  {
    number: "04",
    title: "Translation & Islamic Studies",
    urdu: "ترجمہ و اسلامی تعلیمات",
    description:
      "Explore Quran translation, daily Duas, Islamic manners and essential teachings.",
    icon: "❋",
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappNumber = "923106669968";
  const whatsappMessage = encodeURIComponent(
    "Assalamu Alaikum! I would like to know about courses and admission at Ali Hassan Online Quran Academy."
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Courses", href: "#courses" },
    { label: "About", href: "#about" },
    { label: "Our Teacher", href: "#teacher" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#faf9f5] text-[#173b2c]">
      {/* Header and Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#e7e8dd] bg-[#faf9f5]/95 backdrop-blur-xl">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 sm:px-8">
          <a href="#home" className="flex shrink-0 items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#145c43] text-2xl text-[#e7c778] shadow-md">
              ۞
            </div>
            <div>
              <p className="text-base font-extrabold tracking-tight sm:text-lg">
                Ali Hassan
              </p>
              <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#a17a32] sm:text-[11px] sm:tracking-[0.15em]">
                Online Quran Academy
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-[#b28b3d]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#145c43] px-3 py-3 text-xs font-bold text-white shadow-md transition hover:bg-[#0f4834] sm:px-6 sm:text-sm"
            >
              Enroll Now <span aria-hidden="true">↗</span>
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d8dfd4] bg-white text-2xl text-[#145c43] lg:hidden"
            >
              {isMenuOpen ? "×" : "☰"}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="absolute left-0 right-0 top-full flex flex-col gap-1 border-t border-[#e7e8dd] bg-[#faf9f5] p-5 shadow-xl lg:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl px-4 py-3 font-semibold transition hover:bg-[#edf4eb]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative scroll-mt-24">
        <div className="pointer-events-none absolute -right-40 -top-32 h-96 w-96 rounded-full bg-[#e8d6a5]/25 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#cce3d4]/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-20 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e6d8b6] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#846326] shadow-sm sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-[#c5a04c]" />
              Online Quran Learning · Worldwide
            </div>

            <h1 className="max-w-2xl text-4xl font-black leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
              A Beautiful Journey
              <span className="mt-2 block text-[#16815b]">
                With The Holy Quran
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#63736a] sm:text-lg">
              Learn to read the Holy Quran with confidence, improve your
              Tajweed and strengthen your connection with the words of Allah —
              all from the comfort of your home.
            </p>

            <p
              lang="ur"
              dir="rtl"
              className="mt-4 max-w-xl text-right text-lg leading-9 text-[#63736a] sm:text-xl"
            >
              گھر بیٹھے قرآنِ پاک پڑھنا سیکھیں، تجوید بہتر بنائیں اور اپنی دینی
              تعلیم کا سفر آسانی سے شروع کریں۔
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#145c43] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#145c43]/15 transition hover:-translate-y-1 hover:bg-[#0f4834]"
              >
                Start Learning <span aria-hidden="true">→</span>
              </a>
              <a
                href="#courses"
                className="rounded-full border border-[#d8dfd4] bg-white px-7 py-4 text-sm font-bold transition hover:border-[#145c43] hover:bg-[#f0f5ef]"
              >
                Explore Courses
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-[#53675a]">
              <span>✓ Flexible timings</span>
              <span>✓ All ages welcome</span>
              <span>✓ Learn from home</span>
            </div>
          </div>

          {/* Quran Image */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full border border-[#d5bb7d]/70 sm:-right-7 sm:-top-7" />
            <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-full bg-[#d7e8da]/80" />

            <div className="relative rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-[#183d2b]/10 sm:rounded-[2.5rem] sm:p-4">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-[#164e39]">
                <Image
                  src="/quran-academy.jpg"
                  alt="Holy Quran, representing Quran learning and recitation"
                  width={700}
                  height={800}
                  priority
                  className="h-[390px] w-full object-cover sm:h-[490px]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b2419]/95 via-[#0b2419]/55 to-transparent px-6 pb-7 pt-24 text-white sm:px-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#efd48e]">
                    Read · Learn · Reflect
                  </p>
                  <p
                    lang="ar"
                    dir="rtl"
                    className="mt-3 text-3xl leading-relaxed sm:text-4xl"
                  >
                    وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا
                  </p>
                  <p className="mt-2 text-sm text-white/80">
                    “Recite the Quran in a measured way.”
                  </p>
                  <p className="mt-1 text-xs text-[#efd48e]">
                    Surah Al-Muzzammil · 73:4
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 px-3 py-4 sm:px-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#edf4eb] text-xl text-[#145c43]">
                  ✦
                </div>
                <div>
                  <p className="font-extrabold">
                    Your Quran Journey Starts Here
                  </p>
                  <p className="mt-1 text-xs text-[#748077]">
                    Personalized online learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Highlights */}
      <section className="border-y border-[#e7e8dd] bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:px-8 md:grid-cols-3 md:gap-10">
          <div className="flex items-center justify-center gap-4 py-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf4eb] text-xl text-[#145c43]">
              ✦
            </div>
            <div>
              <p className="font-extrabold">3+ Years Experience</p>
              <p className="mt-1 text-sm text-[#788379]">
                Quran teaching experience
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 py-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7f0df] text-xl text-[#98762f]">
              ۞
            </div>
            <div>
              <p className="font-extrabold">Multiple Learning Paths</p>
              <p className="mt-1 text-sm text-[#788379]">
                Courses for different levels
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 py-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf4eb] text-xl text-[#145c43]">
              ☾
            </div>
            <div>
              <p className="font-extrabold">Learn From Anywhere</p>
              <p className="mt-1 text-sm text-[#788379]">
                Pakistan and worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section
        id="courses"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24"
      >
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#a17a32] sm:text-sm">
            Our Learning Programs
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Find the Right Quran Course
          </h2>
          <p className="mt-4 leading-8 text-[#6b796f]">
            Begin with the basics or build on your existing knowledge. Choose a
            course that suits your learning goals.
          </p>
          <p
            lang="ur"
            dir="rtl"
            className="mt-3 text-lg leading-8 text-[#6b796f]"
          >
            اپنی ضرورت کے مطابق کورس منتخب کریں اور قرآن سیکھنے کا سفر شروع
            کریں۔
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <article
              key={course.number}
              className="group rounded-3xl border border-[#e6e8de] bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-[#c6d9c9] hover:shadow-xl hover:shadow-[#173b2c]/5 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf4eb] text-2xl text-[#145c43] transition group-hover:bg-[#145c43] group-hover:text-white">
                  {course.icon}
                </div>
                <span className="text-sm font-bold tracking-widest text-[#b5a77d]">
                  {course.number}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-extrabold leading-7">
                {course.title}
              </h3>
              <p
                lang="ur"
                dir="rtl"
                className="mt-2 text-lg font-semibold text-[#a17a32]"
              >
                {course.urdu}
              </p>
              <p className="mt-4 min-h-24 text-sm leading-7 text-[#718076]">
                {course.description}
              </p>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  `Assalamu Alaikum! I am interested in the ${course.title} course at Ali Hassan Online Quran Academy.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#145c43] transition group-hover:gap-3"
              >
                Ask About Course <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* About Academy */}
      <section id="about" className="scroll-mt-24 bg-[#edf3eb]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#a17a32] sm:text-sm">
              About Our Academy
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Quality Quran Education, Wherever You Are
            </h2>
            <p className="mt-6 leading-8 text-[#5d7063]">
              Ali Hassan Online Quran Academy aims to make Quran education
              accessible to learners in Pakistan and around the world. Our
              focus is on helping students build their recitation skills,
              practice regularly and learn at a comfortable pace.
            </p>
            <p
              lang="ur"
              dir="rtl"
              className="mt-4 text-lg leading-9 text-[#5d7063]"
            >
              ہمارا مقصد پاکستان اور دنیا بھر کے طلبہ کے لیے قرآن کی تعلیم کو
              آسان بنانا ہے، تاکہ وہ اپنی سہولت کے مطابق سیکھ سکیں۔
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex rounded-full bg-[#145c43] px-6 py-3.5 font-bold text-white transition hover:bg-[#0f4834]"
            >
              Ask Us a Question <span className="ml-2" aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="rounded-[2rem] border border-[#d9e2d5] bg-white p-7 shadow-sm sm:p-10">
            <p className="text-sm font-extrabold uppercase tracking-widest text-[#a17a32]">
              Our Learning Approach
            </p>
            <h3 className="mt-3 text-2xl font-black">Learn Step by Step</h3>

            <ul className="mt-7 space-y-6">
              <li className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e9f3e9] font-extrabold text-[#145c43]">
                  1
                </span>
                <div>
                  <p className="font-extrabold">Start at Your Level</p>
                  <p className="mt-1 text-sm leading-6 text-[#718076]">
                    Choose a suitable starting point for your Quran learning.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f7f0df] font-extrabold text-[#98762f]">
                  2
                </span>
                <div>
                  <p className="font-extrabold">Build Strong Habits</p>
                  <p className="mt-1 text-sm leading-6 text-[#718076]">
                    Develop your reading through regular practice and revision.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e9f3e9] font-extrabold text-[#145c43]">
                  3
                </span>
                <div>
                  <p className="font-extrabold">Learn From Home</p>
                  <p className="mt-1 text-sm leading-6 text-[#718076]">
                    Discuss available online timings with the academy.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Teacher Section */}
      <section
        id="teacher"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-[2.5rem] border border-[#dfc783]" />
            <div className="relative overflow-hidden rounded-[2rem] bg-[#eaf0e6] p-3 shadow-xl">
              <Image
                src="/ali-hassan.jpg"
                alt="Ali Hassan, Quran teacher at Ali Hassan Online Quran Academy"
                width={600}
                height={750}
                className="h-[420px] w-full rounded-[1.5rem] object-cover sm:h-[500px]"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-lg backdrop-blur">
                <p className="font-extrabold">Ali Hassan</p>
                <p className="mt-1 text-sm text-[#6b796f]">
                  Quran Teacher · Online Academy
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#a17a32] sm:text-sm">
              Meet Your Teacher
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Learn With Ali Hassan
            </h2>

            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-[#e7d8b4] bg-[#fffaf0] px-5 py-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#145c43] text-xl text-[#f0d48a]">
                ✦
              </span>
              <div>
                <p className="text-2xl font-black text-[#145c43]">3+ Years</p>
                <p className="text-sm font-semibold text-[#78673e]">
                  Teaching Experience
                </p>
              </div>
            </div>

            <p className="mt-6 leading-8 text-[#6b796f]">
              Ali Hassan brings over three years of Quran teaching experience
              to the academy. The aim is to help learners improve their
              recitation, build confidence and develop a consistent Quran
              learning routine.
            </p>

            <p
              lang="ur"
              dir="rtl"
              className="mt-4 text-lg leading-9 text-[#6b796f]"
            >
              علی حسن کو قرآن کی تعلیم دینے کا تین سال سے زیادہ تجربہ ہے۔ ان
              کا مقصد طلبہ کو درست تلاوت سیکھنے اور باقاعدگی سے مشق کرنے میں
              رہنمائی فراہم کرنا ہے۔
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex rounded-full bg-[#145c43] px-7 py-4 font-bold text-white shadow-md transition hover:-translate-y-1 hover:bg-[#0f4834]"
            >
              Contact Ali Hassan <span className="ml-2" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#124d38] px-6 py-14 text-center text-white shadow-xl sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />

          <p className="relative text-xs font-extrabold uppercase tracking-[0.25em] text-[#efd48e] sm:text-sm">
            Take the First Step
          </p>
          <h2 className="relative mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Make the Holy Quran Part of Your Daily Life
          </h2>
          <p className="relative mx-auto mt-5 max-w-2xl leading-8 text-white/75">
            Contact our academy to ask about courses, class schedules and how
            to begin your learning journey.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="relative mt-8 inline-flex rounded-full bg-[#efd48e] px-8 py-4 font-extrabold text-[#173b2c] transition hover:-translate-y-1 hover:bg-white"
          >
            Enquire on WhatsApp <span className="ml-2" aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="scroll-mt-24 border-t border-[#e7e8dd] bg-white"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#a17a32]">
              Get in Touch
            </p>
            <h2 className="mt-3 text-3xl font-black">
              We Would Love to Hear From You
            </h2>
            <p className="mt-4 max-w-xl leading-8 text-[#718076]">
              Have a question about Quran classes or enrollment? Send us a
              WhatsApp message and tell us which course interests you.
            </p>
          </div>

          <div className="rounded-3xl border border-[#e6e8de] bg-[#faf9f5] p-6 sm:p-8">
            <p className="font-extrabold">Ali Hassan Online Quran Academy</p>
            <p className="mt-3 text-sm text-[#718076]">
              WhatsApp: +92 310 6669968
            </p>
            <p className="mt-2 text-sm text-[#718076]">
              Online classes for learners in Pakistan and worldwide
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-full bg-[#145c43] px-6 py-3 font-bold text-white transition hover:bg-[#0f4834]"
            >
              Chat With Us <span className="ml-2" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#102f24] px-5 py-8 text-center text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d8bb70]/50 text-xl text-[#e7c778]">
            ۞
          </div>
          <p className="mt-3 font-extrabold">
            Ali Hassan Online Quran Academy
          </p>
          <p className="mt-2 text-sm text-white/65">
            Learn with care. Recite with confidence. Grow with the Quran.
          </p>
          <p className="mt-5 text-xs text-white/50">
            © 2026 Ali Hassan Online Quran Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
