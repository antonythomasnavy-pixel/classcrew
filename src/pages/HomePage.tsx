import { BookOpen, Users, MessageCircle, Award, ArrowRight } from 'lucide-react';

type HomePageProps = {
  onNavigate: (page: string) => void;
};

export default function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: 'Share Notes',
      description: 'Upload and share your study notes with classmates across all subjects.',
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-600" />,
      title: 'Ask Doubts',
      description: 'Stuck on a problem? Ask your question and get help from fellow students.',
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-600" />,
      title: 'Collaborate',
      description: 'Work together with peers to solve problems and learn together.',
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Organized Learning',
      description: 'Filter by subject and find exactly what you need, when you need it.',
    },
  ];

  const reasons = [
    {
      title: 'Safe & Supportive',
      description: 'A moderated community designed specifically for high school students.',
    },
    {
      title: 'Subject-Organized',
      description: 'Easily find content organized by subjects like Math, Science, English, and more.',
    },
    {
      title: 'Peer Learning',
      description: 'Learn from each other - students helping students achieve their best.',
    },
    {
      title: 'Always Available',
      description: 'Study anytime, anywhere. Your community is always here when you need help.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-blue-600">ClassCrew</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Your collaborative study community for grades 10-12. Share notes, solve doubts, and
            succeed together!
          </p>
          <button
            onClick={() => onNavigate('login')}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
          >
            <span>Join the Community</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            What You Can Do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Why ClassCrew?
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Built by students, for students. Here's what makes us special.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-600"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-lg">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Level Up Your Studies?
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Join thousands of students already learning together on ClassCrew.
          </p>
          <button
            onClick={() => onNavigate('login')}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            <span>Get Started Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
