export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose dark:prose-invert">
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <h2>1. Use of the Website</h2>
        <p>
          By accessing this website, you agree to be bound by these Terms of Service and all applicable laws and regulations.
        </p>

        <h2>2. Intellectual Property</h2>
        <p>
          The content, layout, design, and graphics on this website are owned by or licensed to me and are protected by copyright laws.
        </p>

        <h2>3. Contact Form</h2>
        <p>
          By using the contact form, you agree to provide accurate and complete information. I reserve the right to block any user who provides false information or uses the form for spam.
        </p>

        <h2>4. Limitation of Liability</h2>
        <p>
          I am not liable for any damages arising from the use of this website or the information provided herein.
        </p>

        <h2>5. Changes to Terms</h2>
        <p>
          I may update these terms at any time without notice. Your continued use of the website constitutes acceptance of those changes.
        </p>

        <h2>Contact Me</h2>
        <p>
          If you have any questions about these Terms, please contact me at{" "}
          <a href="mailto:yetbarek.tech@gmail.com" className="text-blue-500 hover:underline">
            yetbarek.tech@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}