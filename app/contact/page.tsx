import { Socials } from "@/components/Reusable/Socials";
import styles from "./Contact.module.css";
import Button from "@/components/Reusable/Button";

export default function Contact() {
  return (
    <>
      <section className={styles.contact}>
        <div className={styles["get-in-touch"]}>
          <h1>Get in Touch</h1>
          <div>
            <p>
              I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference
              would be to find a position in a company in London. But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive
              person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch
              using the form.
            </p>
            <Socials />
          </div>
        </div>
        <div className={styles.container}>
          <h2>Contact Me</h2>
          <form className={styles.form}>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" cols={30} rows={10} />
            </div>
            <Button type="primary">Send message</Button>
          </form>
        </div>
      </section>
    </>
  );
}
