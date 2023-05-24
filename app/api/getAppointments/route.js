// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { groq } from 'next-sanity';
import { client } from '../../../sanity';
import { NextResponse } from 'next/server';

const query = groq`
*[_type == "appointments"]
`

export async function GET(request) {
    const appointments = await client.fetch(query)
    return NextResponse.json(appointments)
}
  