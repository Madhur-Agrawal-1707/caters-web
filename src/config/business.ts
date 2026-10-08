// Central business configuration.
// Values sourced from the client's menu document are marked SOURCE-PROVIDED.
// Everything else must be confirmed by the client before production launch.

export const business = {
  name: "PS Caterers",
  proprietor: "Ram Sewak Krishna",
  tagline: "",

  // SOURCE-PROVIDED: not yet confirmed which city is the primary base.
  city: "REPLACE_WITH_CITY",
  state: "REPLACE_WITH_STATE",
  address: "REPLACE_WITH_ADDRESS",

  // SOURCE-PROVIDED from the scanned menu header. Confirm which is primary
  // vs. secondary, and which should be used for WhatsApp, before launch.
  phone: "9415456822",
  phoneSecondary: "9506814862",
  whatsapp: "9415456822",

  email: "REPLACE_WITH_EMAIL",

  instagram: "",
  facebook: "",
  youtube: "",
  website: "",
} as const;

export const isSocialConfigured = {
  instagram: business.instagram.length > 0,
  facebook: business.facebook.length > 0,
  youtube: business.youtube.length > 0,
};

export function formatPhoneForTel(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return digits.length === 10 ? `+91${digits}` : `+${digits}`;
}

export function formatPhoneForWhatsApp(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return digits.length === 10 ? `91${digits}` : digits;
}
