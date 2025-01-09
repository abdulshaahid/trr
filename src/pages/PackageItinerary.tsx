import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';
import PackageHeader from '../components/package/PackageHeader';
import PackageFeatures from '../components/features/PackageFeatures';
import ImageCarousel from '../components/ImageCarousel';
import Timeline from '../components/timeline/Timeline';
import ReviewCard from '../components/Reviews/ReviewCard';
import FAQItem from '../components/FAQ/FAQItem';
import ProviderCard from '../components/Provider/ProviderCard';
import CustomizePackage from '../components/Customization/CustomizePackage';

const PackageItinerary = () => {
    const { pkgId } = useParams<{ pkgId: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedDay, setSelectedDay] = useState(1);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const images = [
    'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1533050487297-09b450131914?auto=format&fit=crop&q=80',
  ];

  const reviews = [
    {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      rating: 5,
      review: 'Amazing experience! The resort was beautiful and the activities were well planned.',
      date: 'March 2024'
    },
    {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      rating: 4,
      review: 'Great trip overall. The paragliding was the highlight of our journey.',
      date: 'February 2024'
    },
    {
      name: 'Emma Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      rating: 5,
      review: 'Perfect organization and amazing local guides. Highly recommended!',
      date: 'January 2024'
    }
  ];

  const faqs = [
    {
      question: 'What is included in the package?',
      answer: 'The package includes luxury accommodation, all meals, AC transportation, guided tours, adventure activities, and airport transfers. Additional activities can be added for an extra charge.'
    },
    {
      question: 'What is the cancellation policy?',
      answer: 'Free cancellation up to 7 days before the trip. 50% refund for cancellations between 3-7 days. No refund for cancellations within 3 days.'
    },
    {
      question: 'Is travel insurance included?',
      answer: 'Basic travel insurance is included in the package. Additional coverage can be purchased during booking.'
    },
    {
      question: 'What about altitude sickness?',
      answer: 'Our guides are trained to handle altitude-related issues. We also include acclimatization time in the itinerary.'
    }
  ];

  return (
    <div className="min-h-screen mb-12 bg-black">
      <ImageCarousel 
        images={images}
        currentIndex={currentImageIndex}
        onIndexChange={setCurrentImageIndex}
      />

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-8">
        <PackageHeader 
          title="Explore Manali - 6 Days/5 Nights"
          provider="Wanderlust Travels"
          description="Experience the magic of Manali with our carefully curated 6-day adventure package. From snow-capped peaks to vibrant local culture, immerse yourself in the beauty of the Himalayas."
          tags={['Mountain Views', 'Adventure', 'Cultural', 'Luxury']}
          price={12000}
        />

        <PackageFeatures />

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-white">Detailed Itinerary</h2>
          <Timeline selectedDay={selectedDay} onDaySelect={setSelectedDay} />
        </div>

        <CustomizePackage />

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-white">Traveler Reviews</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </div>

        <ProviderCard
          name="Wanderlust Travels"
          logo="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
          phone="+91 98765 43210"
          email="contact@wanderlust.com"
          tripsCount={500}
          experience={10}
          rating={4.8}
        />

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
          <div className="bg-[#181414] rounded-3xl p-6">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                {...faq}
                isOpen={openFAQ === index}
                onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>

       <button
  onClick={() => window.open('mailto:support@wanderlust.com')}
  className="w-full bg-[#181414] text-white font-semibold py-6 rounded-full flex items-center justify-center space-x-2"
>
  <HelpCircle className="w-5 h-5 " />
  <span>Need help? Contact us</span>
</button>


        <div className=" sticky bottom-20">
          <button
            onClick={() => navigate('/booking')}
            className="w-full bg-[#37e5a5] text-black font-bold py-4 rounded-full hover:bg-[#2bc88d] transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageItinerary;