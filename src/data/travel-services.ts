export const serviceEnquiry = (service: string, rental = false) => `https://wa.me/6281999966044?text=${encodeURIComponent(rental
  ? `Hello Bu Ayu, I would like to ask about ${service}. Start and end dates: ... Staying in: ... Car or motorbike preference: ... Intended use: ... Handover location: ... Please confirm availability, the total rental price, requirements, inclusions, and terms.`
  : `Hello Bu Ayu, I would like to plan ${service}. Travel date: ... Staying in/pickup location: ... Adults and children (ages): ... Places I would like to visit: ... Preferred pace and return time: ... Driver or guide request: ... Please share a proposed itinerary, availability, total price, and inclusions.`)}`;

interface ServiceCard { id: string; label: string; title: string; text: string; points: string[]; cta: string; enquiry: string }
interface ServiceSection { id: string; kicker: string; title: string; paragraphs: string[]; link?: { href: string; text: string } }
interface ServicePage {
  path: string; title: string; description: string; heading: string; kicker: string; intro: string;
  image: string; imageAlt: string; imageNote: string; service: string; answer: string;
  optionsTitle: string; optionsIntro: string; cards: ServiceCard[]; sections: ServiceSection[];
  scope: { title: string; text: string }[]; steps: { title: string; text: string }[];
  enquiryItems: string[]; faqs: { q: string; a: string }[];
  related: { href: string; text: string; detail: string }[];
}

export const travelServices: Record<'tours' | 'rentals', ServicePage> = {
  tours: {
    path: '/tur-bali-utara/',
    title: 'North Bali Tour | Plan Your Route with Bu Ayu | Utami Mesari Tours',
    description: 'Plan a North Bali tour with Bu Ayu. Discuss Singaraja, Banjar Hot Spring, Buddhist Temple, Aling-Aling, Munduk and Ulun Danu, with transport and a tailored quote.',
    heading: 'Your North Bali tour.',
    kicker: 'Local visits · A day shaped around you',
    intro: 'Start with the places you want to see, then plan the route together. Bu Ayu helps with North Bali travel ideas, transport, and the arrangements for your day.',
    image: '/images/hidden-waterfall.png',
    imageAlt: 'Illustrative waterfall scenery for planning a North Bali journey',
    imageNote: 'North Bali travel inspiration · Image is illustrative, not a photograph of a confirmed stop.',
    service: 'North Bali tour planning',
    answer: 'Discuss a North Bali tour with Utami Mesari Tours: Singaraja local visits, Banjar Hot Spring and Buddhist Temple, or an Aling-Aling–Munduk–Ulun Danu route. Sekumpul is another destination to ask about. Bu Ayu confirms which visits can be arranged, the itinerary, transport, and total quote for your date and group.',
    optionsTitle: 'Where would you like to go?',
    optionsIntro: 'Choose a starting idea below. These are route options to discuss, with the final stops, sequence, time, and inclusions agreed before booking.',
    cards: [
      { id: 'singaraja', label: '01 / Local life & culture', title: 'Singaraja Tour', text: 'Discuss a visit around Singaraja with a local market, Sasana Budaya, Chinese Temple, and Beji Temple among the options.', points: ['Choose the visits that interest your party.', 'Share your pickup address and time available.', 'Ask whether you need a driver, guiding, or both.'], cta: 'Plan a Singaraja visit', enquiry: 'a Singaraja tour — local market, Sasana Budaya, Chinese Temple and Beji Temple' },
      { id: 'banjar', label: '02 / Two places to discuss', title: 'Banjar Hot Spring & Buddhist Temple', text: 'Make Banjar the starting point for a day that includes the hot spring and Buddhist Temple, with the visit arrangements worked out for your group.', points: ['Discuss how much time you want at each visit.', 'Check admission and any separate local arrangements.', 'Agree on pickup, waiting, and your return destination.'], cta: 'Ask about the Banjar route', enquiry: 'a Banjar Hot Spring and Buddhist Temple visit' },
      { id: 'aling-aling-munduk', label: '03 / An inland route idea', title: 'Aling-Aling, Munduk & Ulun Danu', text: 'Ask about Aling-Aling Waterfall and an onward route through Munduk toward Ulun Danu Bratan. Confirm the feasibility of combining your preferred stops for the time available.', points: ['Tell Ayu which stops matter most.', 'Agree on the route order and expected time before booking.', 'Identify any activities, guiding, or tickets separately.'], cta: 'Discuss the inland route', enquiry: 'an Aling-Aling–Munduk–Ulun Danu Bratan route, subject to itinerary confirmation' },
      { id: 'sekumpul', label: '04 / Check the arrangements first', title: 'Sekumpul as an option', text: 'Interested in Sekumpul Waterfall? Ask Ayu whether a visit can be arranged for your date and needs before adding it to a confirmed itinerary.', points: ['Explain the visit or activity you have in mind.', 'Check access, walking, and any local guide requirements.', 'Confirm transport, pickup, and separate activity costs.'], cta: 'Enquire about Sekumpul', enquiry: 'whether a Sekumpul Waterfall visit can be arranged' },
    ],
    sections: [
      { id: 'itinerary', kicker: 'The route before the schedule', title: 'Build a day that fits.', paragraphs: ['Send your starting location, preferred places, and any fixed return commitment. Choose your priorities first, rather than assuming every destination on this page belongs in one trip. Ayu can help discuss which stops to combine and what can be arranged for your date.', 'There is no single departure time or fixed duration for all these options. Ask for the visit order, estimated driving and visit time, breaks, and final drop-off. Journey time depends on the actual route and conditions.'], link: { href: '/blog/a-slow-day-in-north-bali', text: 'Read our slower North Bali day-planning ideas' } },
      { id: 'transport-guide', kicker: 'The right support for the day', title: 'Your vehicle, driver & guide.', paragraphs: ['Tell Ayu how many people are travelling, the ages of children, and any luggage or assistance needs. Private car options include Terios, Avanza, Xpander, and Xenia; Hiace and Elf are options for groups. The specific vehicle is agreed for your journey.', 'Ask separately if you want a guide to accompany or explain visits. Driver and guide arrangements, preferred language, and any female-driver request need confirmation for your date; they are not automatically all included in one tour quote.'], link: { href: '/transportasi/', text: 'Compare private and group transport options' } },
      { id: 'dolphin-combination', kicker: 'A morning at sea, then what?', title: 'Adding a dolphin tour.', paragraphs: ['Dolphin watching is a separate service with private and sharing boat choices. If you want it as part of your travel plans, agree on the boat trip and land visits together with Ayu, including any transfer between them.', 'The approximate dolphin departure is 06:00 and return around 08:00–09:00, depending on the package. Leave space for your actual return and onward arrangements; this is not a promise that every inland route can follow the boat trip on the same day.'], link: { href: '/dolphin-tour-lovina/', text: 'See Lovina dolphin tour options and timings' } },
      { id: 'visit-needs', kicker: 'Plan for the people travelling', title: 'Tell us how you like to travel.', paragraphs: ['Mention children, walking preferences, mobility needs, and the time you would like at each stop. Ask about the access and activities of your chosen visits before deciding that a route suits everyone. A transport booking alone does not establish the suitability of a waterfall activity or the availability of particular equipment.', 'Ayu can also help with hotel and villa recommendations and itinerary planning. Share where you intend to stay so pickup and the final destination can be discussed as part of the day.'], link: { href: '/sewa-kendaraan-jangka-panjang/', text: 'Staying longer? Explore long-term car and motorbike rental' } },
    ],
    scope: [
      { title: 'The itinerary', text: 'Named stops, visit order, pickup and return locations, proposed timings, and what happens if the agreed route needs to change.' },
      { title: 'Transport & support', text: 'The vehicle, driver and any guide; included service time; fuel, parking, tolls, waiting, and additional-hour charges.' },
      { title: 'At the destinations', text: 'Entrance tickets, local guiding, activities, equipment, meals, and drinks. Ask which are included, payable separately, or not part of the arrangement.' },
      { title: 'Price & terms', text: 'Total price and currency, whether it covers the whole group or each guest, child arrangements, payment requirements, changes, cancellation, and weather terms.' },
    ],
    steps: [
      { title: 'Share your starting idea', text: 'Send your date, accommodation, passengers, and the places you most want to visit. Mention the help you need choosing a route.' },
      { title: 'Agree on the day', text: 'Review a proposed itinerary with Ayu, including transport, driver or guide needs, time at the stops, and your final destination.' },
      { title: 'Review the quote', text: 'Check the total, inclusions, separate charges, and payment and cancellation terms before making a payment. Follow the terms agreed for this booking.' },
      { title: 'Keep the details ready', text: 'Check your pickup time and location, journey contact, and agreed itinerary. Tell Ayu if your group, accommodation, or plans change.' },
    ],
    enquiryItems: ['Travel date, accommodation or pickup point, and final destination', 'Adults, children’s ages, luggage, and any walking or assistance needs', 'Preferred stops, must-see places, and time available', 'Vehicle, driver or guide request, preferred language, and budget if you have one'],
    faqs: [
      { q: 'How much does a North Bali tour cost?', a: 'Request a quote for your date, group, pickup point, and agreed itinerary. Ask whether the price is per guest or for the group and what transport, guiding, tickets, and activities it covers. No fixed package rate is published here.' },
      { q: 'Can all the places on this page fit into one day?', a: 'They are different starting options, not one combined itinerary. Tell Ayu your priorities and available time to agree on a feasible route. Do not assume Singaraja, Banjar, Aling-Aling, Munduk, Ulun Danu, and Sekumpul are all included.' },
      { q: 'Can I book a tour starting in Lovina?', a: 'Send your accommodation or pickup address in Lovina and the places you want to visit. Ayu can check the arrangements. For another starting location, send the actual address before requesting the route and price.' },
      { q: 'Are the driver, guide, entrance fees, and lunch included?', a: 'Only the items agreed in your quote apply. Ask for a breakdown of transport, driver, guiding, tickets, activities, meals, and drinks before payment.' },
      { q: 'Can children or a larger group join?', a: 'Tell Ayu the full passenger count, children’s ages, and any access or assistance needs. Confirm both the vehicle and suitability of the planned visits. Group vehicle capacity does not establish whether an activity suits every participant.' },
      { q: 'Is Sekumpul a confirmed tour package?', a: 'Sekumpul is a destination enquiry option on this page. Ask Ayu whether the visit and any activity or local arrangements you want can be provided for your date before treating it as part of a confirmed itinerary.' },
      { q: 'What if I need to change the route or the weather changes?', a: 'Agree on itinerary changes, cancellation, weather, and any refund or rescheduling arrangements before paying. Ask how those terms apply to each activity rather than assuming the dolphin tour and land tour have the same conditions.' },
    ],
    related: [
      { href: '/transportasi/sewa-mobil-singaraja/', text: 'Private car transport', detail: 'Choose the car arrangement for a private or family journey.' },
      { href: '/transportasi/rombongan/', text: 'Hiace & Elf for groups', detail: 'Plan seating, luggage, and pickups for a larger party.' },
      { href: '/blog/a-slow-day-in-north-bali', text: 'A slow day in North Bali', detail: 'Leave room in the day before you commit to every stop.' },
    ],
  },
  rentals: {
    path: '/sewa-kendaraan-jangka-panjang/',
    title: 'Long-Term Vehicle Rental Lovina | Cars & Motorbikes | Utami Mesari Tours',
    description: 'Ask Bu Ayu about long-term vehicle rental in Lovina. Discuss car or motorbike availability, your rental dates, total pricing, handover and rental terms.',
    heading: 'Long-term vehicle rental in Lovina.',
    kicker: 'Lovina · Long-term cars & motorbikes',
    intro: 'Staying a little longer? Tell Bu Ayu when you need a vehicle and how you plan to use it. Discuss a car or motorbike rental for your stay, with the details agreed before booking.',
    image: '/images/family-transport-pickup.webp',
    imageAlt: 'Illustrative family transport vehicle from the Utami Mesari Tours gallery',
    imageNote: 'Transport imagery from our gallery · The vehicle offered for your rental is confirmed separately.',
    service: 'Long-term vehicle rental in Lovina',
    answer: 'Utami Mesari Tours handles long-term car and motorbike rental enquiries. Send Bu Ayu your start and end dates, location, preferred vehicle type, and intended use to check availability. Ask for the total rental price, rental requirements, handover and return arrangements, and the terms for your agreed period.',
    optionsTitle: 'Car or motorbike?',
    optionsIntro: 'Both are long-term rental enquiry options. Choose the type you need, then check the available model, rental period, and terms for your stay.',
    cards: [
      { id: 'cars', label: '01 / Long-term car rental', title: 'A car for your stay', text: 'Discuss a car for your longer stay in or around Lovina. Describe who will use it, the passengers and luggage involved, and the journeys you expect to make.', points: ['Ask which models are available for long-term rental.', 'Confirm whether the arrangement suits your intended use and driver needs.', 'Get the period, total price, and handover details together.'], cta: 'Ask about a long-term car', enquiry: 'long-term car rental in Lovina' },
      { id: 'motorbikes', label: '02 / Long-term motorbike rental', title: 'A motorbike for a longer stay', text: 'Ask about motorbike availability for your dates and location. The model, rental conditions, equipment, and rider requirements should be agreed for the actual vehicle offered.', points: ['Send your preferred type and intended use.', 'Check the available model, rider eligibility, and equipment.', 'Confirm the rental period, collection, and return plan.'], cta: 'Ask about a long-term motorbike', enquiry: 'long-term motorbike rental in Lovina' },
    ],
    sections: [
      { id: 'rental-period', kicker: 'Dates before daily-rate assumptions', title: 'Agree on your rental period.', paragraphs: ['Send the start and end dates, including the time you would like to collect and return the vehicle. If you are considering a monthly stay or have flexible dates, explain that in your enquiry so Ayu can check the options.', 'Ask what minimum period applies, how the total is calculated, and what an extension or early return would mean for the price. No fixed minimum duration, monthly discount, or automatic extension is promised on this page.'] },
      { id: 'rental-location', kicker: 'Where you will stay and travel', title: 'Check location & handover.', paragraphs: ['Share your accommodation or intended handover location and the area where you expect to use the vehicle. Ask Ayu to confirm whether that location and intended use can be served for the rental you are discussing.', 'Agree on collection or delivery, any handover charge, return location and time, and a contact for the rental. Transport service coverage does not by itself mean vehicle delivery or rental use is available in every area.'], link: { href: '/transportasi/', text: 'Need an arranged transfer instead? Explore transport services' } },
      { id: 'requirements', kicker: 'Understand the arrangement', title: 'Driver needs & rental requirements.', paragraphs: ['For a car, say whether you need a driver or are asking about a self-drive arrangement. For a motorbike, discuss the intended rider and the type of vehicle you need. Ayu must confirm the available arrangement and its eligibility, licence, documentation, and rental requirements before you commit.', 'Ask for the actual model and included equipment. For a motorbike, clarify helmets and any other equipment needed; for a car, mention children and any equipment requirements. Availability and inclusions are not established by the gallery photograph or by the word rental.'], link: { href: '/transportasi/sewa-mobil-singaraja/', text: 'See private car transport for an individual journey' } },
      { id: 'handover', kicker: 'Keep the details together', title: 'Before collection & at return.', paragraphs: ['As a practical checklist, review the agreed vehicle, equipment, fuel arrangement, condition, and return time at handover. Ask how to record any existing marks or issues and keep a copy of the rental and payment details.', 'Confirm who to contact about a breakdown, servicing, damage, theft, or a change of plans. Ask how costs and responsibilities are handled under the actual rental agreement; this page does not promise insurance, roadside assistance, a replacement vehicle, or particular cover.'], link: { href: '/gallery#family-transport', text: 'View family transport imagery — the rental vehicle is confirmed separately' } },
    ],
    scope: [
      { title: 'Period & total price', text: 'Start and end times, the agreed duration, total cost and currency, minimum rental period, any fees, and extension or early-return terms.' },
      { title: 'Payment & security', text: 'Payment timing, whether a deposit is required, the deposit amount and return conditions if applicable, documentation, and cancellation terms.' },
      { title: 'Vehicle & handover', text: 'Model, intended use, driver or rider requirements, included equipment, collection or delivery arrangements, location limits, and return procedure.' },
      { title: 'Running costs & responsibility', text: 'Fuel, mileage terms if applicable, maintenance, breakdown contact, damage or theft responsibilities, and any insurance or cover with its limits and exclusions.' },
    ],
    steps: [
      { title: 'Send dates & requirements', text: 'Tell Ayu where you will stay, whether you want a car or motorbike, and the period and intended use. Mention driver, passenger, or equipment needs.' },
      { title: 'Review available options', text: 'Discuss the model and arrangement offered for your dates. Check the rental requirements and the proposed collection or delivery and return locations.' },
      { title: 'Agree on price & terms', text: 'Read the total quote, payment and deposit arrangements if applicable, inclusions, responsibilities, and change or cancellation conditions before payment.' },
      { title: 'Check handover & return', text: 'Keep the agreed contact and return plan. Review the vehicle and equipment at handover, and ask about any extension before the rental period ends.' },
    ],
    enquiryItems: ['Car or motorbike preference and any model request', 'Start and end dates and preferred handover times', 'Accommodation, handover location, and intended travel area', 'Intended use, driver or rider arrangement, passengers and equipment needs'],
    faqs: [
      { q: 'What is the price for long-term car or motorbike rental?', a: 'Request a total quote for the vehicle, dates, and arrangement available. Ask for the full rental-period price and any separate costs. No fixed daily or monthly price is published here.' },
      { q: 'Do you offer monthly vehicle rental in Lovina?', a: 'Long-term car and motorbike rental enquiries are welcome. If you need a vehicle for a month, send the actual start and end dates so Ayu can check availability, the minimum period, price, and applicable terms. A standard monthly package is not assumed.' },
      { q: 'Which car or motorbike models can I rent?', a: 'Ask Ayu which models are available for your rental dates. Family-car transport imagery and model lists elsewhere on the site do not confirm that those same vehicles are available for a long-term rental. Motorbike models are confirmed directly.' },
      { q: 'Is a driver, insurance, or equipment included?', a: 'Ask for the arrangement and inclusions to be written into the quote. Confirm driver or rider requirements, insurance or cover if any, its exclusions, included equipment, and running costs before payment.' },
      { q: 'Is a deposit required, and what documents do I need?', a: 'Ayu will need to confirm the requirements for the actual rental arrangement. Ask about documentation, eligibility, payment timing, any deposit and its return conditions. Do not assume no deposit or a particular payment method.' },
      { q: 'Can the vehicle be delivered to my accommodation?', a: 'Send your accommodation or requested handover location. Ask whether delivery can be arranged, any charge, and how the vehicle will be returned. Delivery is not automatically included.' },
      { q: 'Can I extend the rental or return early?', a: 'Contact Ayu before changing the agreed period. Check availability, the revised price, notice requirements, and any early-return or refund terms. Extension is not automatic.' },
    ],
    related: [
      { href: '/transportasi/', text: 'Transfers & arranged transport', detail: 'For a journey with agreed pickup and destination rather than a longer rental.' },
      { href: '/tur-bali-utara/', text: 'Plan a North Bali tour', detail: 'Discuss local visits and itinerary help for time during your stay.' },
      { href: '/dolphin-tour-lovina/', text: 'A morning on the sea', detail: 'Explore private and sharing dolphin boats as a separate activity.' },
    ],
  },
};
