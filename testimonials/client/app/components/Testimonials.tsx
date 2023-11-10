import Image from "next/image";
import { TestimonialProps } from "@/types";
import { testimonials } from "@/data/testimonials";

export const Testimonials = () => {
    return (
        <div className="grid grid-cols-5 grid-rows-2 gap-8 h-8/12 w-11/12 mx-auto p-5">
            {testimonials.map((testimonial) => (
                <Testimonial {...testimonial} />
            ))}
        </div>
    );
};

export const Testimonial = ({
    bgColor,
    textColor,
    name,
    title,
    testimonial,
    column,
    row,
}: TestimonialProps) => {
    return (
        <article
            className={`
            ${bgColor} ${textColor} ${column} ${row} 
            rounded-lg p-10
            `}
        >
            <div className="flex gap-2">
                <Image
                    src="/images/image-kira.jpg"
                    className="rounded-full"
                    alt=""
                    width={50}
                    height={50}
                />
                <div className="flex flex-col">
                    <p className="text-lg font-semibold">{name}</p>
                    <p className="text-gray-300">Verified graduate</p>
                </div>
            </div>
            <h3 className="text-xl font-bold my-4">{title}</h3>
            <p>{testimonial}</p>
        </article>
    );
};
