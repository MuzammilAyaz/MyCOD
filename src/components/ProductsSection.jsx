import React from 'react';
import ProductCard from './ProductCard';
import './ProductsSection.css';

const ProductsSection = () => {
    const products = [
        {
            id: 1,
            title: 'Vitamin D₂ Capsules (60 count)',
            subtitle: 'Your Daily Dose of Sunshine',
            image: '/images/product-sunshine.png',
            price: '€18.99',
            tags: ['Vegan', 'Immunity']
        },
        {
            id: 2,
            title: 'Functional Mushroom Powder (100g)',
            subtitle: 'Mushroom-Derived Vitamin D',
            image: '/images/product-powder.png',
            price: '€16.50',
            tags: ['Versatile', 'Potent']
        },
        {
            id: 3,
            title: 'Vitamin D₂ Gummies (60 count)',
            subtitle: 'Delicious & Natural',
            image: '/images/product-gummies.png',
            price: '€21.99',
            tags: ['Tasty', 'Family Friendly']
        }
    ];

    return (
        <section id="products" className="section products-section">
            <div className="container">
                <div className="section-header text-center mb-md">
                    <h2 className="section-title">Our Collection</h2>
                    <p className="section-subtitle">
                        Ethically sourced, scientifically verified, and 100% plant-based.
                    </p>
                </div>
                <div className="grid grid-3">
                    {products.map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
