import { PageHeader } from '@/components/common/page-header/page-header'
import { Spacer } from '@/components/common/spacer/spacer'
import { AdminCreateForm } from '@/components/dashboard/admin/admin-create-form'
import { wait } from '@/helpers/misc'
import React from 'react'

const Page = async () => {
  await wait();

  return (
    <>
        <PageHeader title="New Admin" />
        <Spacer/>
        <AdminCreateForm/>
        <Spacer/>
    </>
  )
}

export default Page