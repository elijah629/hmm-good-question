import ForYou from "@/components/ForYou";
import PostForm from "@/components/PostForm";
import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Home() {
	const supabase = createServerComponentClient<Database>({ cookies });

	const {
		data: { session }
	} = await supabase.auth.getSession();

	// Show posting form if logged in, otherwise show top posts from all users
	return (
		<>
			<div className="flex flex-col md:join-vertical">
				{session && (
					<>
						<PostForm session={session} />
						<ForYou />
					</>
				)}
			</div>
		</>
	);
}
