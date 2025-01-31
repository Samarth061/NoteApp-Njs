import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  const { title, content, userId }: { title: string, content: string, userId: string } = await req.json();

  const { data, error } = await supabase
    .from('notes')
    .insert([{ title, content, user_id: userId }]);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ data }), { status: 200 });
}
