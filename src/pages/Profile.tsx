import { Settings, MapPin, Calendar, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { ProfileStats } from '../components/profile/ProfileStats';
import { UpcomingTrips } from '../components/profile/UpcomingTrips';
import { RecentReviews } from '../components/profile/RecentReviews';

export function Profile() {
  return (
    <div className="min-h-screen bg-background text-white pt-20 pb-24">
      <div className="container mx-auto px-4 space-y-8">
        <ProfileHeader />
        <ProfileStats />
        <UpcomingTrips />
        <RecentReviews />
      </div>
    </div>
  );
}