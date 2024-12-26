export default function About() {
    return (
        <main className="container mx-auto px-4 pt-12">
            <section className="bg-[#1C1E20] rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12">
                <div className="md:w-4/5 lg:w-3/4">
                    <h6
                        className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15"
                        data-backdrop-text="About Me"
                    >
                        About Me
                    </h6>
                    <h2 className="text-3xl lg:text-4xl font-poppins font-semibold mb-3 lg:mb-4 dark:text-white">
                        My Latest Works
                    </h2>
                    <p className="text-pColor dark:text-white/70">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore
                    </p>
                </div>

                <div className="prose dark:prose-invert">
                    <p>
                        Hello! I&apos;m a passionate web developer with
                        experience in modern frontend technologies. I love
                        creating responsive and user-friendly web applications.
                    </p>
                    <p>My skills include:</p>
                    <ul>
                        <li>React and Next.js</li>
                        <li>TypeScript</li>
                        <li>Tailwind CSS</li>
                        <li>Node.js</li>
                    </ul>
                    <p>
                        When I&apos;m not coding, you can find me exploring new
                        technologies, contributing to open-source projects, or
                        enjoying a good book.
                    </p>
                </div>
            </section>
        </main>
    );
}
