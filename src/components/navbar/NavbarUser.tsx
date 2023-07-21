"use client";

import {
	Session,
	createClientComponentClient
} from "@supabase/auth-helpers-nextjs";
import { IconUser } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function NavbarUser(props: { logged_in: boolean }) {
	const supabase = createClientComponentClient();
	const router = useRouter();
	useEffect(() => {
		const {
			data: {
				subscription: { unsubscribe }
			}
		} = supabase.auth.onAuthStateChange(event => {
			if (event === "SIGNED_IN" || event === "SIGNED_OUT") {
				router.push("/");
			}
		});
		return () => {
			unsubscribe();
		};
	}, [router, supabase.auth]);

	return props.logged_in ? (
		<div className="dropdown dropdown-end">
			<label
				tabIndex={0}
				className="avatar btn btn-circle btn-outline">
				<IconUser size={25} />
			</label>
			<ul
				tabIndex={0}
				className="menu dropdown-content rounded-box menu-sm z-10 mt-3 w-52 border-2 bg-neutral p-2 shadow">
				{/* <li>
									<a className="justify-between">
										Profile
										<span className="badge">New</span>
									</a>
								</li>
								<li>
									<a>Settings</a>
								</li> */}
				<li>
					<button
						onClick={() => {
							supabase.auth.signOut();
						}}>
						Logout
					</button>
				</li>
			</ul>
		</div>
	) : (
		<div className="join">
			<Link
				href="/auth/signup"
				className="btn btn-accent btn-outline join-item">
				Signup
			</Link>
			<Link
				href="/auth/login"
				className="btn btn-accent btn-outline join-item">
				Login
			</Link>
		</div>
	);
}
