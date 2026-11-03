export const transportQuote = (service: string) => `https://wa.me/6281999966044?text=${encodeURIComponent(`Hello Bu Ayu, I would like to ask about ${service}. Date and pickup time: ... Pickup location: ... Destination and stops: ... Return needed: ... Adults and children (ages): ... Luggage: ... Driver or guide request: ... Please share availability, the total quote, inclusions, and booking terms.`)}`;

export const transportPages = {
  hub: {
    path: '/transportasi/',
    title: 'Lovina & Singaraja Transport | Utami Mesari Tours',
    heading: 'Lovina & Singaraja transport.',
    kicker: 'North Bali · On the road with Bu Ayu',
    description: 'Arrange Lovina and Singaraja transport with Bu Ayu. Explore private cars, Hiace and Elf group transport, and request a quote for your route.',
    intro: 'A car for your family, or more room for everyone. Arrange private and group transport in Lovina and Singaraja with one local contact.',
    image: '/images/family-transport-pickup.webp',
    imageAlt: 'Family transport vehicle shown in the Utami Mesari Tours gallery',
    label: 'Transport services',
    answer: 'Utami Mesari Tours helps arrange private cars and Hiace or Elf group transport. Service areas include Lovina, Singaraja, Negara, and Denpasar. Tell Bu Ayu your pickup point, destination, travel date, and passenger count to check availability and receive a quote.',
    sectionTitle: 'Choose your ride.',
    sectionIntro: 'Start with the people travelling and the kind of journey you need. The vehicle, route, and price are agreed for your booking.',
    cards: [
      { title: 'Private & family cars', label: 'For your own travel plans', text: 'Ask about Terios, Avanza, Xpander, or Xenia for your journey. Share your passenger count and luggage so Ayu can check a suitable vehicle.', href: '/transportasi/sewa-mobil-singaraja/', anchor: 'Explore private car transport', image: '/images/family-transport.webp' },
      { title: 'Hiace & Elf for groups', label: 'When everyone is coming along', text: 'Ask about Hiace for up to 15 passengers plus a driver, or Elf for up to 19 plus a driver. Confirm the assigned vehicle and space for luggage before booking.', href: '/transportasi/rombongan/', anchor: 'Compare group transport', image: '/images/group-transport.webp' },
    ],
    sections: [
      { id: 'service-areas', kicker: 'Your pickup. Your destination.', title: 'Where are you heading?', paragraphs: ['Lovina and Singaraja are part of our transport service area, along with Negara and Denpasar. Send the actual hotel, villa, address, or map pin at both ends of your journey: an area name alone may not be enough to work out the pickup arrangements.', 'Tell Ayu whether you need a one-way journey, a return journey, or transport with stops. Agree on the route, pickup time, waiting arrangements, and end point before confirming. Journey time is discussed for your actual route and depends on travel conditions.'] },
      { id: 'airport', kicker: 'Arriving or leaving Bali', title: 'Ask about an airport transfer.', paragraphs: ['Airport transport is also part of the service enquiries Ayu handles. Send the airport name, flight number, date, arrival or departure time, accommodation address, passenger count, and luggage details.', 'Ayu will confirm whether your requested airport and pickup time can be served, along with the meeting instructions and quote. Ask how waiting time or a flight change would affect your booking.'] },
      { id: 'travel-plans', kicker: 'Put the pieces together', title: 'Transport around your Lovina stay.', paragraphs: ['If you are joining a dolphin tour, share the confirmed tour timing when asking about transport. Hotel pickup for the dolphin tour carries an extra charge according to location; an onward car journey is a separate arrangement.', 'Ayu can also help with hotel and villa recommendations and itinerary planning. Long-term car and motorbike rentals can be discussed directly. Ask for their availability, rental terms, and pricing as a separate enquiry.'], link: { href: '/dolphin-tour-lovina/', text: 'See the Lovina dolphin tour' } },
    ],
    checklist: ['Travel date, pickup time, and pickup and drop-off locations', 'Number of adults and children, plus luggage and bulky items', 'One-way, return, or your proposed sightseeing stops', 'Vehicle preference, driver or guide request, and any help needed with the itinerary'],
    faqs: [
      { q: 'How much does transport in Lovina or Singaraja cost?', a: 'Request a quote for your actual date, route, vehicle, and group. Confirm the total, what it covers, and any separate charges before payment. We do not list a fixed fare for every journey.' },
      { q: 'Which transport option should I choose?', a: 'Start with private car transport for solo, couple, or family travel. For larger groups, compare Hiace and Elf. Send the passenger count and luggage details so Ayu can check the specific vehicle rather than choosing on seat count alone.' },
      { q: 'Can I request a female driver?', a: 'You can ask Ayu about a female driver. Availability must be checked for your date and route; it is not guaranteed for every booking.' },
      { q: 'Can I combine transport with a dolphin tour?', a: 'Yes, ask Ayu to coordinate the timing. Confirm the dolphin tour, any extra-cost hotel pickup, and onward transport separately so the scope and cost of each arrangement are clear.' },
    ],
  },
  car: {
    path: '/transportasi/sewa-mobil-singaraja/',
    title: 'Singaraja Car Rental & Lovina Private Transport | Utami Mesari Tours',
    heading: 'Singaraja & Lovina car rental.',
    kicker: 'Private transport · Couples & families',
    description: 'Ask Bu Ayu about Singaraja and Lovina car rental and driver arrangements. Explore Terios, Avanza, Xpander and Xenia options, then request a route-based quote.',
    intro: 'Make room for your own plans. Talk to Bu Ayu about a private car and driver arrangements for your journey in Singaraja, Lovina, and beyond.',
    image: '/images/family-transport.webp',
    imageAlt: 'White family transport vehicle from the site gallery',
    label: 'Private car transport',
    answer: 'Private car transport is available for solo travellers, couples, and families. Vehicle options include Terios, Avanza, Xpander, and Xenia, subject to availability. Share your route, passenger count, and luggage with Bu Ayu to confirm the vehicle, driver arrangements, and price.',
    sectionTitle: 'A car that fits your journey.',
    sectionIntro: 'Choose around people, bags, and your planned stops. A requested model is confirmed with Ayu rather than assumed from a photograph.',
    cards: [
      { title: 'Terios, Avanza, Xpander & Xenia', label: 'Family-car options', text: 'Ask which model is available for your date and how many passengers and bags it can take for your trip. Share children’s ages and any equipment you need before confirming.', href: '#quote', anchor: 'Prepare your car enquiry', image: '/images/family-transport-pickup.webp' },
      { title: 'Travelling with a larger group?', label: 'Compare the next size up', text: 'If your party or luggage needs more space, compare Hiace and Elf transport. Ayu can check the seating and luggage arrangement against your full group details.', href: '/transportasi/rombongan/', anchor: 'Explore Hiace & Elf transport', image: '/images/group-transport.webp' },
    ],
    sections: [
      { id: 'driver', kicker: 'The support you need', title: 'Driver, guide & local planning.', paragraphs: ['Ayu handles guide and driver enquiries around Lovina, as well as help planning an itinerary. Explain whether you need transport between places, someone to accompany your visits, or both. Agree on who will provide each service, their availability, and the cost; a car booking does not by itself establish a guided tour.', 'Solo travellers and families can also request a female driver, subject to availability. Mention the request when you first contact Ayu, together with your preferred language and any assistance needed during the journey.'] },
      { id: 'routes', kicker: 'From one address to the next', title: 'Plan the route before the quote.', paragraphs: ['The service area includes Singaraja, Lovina, Negara, and Denpasar. Send your exact pickup and destination locations, preferred date and time, and whether you need a return journey. For an airport enquiry, add the airport name and flight details.', 'For a journey with sightseeing stops, send the places you want to visit in order. Ayu can help discuss an itinerary and confirm what can be arranged. Agree on waiting time, the end of the service, and any additional-hour charges; there is no fixed day-hire duration promised here.'], link: { href: '/transportasi/#airport', text: 'Airport transfer enquiry details' } },
      { id: 'passengers', kicker: 'People & luggage together', title: 'What should fit in the car?', paragraphs: ['Send the total number of travellers, including children, and the number and size of bags. Mention pushchairs, mobility equipment, or other bulky items. Ask Ayu to confirm that the available vehicle suits both the passengers and the luggage.', 'If children are travelling, ask about suitable seating and any equipment required for your booking. Child seats and other equipment are not automatically included. Photographs show transport imagery already used on this site; the exact car is agreed with your booking.'] },
    ],
    checklist: ['Date, pickup time, exact addresses, and one-way or return plans', 'Passenger count, children’s ages, and luggage sizes', 'Preferred car model, or a request for help choosing', 'Driver or guide needs, preferred language, and any female-driver request'],
    faqs: [
      { q: 'What is the car rental price in Singaraja or Lovina?', a: 'Ask for a quote based on your date, pickup point, route, and vehicle needs. Confirm whether the price is for a transfer or a period of use, and what driver services and other costs it includes.' },
      { q: 'Can I book a specific car model?', a: 'Ask about Terios, Avanza, Xpander, or Xenia. Tell Ayu your preference; the available model and passenger and luggage arrangement must be confirmed for your booking.' },
      { q: 'Is this a self-drive car rental offer?', a: 'This page focuses on private transport and driver enquiries. If you need self-drive or a long-term rental, ask Ayu to confirm availability and the relevant eligibility, insurance, payment, and rental terms before making plans.' },
      { q: 'Can the car take us to a dolphin tour?', a: 'Ask Ayu about transport for your confirmed tour schedule. Dolphin tour hotel pickup has an extra location-based charge. Confirm any later car journey separately from the tour and its pickup.' },
    ],
  },
  group: {
    path: '/transportasi/rombongan/',
    title: 'Lovina & Singaraja Group Transport | Hiace & Elf | Utami Mesari Tours',
    heading: 'Group transport, together.',
    kicker: 'Lovina & Singaraja · Hiace & Elf',
    description: 'Plan group transport in Lovina and Singaraja with Bu Ayu. Compare Hiace and Elf passenger capacity and request a quote for your group, luggage and route.',
    intro: 'For a family outing, arisan, or tirta yatra. Plan your group’s journey with Bu Ayu, from the passenger list to the pickup arrangements.',
    image: '/images/group-transport.webp',
    imageAlt: 'Group transport vehicles shown in the Utami Mesari Tours gallery',
    label: 'Hiace & Elf group transport',
    answer: 'Utami Mesari Tours arranges group transport with Hiace and Elf for Lovina and Singaraja journeys. Options include Hiace for up to 15 passengers plus a driver and Elf for up to 19 plus a driver. Confirm the assigned vehicle, luggage space, route, and price with Bu Ayu.',
    sectionTitle: 'Hiace or Elf?',
    sectionIntro: 'Use these passenger counts as a starting point. Tell Ayu about luggage and other items before deciding which vehicle fits your group.',
    cards: [
      { title: 'Hiace', label: 'Up to 15 passengers + 1 driver', text: 'An option for group outings, family journeys, and shared plans. Confirm the specific vehicle, seating layout, and space for your group’s bags before booking.', href: transportQuote('Hiace group transport in Lovina or Singaraja'), anchor: 'Ask about a Hiace', image: '/images/group-transport.webp' },
      { title: 'Elf', label: 'Up to 19 passengers + 1 driver', text: 'An option for a larger group. Share everyone travelling and any bulky items so Ayu can check the actual seating and luggage arrangements.', href: transportQuote('Elf group transport in Lovina or Singaraja'), anchor: 'Ask about an Elf', image: '/images/group-transport-red.webp' },
    ],
    sections: [
      { id: 'occasions', kicker: 'One plan for the whole group', title: 'Outings, arisan & tirta yatra.', paragraphs: ['Group transport enquiries include family outings, arisan, tirta yatra, and meajar-ajar. Arisan is a social gathering; tirta yatra is a pilgrimage journey. Tell Ayu the purpose of your trip and the stops that matter to your group.', 'For a pilgrimage or a journey with several visits, share the planned stops, time at each place, and any items being carried. Ayu can discuss the route and transport needs. Destination tickets, ceremony arrangements, meals, and guiding are not automatically part of a vehicle booking.'] },
      { id: 'capacity', kicker: 'More than a seat count', title: 'Check people, bags & access.', paragraphs: ['Hiace is listed for 15 passengers plus one driver, and Elf for 19 plus one driver. These counts do not establish how much luggage will fit. Ask Ayu to check the assigned vehicle with your passenger list, suitcases, and any bulky items.', 'Send the actual pickup address or map pin, especially for a villa or a meeting point with limited access. Agree where the group will assemble and whether more than one pickup is needed. For a group beyond the listed capacity, ask what can be arranged rather than assuming an extra vehicle is available.'] },
      { id: 'group-route', kicker: 'Help the organiser get a clear quote', title: 'Set the route & return plan.', paragraphs: ['Transport service areas include Lovina, Singaraja, Negara, and Denpasar. Share the date, pickup time, planned destinations, and final drop-off point. If you need an airport journey, include the airport name, flight details, and full luggage count.', 'Specify whether the vehicle is needed for a transfer, a return journey, or a route with stops. Confirm driver arrangements, waiting time, any additional hours, and the total cost before payment. For a dolphin outing, book the boat arrangements separately and coordinate the timings with Ayu.'], link: { href: '/dolphin-tour-lovina/', text: 'Plan the dolphin tour separately' } },
    ],
    checklist: ['Date, group organiser’s contact, pickup time, and meeting location', 'Total passenger count, children’s ages, bags, and other equipment', 'Hiace or Elf preference and any driver or guide request', 'All stops, waiting requirements, and final drop-off or return plan'],
    faqs: [
      { q: 'How many passengers can travel in a Hiace or Elf?', a: 'Hiace can take up to 15 passengers plus a driver, and Elf up to 19 passengers plus a driver. Confirm the assigned vehicle and seating with Ayu, including the space needed for luggage.' },
      { q: 'Which is better for our group: Hiace or Elf?', a: 'Start with the number of passengers, then add your bags, equipment, route, and pickup access. Elf offers the higher passenger count of these two options, but suitability should be confirmed for the particular vehicle and journey.' },
      { q: 'How much is Hiace or Elf hire in Singaraja?', a: 'Request a quote with your date, passenger count, pickup location, complete route, and return plan. Confirm the vehicle, driver, duration, inclusions, and extra charges. No fixed group transport rate is published here.' },
      { q: 'Can you arrange transport for tirta yatra or arisan?', a: 'Yes, these are among the group transport needs Ayu handles, along with meajar-ajar and group outings. Share the planned stops and timing to confirm availability and the scope of the transport arrangement.' },
    ],
  },
};

export type TransportPageKey = keyof typeof transportPages;

interface JourneyIdea { title: string; places: string; planning: string; tourHref?: string }
interface PlanningStep { title: string; text: string }
interface ScopeRow { item: string; detail: string }
interface ExtraContent {
  routeHeading: string;
  routeIntro: string;
  routes: JourneyIdea[];
  bookingIntro: string;
  booking: PlanningStep[];
  scope: ScopeRow[];
  faqs: { q: string; a: string }[];
}

export const transportDetails: Record<TransportPageKey, ExtraContent> = {
  hub: {
    routeHeading: 'A few ways to plan your time.',
    routeIntro: 'These North Bali places are options to discuss with Ayu when planning transport. Choose the places that interest you; the route, order, duration, and arrangements are agreed for your trip.',
    routes: [
      { title: 'Singaraja local visits', tourHref: '/tur-bali-utara/#singaraja', places: 'Local market · Sasana Budaya · Chinese Temple · Beji Temple', planning: 'Share which places you want to visit and whether you need transport only or guiding as well.' },
      { title: 'Banjar', tourHref: '/tur-bali-utara/#banjar', places: 'Banjar Hot Spring · Buddhist Temple', planning: 'Discuss the two visits and your pickup location together. Ask for transport and any activity or admission costs to be identified separately.' },
      { title: 'Aling-Aling, Munduk & Ulun Danu', tourHref: '/tur-bali-utara/#aling-aling-munduk', places: 'Aling-Aling Waterfall · via Munduk · Ulun Danu Bratan', planning: 'This is a route idea to check with Ayu. Confirm the travel sequence, time available, and which stops can be included before booking.' },
      { title: 'Sekumpul enquiry', tourHref: '/tur-bali-utara/#sekumpul', places: 'Sekumpul Waterfall', planning: 'Ask whether transport for your preferred visit can be arranged. Confirm the drop-off, return pickup, and any separate guiding or activity arrangements.' },
    ],
    bookingIntro: 'Start with a conversation about the journey you need. Use the steps below to agree on the service before making a payment.',
    booking: [
      { title: 'Send your travel plan', text: 'Message Ayu with your date, pickup and destination locations, passengers, luggage, and preferred vehicle. If you are still planning, tell her which parts you need help with.' },
      { title: 'Review the arrangements', text: 'Ask for the available vehicle, driver or guide arrangements, route, timing, total price, and a clear breakdown of what is included or charged separately.' },
      { title: 'Agree on booking & payment', text: 'Confirm how the reservation is secured, whether full payment or a deposit is required, the payment deadline, and the terms for changes or cancellation. Use the terms agreed for your booking.' },
      { title: 'Check the pickup plan', text: 'Before travelling, make sure you have the agreed pickup location and time, a contact for the journey, and the final route or drop-off details. Message Ayu if your plans change.' },
    ],
    scope: [
      { item: 'Vehicle & driver', detail: 'Identify the vehicle and driver arrangement covered by the quote, including the service start and end.' },
      { item: 'Road & time costs', detail: 'Check fuel, parking, tolls, waiting, additional stops, and additional hours. Ask which are included and how any extras are calculated.' },
      { item: 'Visits & activities', detail: 'Agree separately on admission tickets, guides, meals, dolphin boats, or other activities you want to add.' },
      { item: 'Longer stays', detail: 'Long-term car and motorbike rentals are available to enquire about. Send the rental dates and location for the available options and applicable terms.' },
    ],
    faqs: [
      { q: 'Can you help if I have not decided on an itinerary?', a: 'Yes. Tell Ayu where you are staying, your dates, who is travelling, and the places that interest you. She can help discuss an itinerary and hotel or villa recommendations alongside your transport needs.' },
      { q: 'Does the transport price include a guide or attraction tickets?', a: 'Ask for these items to be stated in your quote. Transport, guiding, admission, meals, and activities are different arrangements; include the services you actually want when enquiring.' },
      { q: 'Can I ask about long-term car or motorbike rental?', a: 'Yes. Send the type of vehicle, start and end dates, and location. Ask Ayu for availability, price, handover arrangements, and the rental and payment terms for the longer stay.' },
    ],
  },
  car: {
    routeHeading: 'Turn a list of places into a journey.',
    routeIntro: 'For a private car enquiry, you can start with one of these ideas from our North Bali travel options. These are starting points for a discussion, with the actual stops and schedule agreed with Ayu.',
    routes: [
      { title: 'A Singaraja outing', tourHref: '/tur-bali-utara/#singaraja', places: 'Local market · Sasana Budaya · Chinese Temple · Beji Temple', planning: 'Choose the stops you want and your pickup address. Tell Ayu your preferred pace and whether you would like guiding during the visits.' },
      { title: 'A Banjar visit', tourHref: '/tur-bali-utara/#banjar', places: 'Banjar Hot Spring · Buddhist Temple', planning: 'Ask about a car for these visits from your accommodation. Agree on time at the stops, waiting, and your final return location.' },
      { title: 'A route through Munduk', tourHref: '/tur-bali-utara/#aling-aling-munduk', places: 'Aling-Aling Waterfall · Munduk · Ulun Danu Bratan', planning: 'Discuss the full route before setting a departure or return time. The order, duration, and feasibility of combining the stops need confirmation.' },
    ],
    bookingIntro: 'A useful car enquiry starts with the journey, rather than just the name of a model. Here is how to prepare the details with Ayu.',
    booking: [
      { title: 'Describe the journey', text: 'Send your pickup and final destination, date, passenger count, and luggage. Explain whether you want a transfer, a return trip, or visits with stops.' },
      { title: 'Choose the arrangement', text: 'Ask which Terios, Avanza, Xpander, or Xenia is available and suitable. Agree on the driver service and request guiding or a female driver at this stage if needed.' },
      { title: 'Approve the quote & terms', text: 'Check the total cost, included time, extras, and payment requirements. Agree on changes and cancellation terms before paying; a deposit or full-payment rule should not be assumed.' },
      { title: 'Get ready for pickup', text: 'Keep your pickup address or map pin and agreed time ready. Check the journey contact and return plan, and tell Ayu about any changes to your party or luggage.' },
    ],
    scope: [
      { item: 'Car & passengers', detail: 'Match the available model to your adults, children, and bags. Passenger and luggage capacity must be checked for the particular vehicle.' },
      { item: 'Driver or guide', detail: 'Specify whether you need driving, guiding, or both, the language needed, and any female-driver request. Confirm availability and the price for each arrangement.' },
      { item: 'Use of the car', detail: 'Define the pickup, stops, drop-off, service duration, waiting, and additional-hour charges. Confirm fuel, parking, and tolls in the quote.' },
      { item: 'At the destinations', detail: 'Ask how admission tickets, local guiding, meals, and activities will be handled. They should be clearly itemised if part of your arrangement.' },
    ],
    faqs: [
      { q: 'Can we include sightseeing stops in a private car journey?', a: 'Share the complete list of places before requesting a quote. Ayu can help discuss the itinerary and confirm the route, time available, waiting arrangements, and cost. Adding a stop may change the arrangement and price.' },
      { q: 'What is the difference between a driver and a guide enquiry?', a: 'For driving, describe the transport you need between places. If you want someone to accompany or explain the visits, request guiding as well. Ask Ayu who can provide the required service and whether it is included or priced separately.' },
      { q: 'Can I request a female driver for a solo trip?', a: 'Yes, mention this when you send the date and route. Ayu handles female-driver requests subject to availability; confirm the arrangement before completing your booking.' },
    ],
  },
  group: {
    routeHeading: 'Build the route around your group.',
    routeIntro: 'For group transport, the type of outing helps shape the plan. Share the places, people, and time requirements together so Ayu can discuss a suitable arrangement.',
    routes: [
      { title: 'Arisan & family outings', places: 'A gathering, a shared visit, or several stops', planning: 'Choose an organiser and a meeting location. For sightseeing, discuss Singaraja visits or Banjar Hot Spring and Buddhist Temple as possible starting ideas, with transport feasibility confirmed.' },
      { title: 'Tirta yatra', places: 'Your intended pilgrimage stops', planning: 'Send the names and locations of all stops, planned time at each, and items being carried. Agree on the vehicle route, timing, and any separate ceremony or guiding arrangements.' },
      { title: 'Meajar-ajar', places: 'Your group’s planned outing', planning: 'Explain the purpose and places involved so Ayu can plan around your group’s actual needs. Include participants, bags or equipment, meeting points, and return requirements.' },
    ],
    bookingIntro: 'A clear plan helps the organiser collect the right details before asking the whole group to commit.',
    booking: [
      { title: 'Send the organiser’s brief', text: 'Provide one contact, travel date, pickup location, all stops, and the final drop-off. Include every passenger, children’s ages, bags, and any equipment.' },
      { title: 'Match vehicle & route', text: 'Discuss Hiace or Elf with Ayu. Check the assigned vehicle, passenger and luggage layout, pickup access, driver arrangement, and the time needed for the proposed journey.' },
      { title: 'Confirm the group quote', text: 'Agree on the quoted price basis, inclusions, any waiting or additional-hour charges, payment schedule, and change or cancellation terms. Keep the transport and other activity arrangements clear.' },
      { title: 'Share the final plan', text: 'Give participants the agreed meeting point and time. Check the journey contact and return arrangements with Ayu, and report any changes in the group or route before travel.' },
    ],
    scope: [
      { item: 'Passenger layout', detail: 'Hiace: up to 15 passengers plus one driver. Elf: up to 19 plus one driver. The assigned vehicle, luggage space, and seating arrangement need confirmation.' },
      { item: 'Group cost', detail: 'Ask whether the quote covers the whole vehicle, a specified route, or a period of use. Agree how added pickups, stops, or time affect the total.' },
      { item: 'Transport inclusions', detail: 'Check the driver, fuel, parking, tolls, waiting, and any other road costs. The written breakdown should identify included and separate charges.' },
      { item: 'Beyond transport', detail: 'Tell Ayu if you also need guiding or other assistance. Admission, meals, ceremonies, and dolphin boat arrangements should be agreed separately or expressly itemised.' },
    ],
    faqs: [
      { q: 'Can the group be picked up at more than one location?', a: 'Send every proposed pickup location and how many people will be at each. Ask Ayu whether the plan can be arranged and how it affects the route, timing, and quote.' },
      { q: 'What if our group count changes after the quote?', a: 'Tell Ayu about changes before travel, including extra passengers, luggage, or equipment. Ask whether the confirmed vehicle and price still apply. Do not exceed the agreed capacity or assume another vehicle has been reserved.' },
      { q: 'Does a Hiace or Elf booking include the dolphin boat?', a: 'The transport and dolphin tour need their own agreed arrangements. Ask Ayu to coordinate the schedules and identify the cost and inclusions of each, including any hotel pickup charge associated with the tour.' },
    ],
  },
};
