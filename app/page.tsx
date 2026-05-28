import { redirect } from 'next/navigation';

// Root → docs landing. Docs site has no marketing page of its own;
// the marketing/landing/checkout lives at https://koala.eularix.com (web app).
export default function Page() {
  redirect('/docs');
}
