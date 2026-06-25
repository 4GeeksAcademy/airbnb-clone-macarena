interface HostInfoProps {
  host: string;
}

const HostInfo = ({ host }: HostInfoProps) => {
  return (
    <section className="border-b py-8">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 text-xl font-bold">
          {host.charAt(0)}
        </div>

        <div>
          <h2 className="font-bold">Anfitrión: {host}</h2>
          <p className="text-sm text-gray-600">
            Superanfitrión · 5 años como anfitrión/a
          </p>
        </div>
      </div>
    </section>
  );
};

export default HostInfo;