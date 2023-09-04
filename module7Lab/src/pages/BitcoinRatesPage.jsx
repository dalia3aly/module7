import React, { useState } from 'react';
import useFetchBitcoinRates from '../hooks/useFetchBitcoinRates';          // Import the custom hook

import { useEmojiContext } from '../context/EmojiContext';

function BitcoinRates() {
    return 
    <div className='componentBox'>

<EmojiProvider>

<Emoji />
<BitcoinRateswHooks />

</ EmojiProvider >

    </div>
  }
  export default BitcoinRates;