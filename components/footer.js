import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-neutral-900">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-white text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Statically Generated with Next.js.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://www.datocms.com/docs/next-js"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-500 transition-colors ease-in-out mb-6 lg:mb-0"
            >
              Read Documentation
            </a>
            <a
              href="https://github.com/datocms/nextjs-demo"
              className="mx-3 font-bold text-white transition-all duration-500 ease-in-out hover:underline hover:text-amber-500"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
