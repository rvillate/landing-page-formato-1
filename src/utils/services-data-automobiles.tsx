// utils/services-data-automobiles.tsx
export const serviceImages = {
  withPhone: import.meta.glob(
    "/assets/images/services/automobiles/withPhone/*.{png,jpg,jpeg,webp}",
    { eager: true }
  ),
  withFingerprint: import.meta.glob(
    "/assets/images/services/automobiles/withFingerprint/*.{png,jpg,jpeg,webp}",
    { eager: true }
  ),
};

export const servicesAutomobiles = [
  {
    title: "servicesListAutomobiles.service1.title",
    description: "servicesListAutomobiles.service1.description",
    images: Object.values(serviceImages.withPhone).map((m: any) => m.default),
    alt: "servicesListAutomobiles.service1.alt",
  },
  {
    title: "servicesListAutomobiles.service2.title",
    description: "servicesListAutomobiles.service2.description",
    images: Object.values(serviceImages.withFingerprint).map((m: any) => m.default),
    alt: "servicesListAutomobiles.service2.alt",
  },
];
