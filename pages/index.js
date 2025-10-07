
import { motion } from "framer-motion";
import Counter from "@/components/Counter";
import AnimatedEggs from "@/components/AnimatedEggs";
import FarmerSilhouette from "@/components/FarmerSilhouette";

export default function Home() {
  return (
    <main className="relative bg-bg bg-rustic-texture min-h-screen">
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="container h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[color:var(--gold)]" />
            <span className="text-cream/90 font-medium">Barsa Prod 2012</span>
          </div>
          <a href="#rfq" className="btn btn-primary">Cere ofertă</a>
        </div>
      </header>
      <section className="relative overflow-hidden">
        <div className="container py-24 md:py-32 relative">
          <div className="max-w-3xl">
            <div className="kicker">Produs Montan · IFS 5+ ani</div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-cream">
              Din inima Brașovului, <span className="text-[color:var(--gold)]"><Counter to={310000} duration={1800} /></span> ouă pe zi
            </h1>
            <p className="mt-4 text-cream/80 text-lg max-w-xl">De la fermă la raft în maximum <strong>72 de ore</strong>. Calitate certificată, trasabilitate completă.</p>
            <div className="mt-6 flex gap-3">
              <a href="#produse" className="btn btn-primary">Descoperă produsele noastre</a>
              <a href="#rfq" className="btn btn-outline">Cere ofertă</a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-lg">
              <div className="card p-5 text-center"><div className="text-2xl font-semibold text-[color:var(--gold)]"><Counter to={310000} duration={1800} /></div><div className="text-cream/70 text-sm">ouă/zi</div></div>
              <div className="card p-5 text-center"><div className="text-2xl font-semibold text-[color:var(--gold)]"><Counter to={50} duration={1200} /></div><div className="text-cream/70 text-sm">angajați</div></div>
              <div className="card p-5 text-center"><div className="text-2xl font-semibold text-[color:var(--gold)]"><Counter to={5} duration={1000} /></div><div className="text-cream/70 text-sm">ani IFS</div></div>
            </div>
          </div>
          <div className="hidden md:block absolute right-6 top-20 space-y-4">
            <motion.img src="/images/hero-panorama.jpg" alt="Ferma – panoramic" className="rounded-3xl border border-white/10 w-[360px] h-[220px] object-cover" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} />
            <motion.img src="/images/farm-detail.jpg" alt="Ferma – detaliu hale" className="rounded-3xl border border-white/10 w-[360px] h-[220px] object-cover" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0, delay: .1 }} transition={{ duration: .6 }} />
          </div>
          <AnimatedEggs />
          <FarmerSilhouette />
        </div>
      </section>
      <section className="py-20 bg-white text-[#0E2F1E]">
        <div className="container">
          <div className="kicker">Ferma în imagini</div>
          <h2 className="text-3xl md:text-4xl font-semibold text-center">De la hală la peisaj – ordine, curățenie, natură</h2>
          <p className="text-center text-[#335545] max-w-3xl mx-auto mt-4">Amplasare la poalele munților, cu infrastructură modernă: hale de găini ouătoare, silozuri, flux de furaje și biosecuritate.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <motion.img src="/images/hero-panorama.jpg" alt="Ferma – panoramic" className="rounded-3xl shadow-lg object-cover w-full h-[420px]" whileHover={{ scale: 1.02 }} />
            <motion.img src="/images/farm-detail.jpg" alt="Ferma – detaliu hale" className="rounded-3xl shadow-lg object-cover w-full h-[420px]" whileHover={{ scale: 1.02 }} />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="kicker">Produse & Logistică</div>
          <h2 className="text-3xl md:text-4xl font-semibold text-center">Ouă proaspete pentru toate nevoile – S, M, L, XL</h2>
          <p className="text-center text-cream/80 max-w-3xl mx-auto mt-4">Certificate Produs Montan și conforme IFS. Ambalaje pentru retail modern, tradițional și lanțuri de magazine. Oul produs azi – la client în maximum 72h.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {['Caserole retail modern', 'Cofrag tradițional', 'Cutii volum pentru distribuție'].map((t, i) => (
              <motion.div key={t} className="card p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: i * 0.1 }}>{t}</motion.div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <motion.img src="/images/cofrag-20-oua.png" alt="Ferma – panoramic" className="rounded-3xl shadow-lg object-cover w-full h-[420px]" whileHover={{ scale: 1.02 }} />
            <motion.img src="/images/cofrag-30-oua.png" alt="Ferma – detaliu hale" className="rounded-3xl shadow-lg object-cover w-full h-[420px]" whileHover={{ scale: 1.02 }} />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-[#0E2F1E]">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="kicker">Calitate & Certificări</div>
            <h2 className="text-3xl md:text-4xl font-semibold">Control complet și trasabilitate</h2>
            <ul className="mt-6 space-y-3 text-[#284B3A]">
              <li>• Toate ouăle noastre sunt certificate <strong>Produs Montan</strong>.</li>
              <li>• Sistemul <strong>IFS</strong> implementat și auditat de peste 5 ani.</li>
              <li>• Fiecare ou este marcat cu codul fermei și ziua ouatului.</li>
              <li>• Protocoale stricte de biosecuritate și analize periodice.</li>
            </ul>
          </div>
          <motion.img src="/images/farm-detail.jpg" alt="Halele fermei – vedere aeriană" className="rounded-3xl shadow-xl object-cover w-full h-[420px]" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} />
        </div>
      </section>
      <section id="rfq" className="py-20">
        <div className="container">
          <div className="kicker">Retaileri & Parteneriate</div>
          <h2 className="text-3xl md:text-4xl font-semibold text-center">Acoperire națională și livrare predictibilă</h2>
          <p className="text-center text-cream/80 max-w-3xl mx-auto mt-4">Volume constante, ambalaje flexibile, livrare rapidă și trasabilitate completă.</p>
          <form action="https://formsubmit.co/tudorroberto@gmail.com" method="POST" className="card p-6 mt-10 grid md:grid-cols-2 gap-4">

            <input type="hidden" name="_subject" value="Cerere ofertă nouă - Barsa Prod" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://localhost:3000/#rfq?success=true" />
            <input type="hidden" name="_autoresponse" value="Mulțumim pentru mesaj! Vă vom contacta în curând." />

            <input className="bg-white/5 border border-white/10 rounded-xl px-3 py-3" name="company" placeholder="Nume companie" required />
            <input className="bg-white/5 border border-white/10 rounded-xl px-3 py-3" name="contact" placeholder="Persoană de contact" required />
            <input type="email" className="bg-white/5 border border-white/10 rounded-xl px-3 py-3" name="email" placeholder="Email" required />
            <input className="bg-white/5 border border-white/10 rounded-xl px-3 py-3" name="phone" placeholder="Telefon" />
            <textarea className="md:col-span-2 bg-white/5 border border-white/10 rounded-xl px-3 py-3 min-h-[120px]" name="message" placeholder="Volum dorit, tip ambalaj, frecvență livrare, detalii" />
            <div className="md:col-span-2 flex items-center justify-between">
              <span className="text-xs text-cream/60">Prin trimitere, ești de acord cu prelucrarea datelor.</span>
              <button className="btn btn-primary" type="submit">Trimite cererea</button>
            </div>
          </form>
        </div>
      </section>
      <section className="py-16 bg-white text-[#0E2F1E]">
        <div className="container text-center">
          <div className="kicker">Contact</div>
          <h2 className="text-3xl md:text-4xl font-semibold">Hai să discutăm</h2>
          <p className="text-[#335545] mt-2">📍 CODLEA DJ112A · 📧 cooperativabarsaprod@gmail.com · 🕑 Luni–Vineri 08:00–17:00</p>
          <div className="mt-6 rounded-2xl overflow-hidden border border-black/10">
            <iframe title="Harta fermei" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.5645710644844!2d25.451667370331798!3d45.66017742710799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35100545a25ff%3A0xdf31f4aba48cd7a8!2sB%C4%83rsa%20Prod%20ferma%20gaini%20ou%C4%83toare!5e1!3m2!1sro!2sro!4v1758712829373!5m2!1sro!2sro" className="w-full h-[360px]" loading="lazy" />
          </div>
        </div>
      </section>
      <footer className="border-t border-white/10">
        <div className="container py-8 text-center text-cream/60">© {new Date().getFullYear()} Barsa Prod 2012 – Cooperativa Agricolă</div>
      </footer>
    </main>
  );
}
