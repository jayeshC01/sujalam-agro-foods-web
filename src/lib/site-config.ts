export const SECTION_IDS = {
  ourStory: "our-story",
} as const;

// TODO: replace with the real production domain once it's live.
export const SITE_URL = "https://sujalamagrofoods.com";

export const CONTACT = {
  email: "hello@sujalamagrofoods.com",
  // TODO: temporary business WhatsApp number — replace with the permanent one before launch.
  phone: "+91 75583 23559",
  location: "Maharashtra, India",
  address:
    "Survey No. 129/13, Near Krushna Garden, NH-3, Viholi, Nashik-422009, India",
};

export const SOCIALS = {
  // TODO: replace with the real Instagram handle before launch.
  instagram: "https://instagram.com/sujalamagrofoods",
  instagramHandle: "@sujalamagrofoods",
};

export const CERTIFICATIONS = [
  {
    name: "FSSAI",
    wordmark: "FSSAI",
    // TODO: replace with the real FSSAI license number before launch.
    detail: "Lic No: XXXXXXXXXXXXXXX",
  },
  {
    name: "Maharashtra FDA",
    wordmark: "FDA",
    detail: "State Food & Drug Licensed",
  },
  {
    name: "GMP Certified",
    wordmark: "GMP",
    detail: "GMP/S103/36",
  },
  {
    name: "ISO 22000:2005",
    wordmark: "ISO",
    detail: "FSMS/S107/39",
  },
  {
    name: "Udyam Registered",
    wordmark: "UDYAM",
    detail: "MH23A0015731",
  },
];
