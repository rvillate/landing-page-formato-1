// utils/services-data.ts
export const serviceImages = {
  withPhone: import.meta.glob("/assets/images/services/withPhone/*.{png,jpg,jpeg,webp}", { eager: true }),
  withFingerprint: import.meta.glob("/assets/images/services/withFingerprint/*.{png,jpg,jpeg,webp}", { eager: true }),
  withCode: import.meta.glob("/assets/images/services/withCode/*.{png,jpg,jpeg,webp}", { eager: true }),
};

export const servicesDigitalLocks = [
  {
    title: "servicesListDigitalLocks.service1.title",
    description: "servicesListDigitalLocks.service1.description",
    images: Object.values(serviceImages.withPhone).map((m: any) => m.default),
    alt: "servicesListDigitalLocks.service1.alt",
  },
  {
    title: "servicesListDigitalLocks.service2.title",
    description: "servicesListDigitalLocks.service2.description",
    images: Object.values(serviceImages.withFingerprint).map((m: any) => m.default),
    alt: "servicesListDigitalLocks.service2.alt",
  },
  {
    title: "servicesListDigitalLocks.service3.title",
    description: "servicesListDigitalLocks.service3.description",
    images: Object.values(serviceImages.withCode).map((m: any) => m.default),
    alt: "servicesListDigitalLocks.service3.alt",
  },
];
