export default async function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-neutral-100 p-4 text-gray-900 md:p-24 dark:bg-neutral-900 dark:text-gray-100">
      <div className="flex w-full flex-col items-start justify-start md:my-auto md:flex-row md:items-center md:justify-center">
        <section className="mb-10 w-full items-center justify-center text-center md:mb-0">
          <h1 className="mb-5 text-4xl md:mb-0 md:text-5xl">Ross Litzenberger</h1>
          <p className="text-lg">Senior Software Engineer</p>
        </section>
        <section className="w-full items-center justify-center">
          <p className="mb-3 md:text-center">
            I am a self starting senior web developer with passion in building beautiful end
            products. My motivation and perseverance help me envision the final objective, while my
            creativity allows me to naturally generate fresh ideas.
          </p>
          <p className="mb-3 md:text-center">
            My journey started out as private estate manager who converted to a Developer. I have
            been on teams small and large, including a startup called Stream Elements, where I
            helped develop their product from the ground up. My former day to day had me at Uptake.
            My current work is at Truckstop as a Front End Engineer.
          </p>
          <p className="mb-3 md:text-center">
            Outside of work, I enjoy photography, training for triathlons, and tending to my garden
            bed. These hobbies provide a balance to my professional life, allowing me to stay
            grounded and inspired.
          </p>
        </section>
      </div>
    </main>
  );
}
