import React, { useState } from 'react';
import { Plane, Mail, Lock, User } from 'lucide-react';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-black bg-opacity-90 px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Travel Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form Container */}
      <div className="relative z-10 w-full max-w-md sm:max-w-lg">
        <div className="backdrop-blur-xl bg-black/30 p-6 sm:p-8 rounded-2xl shadow-2xl border border-cyan-500/20">
          {/* Icon */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="bg-cyan-500/20 p-3 rounded-full">
              <Plane className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4 sm:mb-6">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>

          {/* Form */}
          <form className="space-y-3 sm:space-y-4">
            {/* Full Name Field (Only for Sign Up) */}
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-primary h-5 w-5" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-10 pr-4 py-3 bg-black/30 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 text-white placeholder-cyan-200/50 backdrop-blur-sm text-sm sm:text-base"
                />
              </div>
            )}

            {/* Email Field */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-primary h-5 w-5" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 bg-black/30 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 text-white placeholder-cyan-200/50 backdrop-blur-sm text-sm sm:text-base"
              />
            </div>
  

            {/* Password Field */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-primary h-5 w-5" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 bg-black/30 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 text-white placeholder-cyan-200/50 backdrop-blur-sm text-sm sm:text-base"
              />
            </div>

            {/* Confirm Password Field (Only for Sign Up) */}
            {!isLogin && (
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-primary h-5 w-5" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full pl-10 pr-4 py-3 bg-black/30 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 text-white placeholder-cyan-200/50 backdrop-blur-sm text-sm sm:text-base"
                />
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-green-600 to-cyan-600 text-white rounded-lg font-semibold text-sm sm:text-base hover:from-cyan-500 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-cyan-500/30"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Switch Between Sign In and Sign Up */}
          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-cyan-200 text-sm sm:text-base">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary hover:text-cyan-300 font-semibold"
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
