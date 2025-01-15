'use client'

import Button from "@/components/micro/button"
import Link from "next/link"

export default function OptionsListComponent(){

    return <div>
        <Link
            href={'/elements/list'}
        >
            <Button>
                List Elements
            </Button>
        </Link>
    </div>

}