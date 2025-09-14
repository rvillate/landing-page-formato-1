// utils/services-data.ts
export const serviceImages = {
  withHandles: import.meta.glob("/assets/images/services/withHandles/*.{png,jpg,jpeg,webp}", { eager: true }),
  withKnob: import.meta.glob("/assets/images/services/withKnob/*.{png,jpg,jpeg,webp}", { eager: true })
  };

export const servicesTraditionalLocks = [
  {
    title: "servicesListTraditionalLocks.service1.title",
    description: "servicesListTraditionalLocks.service1.description",
    images: Object.values(serviceImages.withHandles).map((m: any) => m.default),
    alt: "servicesListTraditionalLocks.service1.alt",
  },
  {
    title: "servicesListTraditionalLocks.service2.title",
    description: "servicesListTraditionalLocks.service2.description",
    images: Object.values(serviceImages.withKnob).map((m: any) => m.default),
    alt: "servicesListTraditionalLocks.service2.alt",
  },
];
