import Link from "next/link";
import { servicePageItems } from "@/constants/constants";


export default function Services() {
    return (
        <section className={'w-full mx-auto bg-slate-100 px-4 md:px-8 py-16 z-10'}>
            <div className="flex flex-col text-gray-700 max-w-[1536px]">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
                    Services
                </h1>
                <h2 className="text-lg rounded-sm md:text-2xl mb-4 flex items-center capitalize justify-center">
                    Below is a list of our services,<br/>click for detailed view
                </h2>
                <div className="flex flex-col items-center justify-center bg-gray-200">
                    {servicePageItems.map((servicePageItem) => (
                        <Link href={servicePageItem.url} key={servicePageItem.id}>
                            <h1 className="hover:scale-y-1.2 flex items-center justify-center text-2xl font-semibold mb-2 h-20 text-blue-900">
                                {servicePageItem.title}

                            </h1>
                            {servicePageItem.image}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
