import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export const revalidate = 0;

export default async function User({
	params: { id }
}: {
	params: { id: string };
}) {
	const supabase = createServerComponentClient<Database>({ cookies });

	const { data } = await supabase
		.from("profiles")
		.select()
		.match({ id })
		.single();

	if (!data) {
		notFound();
	}

	return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
