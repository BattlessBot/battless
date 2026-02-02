export const config = {
  runtime: 'edge'
};

export default async function handler() {
  // Use Edge Config's public read token
  const thoughts = await fetch(
    'https://edge-config.vercel.com/ecfg_mleedjj4syhzruiqnpdqgfwxftqf/item/thoughts?token=31cf2f41-1276-4170-886a-7eff94857cfd'
  ).then(r => r.json());

  return new Response(JSON.stringify(thoughts), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=60'
    }
  });
}
