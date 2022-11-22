
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';

const PricingOption = (props) => {
    const { name, price, benefits } = props.option;
    return (
        <div className='bg-white p-4 rounded-lg '>
            <h2 className='bg-indigo-300 py-2 rounded font-bold text-xl'>{name}</h2>
            <p className='text-5xl font-bold'>{price}
                <span className='text-xl font-bold text-gray-500'>/mo</span></p>
            <div>
                <h3 className='text-xl text-left'>Benefits:</h3>
                {
                    benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
                }
            </div>
            <button className='bg-green-500 flex w-full justify-center text-white hover:text-green-700 font-bold py-2 rounded mt-4'>
                Buy Now <ArrowRightIcon className='w-6 h-6 ml-2'></ArrowRightIcon>
            </button>
        </div>
    );
};

export default PricingOption;