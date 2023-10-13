import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"

export const metadata = {
    title: 'webapp',
    description: 'A Nextjs discussion platform'
}
const inter = Inter({subsets: ["latin"]}) 

export default function RootLayout({children}:{children: React.ReactNode}){
    return(
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-[rgb(101, 96, 96)]`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}
