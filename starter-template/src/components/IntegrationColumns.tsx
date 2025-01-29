import { integrations } from '@/sections/Integrations'
import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

type integrationCol = typeof integrations

const IntegrationColumns = (props:{
    integrations:integrationCol,
    className?:string
}) => {
    const {integrations,className} = props
  return (
    <div className={twMerge("flex flex-col gap-4 pb-4",className)}>
                        {integrations.map(integration=>(
                            <div key={integration.name} className="bg-neutral-900 border border-white/10 p-6 rounded-3xl ">
                                <Image src={integration.icon} alt={integration.name} className="size-24 mx-auto"/>
                                <div className="mt-8">
                                    <h3 className="text-center font-medium text-2xl" >{integration.name}</h3>
                                    <p className="text-center text-white/50 mt-4">{integration.description}</p>
                                </div>
                            </div>

                        ))}
                    </div>
  )
}

export default IntegrationColumns