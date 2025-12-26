export default function ContactInfo() {
  return (
    <section className="w-full md:px-0 mt-20 text-center lg:text-start">
      <div className="grid md:grid-cols-3 gap-6 ">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-foreground uppercase tracking-wider">
            Work For
          </h3>
          <p className="text-foreground font-semibold">Web Application</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-foreground uppercase tracking-wider">
            Phone
          </h3>
          <p className="text-foreground font-semibold">+880 1622 143630</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-foreground uppercase tracking-wider">
            Drop me an email
          </h3>
          <p className="text-foreground font-semibold">
            sohanshahariar4@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}
