export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose dark:prose-invert">
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <h2>Information Collection and Use</h2>
        <p>
          I collect the following information when you use the contact form:
        </p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Message content</li>
        </ul>

        <h2>How I Use Your Information</h2>
        <p>I use the information you provide to:</p>
        <ul>
          <li>Respond to your inquiries</li>
          <li>Communicate with you</li>
          <li>Improve my services</li>
        </ul>

        <h2>Data Storage</h2>
        <p>
          Your information is stored securely and will not be shared with third parties except as required by law.
        </p>

        <h2>Contact Me</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact me at{" "}
          <a href="mailto:yetbarek.tech@gmail.com" className="text-blue-500 hover:underline">
            yetbarek.tech@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}