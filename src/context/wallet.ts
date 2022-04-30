import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { useRouter } from 'next/router'

if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
}
