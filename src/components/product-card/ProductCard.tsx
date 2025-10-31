
import { Product } from "@/types";
import Image from "next/image";

import Link from "next/link";
import { TitleLink } from "./TitleLink";

interface Props {
  product: Product;
  variant?: "default" | "with-back-btn";
}
export const ProductCard = ({ product, variant }: Props) => {
  const { title, price, description, rating, images, id } = product;
  return (
    <div className="bg-card rounded-lg shadow-md p-6 flex flex-col gap-4 border border-border">
      <div className="flex items-center gap-4">
        <Image
          src={images[0]}
          alt={title}
          width={120}
          height={120}
          className="rounded-md object-cover bg-muted"
        />
        <div>
          <TitleLink title={title} id={id} />
          <div className="flex items-center gap-2 mt-1">
            <span className="text-yellow-500 font-medium">{rating}★</span>
          </div>
          <p className="text-muted-foreground mt-2">{description}</p>
        </div>
      </div>
      <div className="flex justify-end">
        <span className="text-primary font-bold text-xl">{price}$</span>
      </div>
      {variant === "with-back-btn" ? (
        <Link href="/products-server-version">Back to products</Link>
      ) : null}
    </div>
  );
};