export const config = {
  runtime: 'edge'
};

export default async function handler() {
  const thoughts = await fetch(
    'https://edge-config.vercel.com/ecfg_mleedjj4syhzruiqnpdqgfwxftqf/item/thoughts',
    {
      headers: {
        'Authorization': 'Bearer ' + process.env.VERCEL_TOKEN
      }
    }
  ).then(r => r.json());

  return new Response(JSON.stringify(thoughts), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=60'
    }
  });
}
