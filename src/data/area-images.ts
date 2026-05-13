/**
 * Area hero images, Unsplash CDN photo IDs for Oxford districts.
 */

export interface AreaImage {
  /** Unsplash CDN long-form photo ID. */
  id: string;
  /** Accessibility/SEO alt text. */
  alt: string;
}

export const AREA_IMAGES: Record<string, AreaImage> = {
  "city-centre-carfax": {
    id: "1699021566217-f4ce5875b2e1",
    alt: "Oxford city centre and Carfax with landmark civic architecture",
  },
  "jericho-north-oxford": {
    id: "1626010935539-710125f7e294",
    alt: "Jericho and North Oxford terraced streetscape",
  },
  headington: {
    id: "1626011338434-2a000a7c63c0",
    alt: "Headington Oxford hospital and retail district",
  },
  "cowley-east-oxford": {
    id: "1699021565667-07f81d7d137c",
    alt: "Cowley Road East Oxford independent retail terrace",
  },
  summertown: {
    id: "1603135946711-e2f73c019c44",
    alt: "Summertown Oxford parade of shops and offices",
  },
  botley: {
    id: "1699021566678-edb0d7af1d5e",
    alt: "Botley Oxford district retail and offices",
  },
  "iffley-iffley-road": {
    id: "1697407503401-8991afe14b00",
    alt: "Iffley Road Oxford leisure and HMO street",
  },
  marston: {
    id: "1699021566037-2079b9459957",
    alt: "Marston Oxford suburban healthcare and retail",
  },
  "littlemore-blackbird-leys": {
    id: "1683459269288-63ce626a67f2",
    alt: "Littlemore and Blackbird Leys outer Oxford trade and healthcare",
  },
  "oxford-science-park": {
    id: "1626011789898-0b317546acb0",
    alt: "Oxford Science Park office and lab investment buildings",
  },
  "begbroke-oxford-north": {
    id: "1638803702682-4b2c833e543f",
    alt: "Begbroke and Oxford North innovation district",
  },
  "westgate-castle-quarter": {
    id: "1699818268277-242624112ff9",
    alt: "Westgate and Oxford Castle Quarter retail and leisure flagship",
  },
};

/** Canonical hero image for the /areas index page and city-wide contexts. */
export const AREAS_INDEX_IMAGE: AreaImage = {
  id: "1526637201259-da59cb348242",
  alt: "Oxford aerial skyline with development zones",
};

/** Safe lookup, returns the area image, or the canonical city image as fallback. */
export function getAreaImage(slug: string): AreaImage {
  return AREA_IMAGES[slug] ?? AREAS_INDEX_IMAGE;
}
