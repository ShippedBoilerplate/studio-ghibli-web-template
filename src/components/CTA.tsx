import React from "react";

const CTA = () => {
  return (
    <section className="relative px-4 z-20  py-20 font-crimson text-slate-700">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center bg-amber-100 bg-opacity-70 rounded-lg p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Yourself?
          </h2>
          <p className="text-lg mb-8">
            Join thousands of users who are already creating stunning hero
            images with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
              Get Started Now
            </button>
            <button className="border-2 border-slate-500 px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
