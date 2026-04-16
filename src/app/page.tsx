import React from 'react';
import { redirect } from 'next/navigation';

const page = () => {

  redirect('/create-task');

  return null
};

export default page;