import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NavbarUser } from "./NavbarUser";
import { Database } from "@/types/supabase";
import Link from "next/link";

export default async function Navbar() {
	const supabase = createServerComponentClient<Database>({ cookies });

	const {
		data: { session }
	} = await supabase.auth.getSession();

	return (
		<nav className="navbar bg-neutral md:rounded-box md:mb-4">
			<div className="flex-1">
				<Link
					href="/"
					className="btn btn-ghost text-xl normal-case">
					Hmm.
				</Link>
			</div>
			<div className="flex-none gap-2">
				<div className="form-control">
					<input
						type="text"
						placeholder="Search"
						className="input input-bordered w-24 md:w-auto"
					/>
				</div>
				<NavbarUser logged_in={!!session} />
			</div>
		</nav>
	);
}
