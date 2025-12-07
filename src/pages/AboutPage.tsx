import { Target, Eye, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-8">
          About <span className="text-blue-600">ClassCrew</span>
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            ClassCrew is a dedicated online study community built specifically for high school
            students in grades 10-12. We believe that learning is more effective when students
            collaborate, share knowledge, and support each other's academic journey.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our platform provides a safe, organized space where you can share notes, ask questions,
            get help with doubts, and connect with peers who share your academic goals. Whether
            you're preparing for exams, working on homework, or exploring new topics, ClassCrew is
            here to support your success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To empower high school students through collaborative learning, creating a supportive
              community where every student can thrive academically.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Eye className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To become the go-to platform where students learn together, making education more
              accessible, engaging, and effective through peer collaboration.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
              <Heart className="w-8 h-8 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600">
              Collaboration, respect, academic integrity, and mutual support. We believe in students
              helping students achieve their best potential.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Why We Built ClassCrew</h2>
          <p className="text-lg leading-relaxed mb-4">
            We understand the challenges of high school academics. Sometimes you need help with a
            tough problem at midnight. Sometimes you have great notes that could help others.
            Sometimes you just want to know you're not alone in your studies.
          </p>
          <p className="text-lg leading-relaxed">
            That's why we created ClassCrew - a place where students can connect, collaborate, and
            succeed together. Because when we help each other, we all do better.
          </p>
        </div>
      </div>
    </div>
  );
}
