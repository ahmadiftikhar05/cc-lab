export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const geo = (req as any).geo;
  
  return NextResponse.json({
    country: geo?.country || 'Only available on production',
    city: geo?.city || 'Test on your deployed URL',
    runtime: 'edge',
  });
}