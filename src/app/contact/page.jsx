import { PageHeader } from '@/components/common/page-header/page-header';
import { Spacer } from '@/components/common/spacer/spacer';
import { Contact } from '@/components/contact/contact';
import React from 'react'

export const metadata = {
    title: "Contact Us",
    description: "Get in touch with us. We'd love to hear from you! Reach out to us via email, phone, or social media. We're here to help.",
  };

const Page = () => {
  return (
    <>
        <PageHeader title="Contact Us"/>
        <Spacer/>
        <Contact/>
    </>
  )
}

export default Page