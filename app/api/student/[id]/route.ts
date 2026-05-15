import { NextResponse } from 'next/server';

const data: Record<string, object> = {
  '001': { name: 'Ahmad Iftikhar Khan', enrollment: '01-131232-009' },
  '002': { name: 'John', enrollment: '01-131232-010' },
};

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const student = data[id];
    
    if (!student) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    
    return NextResponse.json(student);
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
