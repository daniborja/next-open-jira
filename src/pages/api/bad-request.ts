import type { NextApiRequest, NextApiResponse } from 'next';

type HandleBadReqData = {
  message: string | string[];
};

export default function handleBadRed(
  req: NextApiRequest,
  res: NextApiResponse<HandleBadReqData>
) {
  const { message = 'Bad request' } = req.query;

  res.status(400).json({ message });
}
