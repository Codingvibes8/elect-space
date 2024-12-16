import Link from "next/link";
import Image from "next/image";
import {servicePageItems} from "@/constants/constants";

export default function Services() {
    return (
        <section className={'max-w-[1536px] mx-auto bg-slate-100 px-4 md:px-8 py-16 z-10'}>
            <div className="flex flex-col text-gray-700">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
                    Electrical Services
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4 gap-y-6">
                    {servicePageItems.map((servicePageItem) => (
                        <Link href={servicePageItem.url} key={servicePageItem.id}>
                            <div
                                className="hover:scale-y-1.2 flex flex-col items-center justify-center text-2xl font-semibold mb-2  text-blue-900">
                                <h1 className={'mb-4'}>{servicePageItem.title}</h1>
                                <Image src={servicePageItem.image} alt={servicePageItem.title} width={400}
                                       height={200} className={'rounded-t-2xl'}/>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}




