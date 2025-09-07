"use client";
import React, { useState, useEffect } from "react";
import {
  Bell,
  Users,
  Clock,
  ArrowRight,
  Shield,
  Zap,
  MessageCircle,
} from "lucide-react";
import Head from "next/head";
import CommandWiki from "@/components/patriots/CommandWiki";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Smart Notifications",
      description: "Get alerts before game day to plan ahead",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Smart Updates",
      description: "Get updated automatically if there's a home game",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Driven",
      description: "Built by fans, for fans of the Patriots community",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Page Title */}
      <Head>
        <title>Patriots-When! - Never Get Caught in Game Day Traffic</title>
        <link rel="icon" href="/assets/american-football.png" />
      </Head>

      {/* Header with ICO */}
      <header className="flex items-center justify-center py-6 bg-slate-900/90 border-b border-blue-800/30">
        <img
          src="/assets/american-football.png"
          alt="American Football"
          className="w-10 h-10 mr-3"
        />
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
          Patriots-When
        </h1>
      </header>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div
          className={`transition-all duration-1500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Shield className="w-20 h-20 text-blue-400 animate-bounce" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-ping"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-white to-red-400 bg-clip-text text-transparent animate-pulse">
            Patriots-When!
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-blue-100 leading-relaxed">
            Never get caught in game day traffic again. Your Discord companion
            for
            <span className="text-blue-300 font-semibold">
              {" "}
              New England Patriots{" "}
            </span>
            home games at Gillette Stadium.
          </p>

          <CommandWiki />

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              Add to Discord
              <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="group border-2 border-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
              View Demo
              <Zap className="inline ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
          </div> */}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 animate-float">
          <MessageCircle className="w-12 h-12 text-blue-300 opacity-60" />
        </div>
        <div className="absolute bottom-32 right-20 animate-float delay-1000">
          <Bell className="w-10 h-10 text-red-300 opacity-60" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
            Game-Changing Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl border border-blue-800/30 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 ${
                  activeFeature === index ? "ring-2 ring-blue-400" : ""
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="text-blue-400 mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-800/50 to-blue-900/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-gradient-to-r from-blue-300 to-white bg-clip-text">
              Born from Game Day Chaos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="p-6 bg-slate-800/70 rounded-xl border border-blue-800/30">
                <h3 className="text-xl font-bold text-blue-300 mb-3">
                  The Problem
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  Living near Gillette Stadium means dealing with massive
                  traffic jams every time the Patriots play at home. Game days
                  turn simple errands into hours-long ordeals.
                </p>
              </div>

              <div className="p-6 bg-slate-800/70 rounded-xl border border-blue-800/30">
                <h3 className="text-xl font-bold text-blue-300 mb-3">
                  The Solution
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  Patriots-When gives you advance warning through Discord, so
                  you can plan ahead, avoid the chaos, and maybe even catch the
                  game instead of sitting in traffic!
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-blue-600/20 to-red-600/20 rounded-2xl flex items-center justify-center border border-blue-800/30">
                <div className="text-center">
                  <Shield className="w-24 h-24 text-blue-400 mx-auto mb-4 animate-pulse" />
                  <p className="text-lg font-semibold text-blue-200">
                    Your Game Day Guardian
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-gradient-to-r from-blue-300 via-white to-red-300 bg-clip-text">
            Ready to Beat the Traffic?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Patriots fans who never get caught off-guard by
            game day traffic again.
          </p>

          <div className="space-y-4">
            {/* <button className="group bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30">
              Get Started Now
              <ArrowRight className="inline ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button> */}

            <p className="text-sm text-blue-300">
              No credit card required • Setup in under 2 minutes
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-sm py-8 px-6 text-center border-t border-blue-800/30">
        <div className="flex justify-center items-center space-x-2 mb-4">
          <Shield className="w-6 h-6 text-blue-400" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            Patriots-When
          </span>
        </div>
        <p className="text-blue-200">
          © 2025 • Built with ❤️ for Patriots Nation
        </p>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
