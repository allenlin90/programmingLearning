import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/EventList';

function HomePage() {
  const featruedEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featruedEvents} />
    </div>
  );
}

export default HomePage;
