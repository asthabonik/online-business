
// Product types
export interface ProductImage {
	featured: string;
	thumbnails: string[];
}

export interface ProductInventory {
	stock: number;
	lowStockThreshold: number;
	trackQuantity: boolean;
}

export interface ProductSeo {
	metaTitle: string;
	metaDescription: string;
}

export interface Product {
	id: string;
	sku: string;
	slug: string;
	title: string;
	description: string;
	price: number;
	compareAtPrice?: number;
	category: string;
	tags: string[];
	images: ProductImage;
	inventory: ProductInventory;
	seo: ProductSeo;
	isActive: boolean;
	createdAt: string;
	updatedAt: string;
}

// Category types
export interface Category {
	id: string;
	name: string;
	slug: string;
	description: string;
	image: string;
	isActive: boolean;
}

// Cart types
export interface CartItem {
	productId: string;
	sku: string;
	title: string;
	price: number;
	quantity: number;
	image: string;
}

export interface Cart {
	items: CartItem[];
	subtotal: number;
	tax: number;
	shipping: number;
	total: number;
}

