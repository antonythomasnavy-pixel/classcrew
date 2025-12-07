import { Mail, MessageSquare, HelpCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">
          Get in <span className="text-blue-600">Touch</span>
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Have questions, feedback, or need help? We're here for you!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">For general inquiries and support</p>
            <a
              href="mailto:support@classcrew.com"
              className="text-blue-600 font-medium hover:text-blue-700"
            >
              support@classcrew.com
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <MessageSquare className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Feedback</h3>
            <p className="text-gray-600 mb-4">Share your ideas and suggestions</p>
            <a
              href="mailto:feedback@classcrew.com"
              className="text-green-600 font-medium hover:text-green-700"
            >
              feedback@classcrew.com
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
              <HelpCircle className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Report Issue</h3>
            <p className="text-gray-600 mb-4">Report technical problems or content</p>
            <a
              href="mailto:report@classcrew.com"
              className="text-yellow-600 font-medium hover:text-yellow-700"
            >
              report@classcrew.com
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Who can join ClassCrew?
              </h3>
              <p className="text-gray-600">
                ClassCrew is designed for students in grades 10-12. We welcome all high school
                students who want to collaborate and learn together.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Is ClassCrew free?</h3>
              <p className="text-gray-600">
                Yes! ClassCrew is completely free to use. We believe education and peer support
                should be accessible to everyone.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How do I report abuse?</h3>
              <p className="text-gray-600">
                If you see inappropriate content or behavior, please email us at
                report@classcrew.com. Our moderators will review and take action quickly to keep
                our community safe.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Can I delete my posts?
              </h3>
              <p className="text-gray-600">
                Yes, you can edit or delete your own posts and replies at any time. Simply click on
                your post and use the edit or delete options.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">We're Here to Help!</h2>
          <p className="text-lg mb-6">
            Your success is our priority. Don't hesitate to reach out with any questions or
            concerns.
          </p>
          <p className="text-sm opacity-90">
            Typical response time: Within 24 hours on weekdays
          </p>
        </div>
      </div>
    </div>
  );
}
