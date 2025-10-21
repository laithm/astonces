'use client';
import Header from '../components/Header';
import HardwareRequestForm from '../components/HardwareRequestForm';

export default function HardwareRequestPage() {
  return (
    <>
      <Header />
      <main className="mt-16 px-4 w-full flex flex-col gap-12">
        <section className="text-base-content w-full">
          <h1 className="text-4xl font-bold mb-4">Hardware Request</h1>
          <p className="mb-8 text-lg">
            Use this form to request hardware equipment needed for your projects or coursework. We aim to support Aston CES members with a variety of tools and hardware.
          </p>
          <p className="mb-8 text-lg">
            Please specify exactly what equipment you need below. In the near future, we will introduce a voting system to prioritize and approve expensive or shared lab equipment requests.
          </p>
          <p className="italic text-sm text-base-content/70 mb-8">
            Note: This is an initial version of the hardware request system as part of our closed beta.
          </p>
          <HardwareRequestForm className="w-full" />
        </section>
      </main>
    </>
  );
}

