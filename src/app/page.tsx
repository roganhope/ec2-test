"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function LandingPage() {
  // Array of cheeky messages with cute emojis
  const messages = [
    "🤔 Gotcha! This button doesn't do anything. Curious, aren't you?",
    "😏 Why are you pressing this button still?",
    "🙄 Seriously, it still does nothing. Are you testing me?",
    "🤨 Alright, last time: still nothing! You're persistent!",
  ];

  // Track the number of clicks
  const [clickIndex, setClickIndex] = useState(0);
  const [isButtonLocked, setIsButtonLocked] = useState(false);

  const handleClick = () => {
    // Dismiss all existing toasts before showing new one
    toast.dismiss();

    if (isButtonLocked) {
      toast("❌ Banned from using the button", {
        style: {
          minWidth: "300px",
          background: "#1f2937",
          color: "#ffffff",
          borderRadius: "12px",
          padding: "16px",
          fontSize: "16px",
        },
      });
      return;
    }

    toast(messages[clickIndex % messages.length], {
      style: {
        minWidth: "300px",
        background: "#1f2937",
        color: "#ffffff",
        borderRadius: "12px",
        padding: "16px",
        fontSize: "16px",
      },
    });

    const nextIndex = clickIndex + 1;
    setClickIndex(nextIndex);

    // Lock the button after all messages have been shown
    if (nextIndex >= messages.length) {
      setIsButtonLocked(true);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* React Hot Toast container with dark theme */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            minWidth: "300px",
            background: "#1f2937",
            color: "#ffffff",
            borderRadius: "12px",
            padding: "16px",
            fontSize: "16px",
          },
        }}
      />

      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('/assets/background.png')`,
        }}
      ></div>

      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        }}
      ></div> */}

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            <span className="inline-block animate-fade-in-up">Welcome</span>
            <br />
            <span className="inline-block animate-fade-in-up delay-200 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              to hopee.me
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-light tracking-wide animate-fade-in-up delay-400">
            Cool things coming soon
          </p>

          {/* Animated Dots */}
          <div className="flex justify-center space-x-2 mt-8 animate-fade-in-up delay-600">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-200"></div>
          </div>

          {/* Call-to-Action Button */}
          <div className="mt-12 animate-fade-in-up delay-800">
            <button
              onClick={handleClick}
              className={`px-8 py-4 font-semibold rounded-full text-lg transform transition-all duration-300 shadow-lg hover:shadow-xl ${
                isButtonLocked
                  ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:scale-105"
              }`}
              disabled={isButtonLocked}
            >
              {isButtonLocked ? "❌ Banned" : "Stay Tuned"}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
        .delay-800 {
          animation-delay: 0.8s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
