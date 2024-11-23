import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          Empower Your Fitness Journey
        </h1>
        <p className="text-lg leading-relaxed mb-8">
          Join millions of Indians on their journey to a healthier and happier life with AarogyaAi. Discover personalized workout plans, daily challenges, and a vibrant community, all designed to make fitness an integral part of India's lifestyle. Together, let's build a fitter and stronger nation.
        </p>
        <a
          href="#get-started"
          className="inline-block px-8 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Workout Plan Card */}
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/600x350"
            alt="Workout Plan"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Workout Plan</h3>
            <p className="text-sm text-gray-400">
              Tailored fitness and diet plans for all individuals, including diabetic and hypertensive patients.
            </p>
          </div>
        </div>

        {/* Motivation Card */}
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/600x350"
            alt="Motivation"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Motivation</h3>
            <p className="text-sm text-gray-400">
              Stay inspired with uplifting content, success stories, and a community cheering for your success.
            </p>
          </div>
        </div>

        {/* Challenges Card */}
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/600x350"
            alt="Challenges"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Challenges</h3>
            <p className="text-sm text-gray-400">
              Take on daily and weekly challenges to push your limits and achieve your fitness goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;