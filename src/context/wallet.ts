import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { useRouter } from 'next/router'

let eth; 

if (typeof window.ethereum !== 'undefined') {
    eth = window.ethereum;
}
