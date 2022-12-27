import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // health check
  if (req.method === 'GET') {
    res.status(200).json({ status: 'ok' })
  }
}
