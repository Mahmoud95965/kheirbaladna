import { notFound } from 'next/navigation';
import { getProduct, getProducts } from '@/lib/data/products';
import ProductClient from '@/components/products/ProductClient';

export function generateStaticParams() {
  const products = getProducts();
  return products.map((product) => ({ id: product.id.toString() }));
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id?.toString());
  if (!product) {
    notFound();
  }
  return <ProductClient product={product} />;
}


