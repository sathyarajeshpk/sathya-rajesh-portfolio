import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="wrap pb-10 pt-10">
      <div className="mb-6 flex flex-wrap items-start gap-6">
        <Image
          src="/images/hero-photo.png"
          alt="Sathya Rajesh PK"
          width={128}
          height={160}
          className="border rule object-cover"
          style={{ width: 128, height: 160 }}
          priority
        />
        <div className="min-w-[16rem] flex-1">
          <h1 className="mb-1">Sathya Rajesh PK</h1>
          <p className="muted mb-0">Data engineer and consultant. Chennai, India.</p>
        </div>
      </div>

      <p>
        I build data platforms on Azure. Mostly pipelines, Microsoft Fabric setups, and Power BI
        reporting. I have been doing this for twelve years, six of them leading a team at
        TransUnion.
      </p>

      <p>
        I am taking on new projects at the moment. If you have something you want to talk through,{" "}
        <a href="mailto:sathyarajeshpk@gmail.com">email me</a> or use the{" "}
        <a href="#contact">form at the bottom</a>. I usually reply the same day.
      </p>

      <p className="muted text-[0.95rem]">
        <a href="/resume/SathyaRajesh_Resume.pdf" download>
          Download my CV
        </a>{" "}
        (PDF) &middot;{" "}
        <a href="https://www.linkedin.com/in/sathyarajeshpk/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>{" "}
        &middot;{" "}
        <a href="https://github.com/sathyarajeshpk" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
    </section>
  );
}
