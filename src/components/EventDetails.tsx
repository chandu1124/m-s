import React, { useEffect } from 'react';
import { Calendar, Clock, ExternalLink } from 'lucide-react';
import { gtagEvent, getDeviceInfo } from '../lib/gtag';

const EventDetails = () => {
  // @ts-ignore: gtag is injected by Google Analytics
  const handleDirectionsClick = () => {
    const device = getDeviceInfo();
    gtagEvent({
      action: 'click',
      category: 'Button',
      label: 'Get Directions',
      value: device.deviceLabel,
      device_type: device.deviceType,
      device_vendor: device.deviceVendor,
      device_model: device.deviceModel,
      os: device.os,
      browser: device.browser,
      page_path: window.location.pathname,
      timestamp: Date.now(),
    });
    window.open('https://www.google.com/maps/search/KMM+Royal+Convention+Center', '_blank');
  };

  // Track device info on page load
  useEffect(() => {
    const device = getDeviceInfo();
    gtagEvent({
      action: 'page_view',
      category: 'Page',
      label: window.location.pathname,
      value: device.deviceLabel,
      device_type: device.deviceType,
      device_vendor: device.deviceVendor,
      device_model: device.deviceModel,
      os: device.os,
      browser: device.browser,
      page_path: window.location.pathname,
      timestamp: Date.now(),
    });
  }, []);

  return (
    <section 
      id="details" 
      className="py-20 px-4 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 min-h-screen relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-rose-200/30 to-pink-300/30 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-red-200/30 to-rose-300/30 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 transition-all duration-1000 opacity-100 transform translate-y-0 animate-fade-in-up">
          <h2 className="font-serif text-6xl md:text-7xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-8 hover:scale-105 transition-transform duration-300 whitespace-pre-line break-words leading-tight md:leading-tight">
            Journey to Forever
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-rose-800 font-medium">
            Join us for a day filled with love, laughter, and lifelong memories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Wedding Ceremony */}
          <div
            className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 hover:scale-105 border border-rose-100 opacity-100 transform translate-x-0 animate-fade-in-left"
          >
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-rose-100 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="text-rose-700" size={36} />
              </div>
              <h3 className="font-serif text-3xl font-bold bg-gradient-to-r from-rose-700 to-pink-700 bg-clip-text text-transparent mb-4">
                Tying the Knot
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto"></div>
            </div>

            <div className="space-y-6 text-center">
              <div className="flex items-center justify-center group-hover:translate-x-2 transition-transform duration-300">
                <Calendar className="text-rose-600 mr-2" size={24} />
                <span className="text-gray-800 font-medium text-lg">4th Monday, August 2024</span>
              </div>
              <div className="flex items-center justify-center group-hover:translate-x-2 transition-transform duration-300">
                <Clock className="text-rose-600 mr-2" size={24} />
                <span className="text-gray-800 font-medium text-lg">9:40 AM to 10:30 AM</span>
              </div>
            </div>
          </div>

          {/* Reception */}
          <div
            className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 hover:scale-105 border border-red-100 opacity-100 transform translate-x-0 animate-fade-in-right"
          >
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="text-red-700" size={36} />
              </div>
              <h3 className="font-serif text-3xl font-bold bg-gradient-to-r from-red-700 to-rose-700 bg-clip-text text-transparent mb-4">
                Evening of Elegance
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-rose-500 mx-auto"></div>
            </div>

            <div className="space-y-6 text-center">
              <div className="flex items-center justify-center group-hover:translate-x-2 transition-transform duration-300">
                <Calendar className="text-red-600 mr-2" size={24} />
                <span className="text-gray-800 font-medium text-lg">3rd Sunday, August 2024</span>
              </div>
              <div className="flex items-center justify-center group-hover:translate-x-2 transition-transform duration-300">
                <Clock className="text-red-600 mr-2" size={24} />
                <span className="text-gray-800 font-medium text-lg">6:30 PM onwards</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Venue Location */}
        <div
          className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-rose-200 transition-all duration-1000 hover:shadow-3xl opacity-100 animate-fade-in-up
          relative overflow-hidden max-w-5xl mx-auto flex items-center justify-center min-h-[400px]"
        >
          {/* Venue background image */}
          <img 
            src="/kmm.jpeg" 
            alt="KMM Royal Convention Center"
            className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-3xl z-0"
            style={{filter: 'blur(2px)'}}
          />
          <div className="relative z-10 text-center mb-10 pb-4 flex flex-col items-center justify-center w-full">
            <h3 className="font-serif text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-700 via-pink-700 to-red-700 bg-clip-text text-transparent mb-8 hover:scale-105 transition-transform duration-300 break-words whitespace-pre-line w-full max-w-full overflow-visible leading-snug min-h-[4.5rem] md:min-h-[6rem] flex items-center justify-center animate-fade-in-center">The Setting of Our Story
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-red-500 mx-auto mb-8"></div>
            <div className="max-w-5xl mx-auto space-y-6 text-gray-700 leading-relaxed animate-fade-in-center">
              <p className="text-xl font-medium text-rose-800">
                "A place where culture and grace come together to write love’s most beautiful chapter"
              </p>
              <p className="text-lg text-gray-700 md:text-xl">
                Experience the perfect blend of tradition and luxury at our chosen venue, where every detail reflects the beauty of our union
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button 
                onClick={handleDirectionsClick}
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:from-rose-700 hover:to-pink-700"
              >
                <ExternalLink className="mr-3 group-hover:animate-bounce" size={20} />
                <span className="text-lg">Get Directions</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
