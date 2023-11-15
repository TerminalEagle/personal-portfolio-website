import Image from "next/image";

export default function Home() {
  return (
    <>
      <section>
        <div>
          <h1>Hey, I’m Alex Spencer and I love building beautiful websites</h1>
          <button>About me</button>
        </div>
        <div>
          <Image width="1110" height="100" src="/homepage/desktop/image-homepage-hero@2x.jpg" alt="manage landing page displayed on a monitor with a black frame" />
        </div>
      </section>
      <section>
        <div>
          <Image src={"/homepage/desktop/image-homepage-profile@2x.jpg"} width={500} height={600} alt="image of alex spencer" />
        </div>
        <div>
          <h2>About Me</h2>
          <p>
            I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean
            JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely
            and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love
            you to check out my work.
          </p>
          <button>Go to portfolio</button>
        </div>
      </section>
    </>
  );
}
