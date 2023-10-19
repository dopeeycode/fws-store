import { ProductsWithTotalPrice } from "@/utils/product";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
  product: ProductsWithTotalPrice
}
 
const ProductItem = ({ product }: ProductItemProps) => {
  return ( 
    <div className="flex flex-col gap-4 max-w-[156px]">
      <div className="bg-accent relative rounded-lg w-[156px] h-[170px] ] flex items-center
      justify-center">
        <Image 
          src={product.imageUrls[0]}
          alt={product.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-auto max-w-[80%] max-h-[70%]"
          style={{
            objectFit: 'contain'
          }}
        />
        {product.discountPercentage > 0 && (
          <Badge className="absolute left-2 top-2 px-3 py-[2px]">
            <ArrowDownIcon size={14} /> {product.discountPercentage}%
          </Badge>
        )}
      </div>


      <div>
        <p className="text-sm overflow-hidden text-ellipsis whitespace-nowrap">
          {product.name}
        </p>

        <div className="flex items-center gap-2">
          {product.discountPercentage > 0 ? (
            <>
              <p className="font-semibold">R$ {product.totalPrice.toFixed(2)}</p>
              <p className="text-xs text-zinc-700 line-through opacity-75">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            </>
          ): (
            <p className="font-semibold">
              R$ {Number(product.basePrice).toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
   );
}
 
export default ProductItem;