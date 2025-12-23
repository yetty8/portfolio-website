export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Get In Touch</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!
          </p>
          <a
            href="mailto:yetbarek.tech@gmail.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}