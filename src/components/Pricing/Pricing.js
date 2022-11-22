import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOption = [
        {
            id: 1, name: 'Free', price: 0, benefits: [
                'Lifetime Free',
                'Unlimited Deals',
                'Localized Deals',
                'Fantastic Deals',
                'Crazy Deals'
            ]
        },
        {
            id: 2, name: 'Regular', price: 9.99, benefits: [
                'Everything on Free',
                'Unlimited Deals',
                'Localized Deals',
                'Fantastic Deals',
                'Crazy Deals'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, benefits: [
                'Everything on Regular',
                'Unlimited Deals',
                'Localized Deals',
                'Fantastic Deals',
                'Crazy Deals'
            ]
        }
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-4 '>
            <h1 className='text-6xl font-mono text-white'>Best deals of the town</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolorum doloribus inventore nam adipisci rerum et possimus ut in neque?</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOption.map(option => <PricingOption
                        key={option.id}
                        option={option}></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;