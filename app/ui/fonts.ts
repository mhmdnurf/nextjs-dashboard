import { Inter, Lusitana } from 'next/font/google';

type Font = {
    family: string;
    weight?: string;
    };

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({weight: '700', subsets: ['latin']});